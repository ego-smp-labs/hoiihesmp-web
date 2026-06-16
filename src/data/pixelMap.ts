export interface ItemAsset {
  cdnName: string;
  displayName: string;
  type?: 'item' | 'block';
  glowColor?: string; // Custom glow tint color if enchanted
}

export const itemAssetMap: Record<string, ItemAsset> = {
  // Base Items
  stick: { cdnName: "stick", type: "item", displayName: "Gậy" },
  breeze_rod: { cdnName: "https://api.minecraftitems.xyz/api/item/breeze_rod", type: "item", displayName: "Thỏi Gió" },
  netherite_ingot: { cdnName: "netherite_ingot", type: "item", displayName: "Thỏi Netherite" },
  heavy_core: { cdnName: "https://api.minecraftitems.xyz/api/item/heavy_core", type: "item", displayName: "Lõi Nặng" },
  ender_pearl: { cdnName: "ender_pearl", type: "item", displayName: "Ngọc Ender" },
  amethyst_shard: { cdnName: "amethyst_shard", type: "item", displayName: "Mảnh Thạch Anh Tím" },
  enchanted_golden_apple: { cdnName: "golden_apple", type: "item", displayName: "Táo Vàng Phù Phép", glowColor: "rgba(255, 220, 0, 0.4)" },
  wither_rose: { cdnName: "wither_rose", type: "block", displayName: "Hoa Wither" },
  cursed_player_head: { cdnName: "https://minotar.net/avatar/Steve/64.png", type: "item", displayName: "Đầu Người Chơi Bị Nguyền" },
  challenger_eye: { cdnName: "ender_eye", type: "item", displayName: "Mắt Thách Đấu", glowColor: "rgba(212, 28, 217, 0.3)" },
  obsidian_chaos: { cdnName: "obsidian", type: "block", displayName: "Obsidian Chaos", glowColor: "rgba(255, 26, 26, 0.3)" },
  obsidian: { cdnName: "obsidian", type: "block", displayName: "Hắc Diện Thạch" },
  netherite_block: { cdnName: "netherite_block", type: "block", displayName: "Khối Netherite" },
  sculk_catalyst: { cdnName: "sculk_catalyst_side", type: "block", displayName: "Sculk Catalyst" },
  echo_shard: { cdnName: "echo_shard", type: "item", displayName: "Mảnh Tiếng Vọng" },
  soul_campfire: { cdnName: "https://api.minecraftitems.xyz/api/item/soul_campfire", type: "item", displayName: "Lửa Trại Linh Hồn" },
  ghast_tear: { cdnName: "ghast_tear", type: "item", displayName: "Nước Mắt Ghast" },
  zombie_head: { cdnName: "https://minotar.net/avatar/Zombie/64.png", type: "item", displayName: "Đầu Zombie" },
  magma_block: { cdnName: "https://api.minecraftitems.xyz/api/item/magma_block", type: "item", displayName: "Khối Magma" },
  nether_wart: { cdnName: "nether_wart", type: "item", displayName: "Bướu Địa Ngục" },
  soul_lantern: { cdnName: "https://api.minecraftitems.xyz/api/item/soul_lantern", type: "item", displayName: "Đèn Lồng Linh Hồn" },
  redstone_block: { cdnName: "redstone_block", type: "block", displayName: "Khối Đá Đỏ" },
  potion: { cdnName: "potion", type: "item", displayName: "Thuốc Độc Bất Kỳ" },
  wither_skeleton_skull: { cdnName: "https://minotar.net/avatar/MHF_WSkeleton/64.png", type: "item", displayName: "Đầu Khô Lâu Wither" },
  glitch_clock: { cdnName: "clock", type: "item", displayName: "Đồng hồ Glitch", glowColor: "rgba(255, 170, 0, 0.45)" },
  netherite_spear: { cdnName: "trident", type: "item", displayName: "Giáo Netherite" },
  any_head: { cdnName: "https://minotar.net/avatar/MHF_Skeleton/64.png", type: "item", displayName: "Đầu Bất Kỳ (Any Head)" },
  any_poison_potion: { cdnName: "potion", type: "item", displayName: "Thuốc Độc Bất Kỳ (Any Poison Potion)" },

  // Mace Custom Weapons
  mace_power: { cdnName: "mace", type: "item", displayName: "Búa Quyền Năng", glowColor: "rgba(255, 170, 0, 0.45)" },
  mace_void: { cdnName: "mace", type: "item", displayName: "Búa Vực Thẳm", glowColor: "rgba(255, 85, 255, 0.45)" },
  mace_chaos: { cdnName: "mace", type: "item", displayName: "Búa Hỗn Loạn", glowColor: "rgba(247, 37, 133, 0.5)" },
  mace_vampiric: { cdnName: "mace", type: "item", displayName: "Búa Huyết Ma", glowColor: "rgba(230, 57, 70, 0.45)" },
  mace_gravity: { cdnName: "mace", type: "item", displayName: "Búa Trọng Lực Kỳ Dị", glowColor: "rgba(0, 216, 180, 0.45)" },
  mace_soulfire: { cdnName: "mace", type: "item", displayName: "Búa Hỏa Thiêu Hồn", glowColor: "rgba(0, 245, 212, 0.45)" },
  warden_spear: { cdnName: "trident", type: "item", displayName: "Giáo Tiếng Vọng Warden", glowColor: "rgba(0, 180, 216, 0.4)" },
  chronos_spear: { cdnName: "trident", type: "item", displayName: "Giáo Thời Gian Chronos", glowColor: "rgba(226, 149, 120, 0.4)" },
  cursed_sword: { cdnName: "netherite_sword", type: "item", displayName: "Kiếm Cổ Nguyền", glowColor: "rgba(114, 9, 183, 0.45)" },

  // Custom Cores
  ego_core: { cdnName: "https://api.minecraftitems.xyz/api/item/heavy_core", type: "item", displayName: "🔮 Ego Core", glowColor: "rgba(174, 79, 184, 0.4)" },
  soulfire_core: { cdnName: "https://api.minecraftitems.xyz/api/item/heavy_core", type: "item", displayName: "🔥 Soulfire Core", glowColor: "rgba(30, 192, 217, 0.4)" },
  blood_core: { cdnName: "https://api.minecraftitems.xyz/api/item/heavy_core", type: "item", displayName: "🩸 Blood Core", glowColor: "rgba(217, 43, 43, 0.4)" },
  sculk_core: { cdnName: "https://api.minecraftitems.xyz/api/item/heavy_core", type: "item", displayName: "💀 Sculk Core", glowColor: "rgba(0, 216, 180, 0.4)" },
  end_core: { cdnName: "https://api.minecraftitems.xyz/api/item/heavy_core", type: "item", displayName: "🌀 End Core", glowColor: "rgba(178, 60, 217, 0.4)" },
  ruined_core: { cdnName: "https://api.minecraftitems.xyz/api/item/heavy_core", type: "item", displayName: "💀 Ruined Core", glowColor: "rgba(63, 8, 92, 0.2)" },

  // Vane Trifles Custom Items
  golden_sickle: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/golden_sickle.png", type: "item", displayName: "Liềm Hoạt Thạch (Vàng)" },
  file_tool: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/file.png", type: "item", displayName: "Giũa Kiến Trúc" },
  trowel: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/trowel.png", type: "item", displayName: "Bay Xây Dựng" },
  north_compass: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/north_compass_16.png", type: "item", displayName: "La Bàn Hướng Bắc" },
  slime_bucket: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/slime_bucket.png", type: "item", displayName: "Xô Bắt Slime" },
  pouch: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/pouch.png", type: "item", displayName: "Túi Da Pouch" },
  backpack: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/backpack.png", type: "item", displayName: "Balo Leo Núi" },
  papyrus_scroll: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/papyrus_scroll.png", type: "item", displayName: "Cuộn Giấy Papyrus" },
  home_scroll: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/home_scroll.png", type: "item", displayName: "Cuộn Giấy Về Nhà" },
  unstable_scroll: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/unstable_scroll.png", type: "item", displayName: "Cuộn Giấy Bất Ổn" },
  spawn_scroll: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/spawn_scroll.png", type: "item", displayName: "Cuộn Giấy Về Spawn" },
  death_scroll: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/death_scroll.png", type: "item", displayName: "Cuộn Giấy Điểm Chết" },
  lodestone_scroll: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/lodestone_scroll.png", type: "item", displayName: "Cuộn Giấy Định Vị" },
  empty_xp_bottle: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/empty_xp_bottle.png", type: "item", displayName: "Chai Kinh Nghiệm Rỗng" },
  medium_xp_bottle: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/medium_xp_bottle.png", type: "item", displayName: "Chai Kinh Nghiệm" },
  reinforced_elytra: { cdnName: "https://oddlama.github.io/vane/assets/vane-trifles/items/reinforced_elytra.png", type: "item", displayName: "Cánh Cứng Netherite" },

  // Common Crafting Ingredients
  copper_ingot: { cdnName: "copper_ingot", type: "item", displayName: "Thỏi Đồng" },
  copper_block: { cdnName: "copper_block", type: "block", displayName: "Khối Đồng" },
  iron_ingot: { cdnName: "iron_ingot", type: "item", displayName: "Thỏi Sắt" },
  gold_ingot: { cdnName: "gold_ingot", type: "item", displayName: "Thỏi Vàng" },
  diamond: { cdnName: "diamond", type: "item", displayName: "Kim Cương" },
  leather: { cdnName: "leather", type: "item", displayName: "Da Thuộc" },
  paper: { cdnName: "paper", type: "item", displayName: "Giấy" },
  chest: { cdnName: "https://api.minecraftitems.xyz/api/item/chest", type: "item", displayName: "Rương" },
  slime_block: { cdnName: "slime_block", type: "block", displayName: "Khối Slime" },
  iron_bars: { cdnName: "iron_bars", type: "block", displayName: "Hàng Rào Sắt" },
  compass: { cdnName: "compass", type: "item", displayName: "La Bàn" },
  glass_bottle: { cdnName: "glass_bottle", type: "item", displayName: "Chai Thủy Tinh Rỗng" },
  bucket: { cdnName: "bucket", type: "item", displayName: "Xô Rỗng" },
  string: { cdnName: "string", type: "item", displayName: "Sợi Chỉ" },
  rabbit_hide: { cdnName: "rabbit_hide", type: "item", displayName: "Da Thỏ" },
  goat_horn: { cdnName: "goat_horn", type: "item", displayName: "Sừng Dê" },
  campfire: { cdnName: "campfire", type: "item", displayName: "Lửa Trại" },
  experience_bottle: { cdnName: "experience_bottle", type: "item", displayName: "Chai Kinh Nghiệm" },
  elytra: { cdnName: "elytra", type: "item", displayName: "Cánh Cứng" },
  chorus_fruit: { cdnName: "chorus_fruit", type: "item", displayName: "Quả Điệp Vy" },
  recovery_compass: { cdnName: "recovery_compass_16", type: "item", displayName: "La Bàn Hồi Phục" },
  bone: { cdnName: "bone", type: "item", displayName: "Xương" },
  gold_nugget: { cdnName: "gold_nugget", type: "item", displayName: "Hạt Vàng" },
  redstone: { cdnName: "redstone", type: "item", displayName: "Bột Đá Đỏ" },
  bed: { cdnName: "red_bed", type: "item", displayName: "Giường Ngủ" },
  netherite_upgrade_smithing_template: { cdnName: "netherite_upgrade_smithing_template", type: "item", displayName: "Phôi Nâng Cấp Netherite" },
  shulker_box: { cdnName: "shulker_box", type: "block", displayName: "Hộp Shulker" },
  leather_chestplate: { cdnName: "leather_chestplate", type: "item", displayName: "Giáp Ngực Da" },
  wheat_seeds: { cdnName: "wheat_seeds", type: "item", displayName: "Hạt Giống Lúa" },
  sapling: { cdnName: "oak_sapling", type: "item", displayName: "Mầm Cây Sồi" }
};

export const getCdnUrl = (itemId: string): string => {
  const asset = itemAssetMap[itemId];
  if (!asset) {
    return "https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@1.21/assets/minecraft/textures/item/heavy_core.png";
  }
  
  if (asset.cdnName.startsWith("http://") || asset.cdnName.startsWith("https://")) {
    return asset.cdnName;
  }
  
  const type = asset.type || "item";
  return `https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@1.21/assets/minecraft/textures/${type}/${asset.cdnName}.png`;
};

export const getItemDisplayName = (itemId: string): string => {
  const asset = itemAssetMap[itemId];
  return asset ? asset.displayName : itemId;
};

// ────────────────────────────────────────────────────────────────
// Tối ưu hóa Reactivity Vue 3: Đóng băng dữ liệu tĩnh
// ────────────────────────────────────────────────────────────────
Object.freeze(itemAssetMap);
