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
  sickle: { cdnName: "iron_hoe", type: "item", displayName: "Liềm Thu Hoạch" },
  file_tool: { cdnName: "shears", type: "item", displayName: "Giũa Thiết Kế" },
  trowel: { cdnName: "brick", type: "item", displayName: "Bay Xây Dựng" },
  north_compass: { cdnName: "compass", type: "item", displayName: "La Bàn Hướng Bắc" },
  slime_bucket: { cdnName: "slime_ball", type: "item", displayName: "Xô Slime Dò Chunk" },
  backpack: { cdnName: "bundle", type: "item", displayName: "Balo Leo Núi" },
  pouch: { cdnName: "bundle", type: "item", displayName: "Túi Đồ Cá Nhân" },
  portal_scroll: { cdnName: "map", type: "item", displayName: "Cuộn Giấy Dịch Chuyển" },
  xp_bottle: { cdnName: "experience_bottle", type: "item", displayName: "Chai Đựng EXP" },

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
  bucket: { cdnName: "bucket", type: "item", displayName: "Xô Rỗng" }
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
