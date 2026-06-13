// ────────────────────────────────────────────────────────────────
// Singleton AudioContext — tái sử dụng 1 context duy nhất
// Ngăn rò rỉ bộ nhớ & vượt giới hạn trình duyệt (~6 context)
// ────────────────────────────────────────────────────────────────

let sharedCtx: AudioContext | null = null;

/**
 * Lấy hoặc tạo AudioContext singleton.
 * Tự động resume nếu trình duyệt tạm đình chỉ (Autoplay Policy).
 */
function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;

  if (!sharedCtx) {
    const Ctor = window.AudioContext || (window as any).webkitAudioContext;
    if (!Ctor) return null;
    sharedCtx = new Ctor();
  }

  // Chrome/Safari đình chỉ AudioContext cho đến khi có tương tác người dùng
  if (sharedCtx.state === "suspended") {
    sharedCtx.resume().catch(e => console.warn("AudioContext resume failed:", e));
  }

  return sharedCtx;
}

/** Kiểm tra trạng thái muted từ localStorage */
function isMuted(): boolean {
  if (typeof window === "undefined") return true;
  return localStorage.getItem("mace_wiki_muted") === "true";
}

/**
 * Phát tiếng click gỗ ngắn (wood button click).
 * Sóng sine 140Hz → 60Hz trong 40ms, gain tắt dần lũy thừa.
 */
export function playClickSound(): void {
  if (isMuted()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.04);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  } catch (e) {
    console.warn("Audio click failed:", e);
  }
}

/**
 * Phát tiếng mở rương 2 giai đoạn (chest open creak).
 * Sóng tam giác kép chạy lệch 40ms mô phỏng tiếng bản lề gỗ.
 */
export function playChestSound(): void {
  if (isMuted()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    // Giai đoạn 1: Tiếng lách (creak start)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "triangle";
    osc1.frequency.setValueAtTime(100, now);
    osc1.frequency.linearRampToValueAtTime(180, now + 0.08);
    gain1.gain.setValueAtTime(0.12, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.09);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.1);

    // Giai đoạn 2: Tiếng cách (creak resolve)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(190, now + 0.04);
    osc2.frequency.linearRampToValueAtTime(260, now + 0.15);
    gain2.gain.setValueAtTime(0.08, now + 0.04);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.16);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.04);
    osc2.stop(now + 0.17);
  } catch (e) {
    console.warn("Audio chest failed:", e);
  }
}
