export interface ItemAsset {
  cdnName: string;
  displayName: string;
  glowColor?: string; // Custom glow tint color if enchanted
}

export const itemAssetMap: Record<string, ItemAsset> = {
  // Base Items
  stick: { cdnName: "stick", displayName: "Gậy" },
  breeze_rod: { cdnName: "breeze_rod", displayName: "Thỏi Gió" },
  netherite_ingot: { cdnName: "netherite_ingot", displayName: "Thỏi Netherite" },
  heavy_core: { cdnName: "heavy_core", displayName: "Lõi Nặng" },
  ender_pearl: { cdnName: "ender_pearl", displayName: "Ngọc Ender" },
  amethyst_shard: { cdnName: "amethyst_shard", displayName: "Mảnh Thạch Anh Tím" },
  enchanted_golden_apple: { cdnName: "enchanted_golden_apple", displayName: "Táo Vàng Phù Phép", glowColor: "rgba(255, 220, 0, 0.4)" },
  wither_rose: { cdnName: "wither_rose", displayName: "Hoa Wither" },
  cursed_player_head: { cdnName: "player_head", displayName: "Đầu Người Chơi Bị Nguyền" },
  challenger_eye: { cdnName: "ender_eye", displayName: "Mắt Thách Đấu", glowColor: "rgba(212, 28, 217, 0.3)" },
  obsidian_chaos: { cdnName: "obsidian", displayName: "Obsidian Chaos", glowColor: "rgba(255, 26, 26, 0.3)" },
  obsidian: { cdnName: "obsidian", displayName: "Hắc Diện Thạch" },
  netherite_block: { cdnName: "netherite_block", displayName: "Khối Netherite" },
  sculk_catalyst: { cdnName: "sculk_catalyst", displayName: "Sculk Catalyst" },
  echo_shard: { cdnName: "echo_shard", displayName: "Mảnh Tiếng Vọng" },
  soul_campfire: { cdnName: "soul_campfire", displayName: "Lửa Trại Linh Hồn" },
  ghast_tear: { cdnName: "ghast_tear", displayName: "Nước Mắt Ghast" },
  zombie_head: { cdnName: "zombie_head", displayName: "Đầu Zombie" },
  magma_block: { cdnName: "magma_block", displayName: "Khối Magma" },
  nether_wart: { cdnName: "nether_wart", displayName: "Bướu Địa Ngục" },
  soul_lantern: { cdnName: "soul_lantern", displayName: "Đèn Lồng Linh Hồn" },
  redstone_block: { cdnName: "redstone_block", displayName: "Khối Đá Đỏ" },
  potion: { cdnName: "potion", displayName: "Thuốc Độc Bất Kỳ" },
  wither_skeleton_skull: { cdnName: "wither_skeleton_skull", displayName: "Đầu Khô Lâu Wither" },

  // Mace Custom Weapons
  mace_power: { cdnName: "mace", displayName: "Búa Quyền Năng", glowColor: "rgba(255, 170, 0, 0.45)" },
  mace_void: { cdnName: "mace", displayName: "Búa Vực Thẳm", glowColor: "rgba(255, 85, 255, 0.45)" },
  mace_chaos: { cdnName: "mace", displayName: "Búa Hỗn Loạn", glowColor: "rgba(247, 37, 133, 0.5)" },
  mace_vampiric: { cdnName: "mace", displayName: "Búa Huyết Ma", glowColor: "rgba(230, 57, 70, 0.45)" },
  mace_gravity: { cdnName: "mace", displayName: "Búa Trọng Lực Kỳ Dị", glowColor: "rgba(0, 216, 180, 0.45)" },
  mace_soulfire: { cdnName: "mace", displayName: "Búa Hỏa Thiêu Hồn", glowColor: "rgba(0, 245, 212, 0.45)" },
  warden_spear: { cdnName: "trident", displayName: "Giáo Tiếng Vọng Warden", glowColor: "rgba(0, 180, 216, 0.4)" },
  chronos_spear: { cdnName: "trident", displayName: "Giáo Thời Gian Chronos", glowColor: "rgba(226, 149, 120, 0.4)" },
  cursed_sword: { cdnName: "netherite_sword", displayName: "Kiếm Cổ Nguyền", glowColor: "rgba(114, 9, 183, 0.45)" },

  // Custom Cores
  ego_core: { cdnName: "heavy_core", displayName: "🔮 Ego Core", glowColor: "rgba(174, 79, 184, 0.4)" },
  soulfire_core: { cdnName: "heavy_core", displayName: "🔥 Soulfire Core", glowColor: "rgba(30, 192, 217, 0.4)" },
  blood_core: { cdnName: "heavy_core", displayName: "🩸 Blood Core", glowColor: "rgba(217, 43, 43, 0.4)" },
  sculk_core: { cdnName: "heavy_core", displayName: "💀 Sculk Core", glowColor: "rgba(0, 216, 180, 0.4)" },
  end_core: { cdnName: "heavy_core", displayName: "🌀 End Core", glowColor: "rgba(178, 60, 217, 0.4)" },
  ruined_core: { cdnName: "heavy_core", displayName: "💀 Ruined Core", glowColor: "rgba(63, 8, 92, 0.2)" }
};

export const getCdnUrl = (itemId: string): string => {
  const asset = itemAssetMap[itemId];
  if (!asset) return "https://cdn.jsdelivr.net/npm/minecraft-icon-items@latest/items/heavy_core.png";
  return `https://cdn.jsdelivr.net/npm/minecraft-icon-items@latest/items/${asset.cdnName}.png`;
};

export const getItemDisplayName = (itemId: string): string => {
  const asset = itemAssetMap[itemId];
  return asset ? asset.displayName : itemId;
};
