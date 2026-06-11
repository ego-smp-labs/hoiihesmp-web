export interface Ingredient {
  name: string;
  itemId: string;
  tooltip: string;
}

export interface Recipe {
  shape: string[][];
  ingredients: Record<string, Ingredient>;
}

export interface Weapon {
  id: string;
  name: string;
  enName: string;
  badge: string;
  colorClass: string;
  cmd: number;
  singleton: boolean;
  desc: string;
  tooltip: string;
  recipe: Recipe | null;
}

export interface Core {
  id: string;
  name: string;
  instability: string;
  method: string;
  recipe: Recipe | null;
}

export interface Material {
  id: string;
  name: string;
  cmd: number;
  desc: string;
  method: string;
}

export interface ForgeStep {
  step: string;
  title: string;
  icon: string;
  desc: string;
}

export interface GuideSection {
  id: string;
  title: string;
  content: string;
}

export const colorCodes: Record<string, string> = {
  '0': '#000000', '1': '#0000aa', '2': '#00aa00', '3': '#00aaaa',
  '4': '#aa0000', '5': '#aa00aa', '6': '#ffaa00', '7': '#aaaaaa',
  '8': '#555555', '9': '#5555ff', 'a': '#55ff55', 'b': '#55ffff',
  'c': '#ff5555', 'd': '#ff55ff', 'e': '#ffff55', 'f': '#ffffff'
};

// Mace Exclusive Weapons List (Using Heavy Core as Base)
export const maceWeapons: Weapon[] = [
  {
    id: "power",
    name: "Búa Quyền Năng",
    enName: "Mace of Power",
    badge: "⚡",
    colorClass: "border-[#ffaa00]",
    cmd: 2001,
    singleton: true,
    desc: "Cổ vật cuồng phong được rèn trong tâm bão, dồn mọi áp lực cơ học hất tung kẻ thù lên mây xanh.",
    tooltip: "&b&lMace of Power|&7A heavy storm-forged mace that turns clean hits into upward force.||&6⚡ Active — Power Strike:|&fNgồi + Đánh trúng kẻ địch. 10% cơ hội nổ đẩy tung toàn bộ sinh vật bán kính 10 khối lên trời. (Hồi chiêu 8 giây)||&a⭐ Passive — Momentum:|&fĐòn trúng tăng +5% tốc chạy trong 10s. Đòn Smash đập từ trên cao nhân x1.10 sát thương và +0.35 đẩy lùi.||&c☠ Curse — Vung búa hụt:|&fNếu đánh hụt, chịu Slowness trong 60 giây. Cầm búa trên tay bị trừ 10% tốc chạy.",
    recipe: {
      shape: [
        ["", "H", ""],
        ["", "B", ""],
        ["", "N", ""]
      ],
      ingredients: {
        H: { name: "Heavy Core", itemId: "heavy_core", tooltip: "&fHeavy Core|&7The core of physical impact." },
        B: { name: "Breeze Rod", itemId: "breeze_rod", tooltip: "&fBreeze Rod|&7A swirling elemental rod." },
        N: { name: "Netherite Ingot", itemId: "netherite_ingot", tooltip: "&fNetherite Ingot|&7Standard nether metal alloy." }
      }
    }
  },
  {
    id: "void",
    name: "Búa Vực Thẳm",
    enName: "Abyssal Void Mace",
    badge: "🌀",
    colorClass: "border-[#ff55ff]",
    cmd: 2003,
    singleton: true,
    desc: "Cổ vật bẻ cong hư vô, thương thảo với tử thần để trao cho người sở hữu cơ hội hồi sinh từ địa ngục.",
    tooltip: "&d&lAbyssal Void Mace|&7An abyssal mace that devours matter and bargains with fatal End damage.||&6⚡ Active — Mind Detachment:|&fKhi ở trạng thái Abyss State sau hồi sinh, đòn đánh Sneak+Left Click có 50% cơ hội áp bóng tối Darkness và Đóng Băng mục tiêu đứng yên trong 5 giây.||&a⭐ Passive — Abyss Resurrect & Devour:|&f10% cơ hội đòn đánh thường khóa 2 ô Hotbar đối phương trong 5s. Khi chịu sát thương chí mạng từ người (25% cơ hội) hoặc mob (5% cơ hội), cứu mạng người sở hữu (hồi chiêu 10 phút), cấp 10 tim ảo và bật Abyss State 30s. Nếu xung quanh 10m có ai cầm Totem, tăng 50% cơ hội hồi sinh; nếu thành công hồi sinh, tất cả totem cầm trên tay của đối phương gần đó sẽ bị cưỡng ép kích nổ và tiêu hao.||&c☠ Curse — Khô cạn & Nguyền Totem:|&fHồi máu tự nhiên giảm 60%, hiệu quả thuốc hồi máu giảm 35%, thanh đói cạn nhanh +50%. Mang búa chạm nước bị dính Wither II trong 3 giây. Đặc biệt, tự động drop hết Totem trong túi đồ ra ngoài đất và chặn hồi sinh bằng Totem.",
    recipe: {
      shape: [
        ["A", "E", "A"],
        ["H", "W", "H"],
        ["A", "C", "A"]
      ],
      ingredients: {
        A: { name: "Enchanted Golden Apple", itemId: "enchanted_golden_apple", tooltip: "&dEnchanted Golden Apple|&7Magical shiny fruit." },
        E: { name: "End Core", itemId: "end_core", tooltip: "&dEnd Core|&5Bất ổn: &7Dịch chuyển ngẫu nhiên khi cầm." },
        H: { name: "Cursed Player Head", itemId: "cursed_player_head", tooltip: "&cCursed Player Head|&7Đầu người chơi vấy bẩn từ cái chết." },
        W: { name: "Wither Rose", itemId: "wither_rose", tooltip: "&0Wither Rose|&7Black deadly flower." },
        C: { name: "Challenger's Eye", itemId: "challenger_eye", tooltip: "&dChallenger's Eye|&7Enderman critical glance." }
      }
    }
  },
  {
    id: "chaos",
    name: "Búa Hỗn Loạn",
    enName: "Mace of Chaos | GLITCH",
    badge: "🎲",
    colorClass: "border-[#b5179e]",
    cmd: 2002,
    singleton: true,
    desc: "Cổ vật tối thượng cuối game, thao túng và bóp méo không gian chứa đồ của nạn nhân.",
    tooltip: "&d&lMace of Chaos | GLITCH|&7A late-game void weapon crafted directly from unstable chaos ingredients.||&6⚡ Active — Madness Release:|&fTích lũy 10 Rage. Thực hiện Sneak+Left Click kích hoạt trạng thái cuồng điên 2 phút. Nhận 3 đòn empowered hits áp hiệu ứng Hỗn Loạn (Chaos Effect) 10 giây lên mục tiêu và buff người dùng tốc độ/sức mạnh.||&a⭐ Passive — Chaos Shift:|&fĐòn đánh thường có 10% cơ hội teleport ngẫu nhiên kẻ thù quanh vùng cũ 2-4m. Bị kẻ thù đánh có 10% phản phệ dính Chaos 1 giây lên kẻ địch.||&c☠ Curse — Khủng hoảng tinh thần:|&fLần đầu cầm bị dính Chaos 10s. Khi kết thúc Madness mà người dùng không giết ai, chịu tự Chaos 30s. Gặp nước chịu Wither II 3s.",
    recipe: {
      shape: [
        ["O", "B", "O"],
        ["O", "W", "O"],
        ["O", "V", "O"]
      ],
      ingredients: {
        O: { name: "Obsidian Chaos", itemId: "obsidian_chaos", tooltip: "&5Obsidian Chaos|&7Hắc diện thạch nhiễm năng lượng Creeper nổ." },
        B: { name: "Blood Core", itemId: "blood_core", tooltip: "&cBlood Core|&4Bất ổn: &7Mỗi 10s rút 1 tim." },
        W: { name: "Wither Rose", itemId: "wither_rose", tooltip: "&0Wither Rose|&7Wither floral decay." },
        V: { name: "Void Mace", itemId: "mace", tooltip: "&dVoid Mace|&7The abyssal base mace." }
      }
    }
  },
  {
    id: "vampiric",
    name: "Búa Huyết Ma",
    enName: "Mace of Vampirism",
    badge: "🩸",
    colorClass: "border-[#e63946]",
    cmd: 10002,
    singleton: true,
    desc: "Cổ vật ký sinh đói khát, hút cạn từng giọt huyết mạch của kẻ thù để bồi đắp vào máu người sở hữu.",
    tooltip: "&c&lMace of Vampirism|&7A blood-bound mace that feeds through wounds but gnaws at its wielder.||&6⚡ Active — Blood Siphon:|&fNgồi + Đánh trúng kẻ địch. Hồi lập tức 6 HP. Rút tạm thời 1 tim tối đa (2 HP) của địch trong 90s để cộng vào máu tối đa caster (tối đa +4 HP). Hồi chiêu 75s.||&a⭐ Passive — Lifesteal:|&fMelee thường hồi máu bằng 12% sát thương gây ra (tối đa 2 HP/hit). Dưới 30% HP tăng sát thương gây ra.||&c☠ Curse — Suy kiệt linh hồn:|&fKhi mang búa bị trừ vĩnh viễn 4 HP máu tối đa. Click active hụt tự gánh 6 sát thương thẳng lên bản thân. Nhận thêm +10% sát thương từ lửa, fall, và projectile.",
    recipe: {
      shape: [
        ["M", "B", "M"],
        ["N", "S", "N"],
        ["M", "W", "M"]
      ],
      ingredients: {
        M: { name: "Magma Block", itemId: "magma_block", tooltip: "&fMagma Block|&7Volcanic heat element." },
        B: { name: "Blood Core", itemId: "blood_core", tooltip: "&cBlood Core|&4Bất ổn: &7Every 10s triggers 2 HP self-damage." },
        N: { name: "Netherite Ingot", itemId: "netherite_ingot", tooltip: "&fNetherite Ingot|&7Premium hell forging alloy." },
        S: { name: "Cursed Player Head", itemId: "cursed_player_head", tooltip: "&cCursed Player Head|&7Lost player soul." },
        W: { name: "Nether Wart", itemId: "nether_wart", tooltip: "&fNether Wart|&7Alchemical red fungus." }
      }
    }
  },
  {
    id: "gravity",
    name: "Búa Trọng Lực Kỳ Dị",
    enName: "Singularity Gravity Mace",
    badge: "🌌",
    colorClass: "border-[#48cae4]",
    cmd: 10004,
    singleton: true,
    desc: "Cổ vật hấp thụ sao sụp đổ, khóa chân và giam cầm đối thủ trong hố đen trọng lực.",
    tooltip: "&b&lSingularity Gravity Mace|&7A collapsed-star mace that bends weight, falling, and enemy position.||&6⚡ Active — Singularity Well:|&fNgồi + Đánh hướng nhìn (tối đa 10 khối). Mở hố đen hút toàn bộ sinh vật sống trong 8 khối về tâm, áp dụng Slowness III trong 3 giây. Sau 3s hố sụp đổ gây sát thương diện rộng 2 HP + 1.5 HP/mục tiêu (tối đa 15 HP). Hồi chiêu 60s.||&a⭐ Passive — Gravity Anchor:|&fGiảm 70% sát thương rơi tự do. Đòn cận chiến thường hút nhẹ kẻ địch về phía người sở hữu trong tầm 2.5m.||&c☠ Curse — Khối lượng nặng:|&fMang búa nhận Slowness I và cạn thanh đói x2. Nếu hố active hút từ 4 mục tiêu trở lên, người sở hữu chịu phản lực dính Mining Fatigue II trong 12s và tổn hao 3 HP.",
    recipe: {
      shape: [
        ["C", "O", "C"],
        ["S", "E", "S"],
        ["N", "R", "N"]
      ],
      ingredients: {
        C: { name: "Obsidian Chaos", itemId: "obsidian_chaos", tooltip: "&5Obsidian Chaos|&7Chaotic unstable obsidian block." },
        O: { name: "Obsidian", itemId: "obsidian", tooltip: "&fObsidian|&7Hard volcanic defense block." },
        S: { name: "Sculk Core", itemId: "sculk_core", tooltip: "&3Sculk Core|&8Bất ổn: &7Nhận darkness/blindness ngẫu nhiên." },
        E: { name: "End Core", itemId: "end_core", tooltip: "&dEnd Core|&5Bất ổn: &7Random teleport mechanics." },
        N: { name: "Netherite Block", itemId: "netherite_block", tooltip: "&fNetherite Block|&7Cần 2 thỏi Netherite Block." },
        R: { name: "Breeze Rod", itemId: "breeze_rod", tooltip: "&fBreeze Rod|&7Wind rod." }
      }
    }
  },
  {
    id: "sonic",
    name: "Giáo Tiếng Vọng Warden",
    enName: "Warden Spear",
    badge: "🔊",
    colorClass: "border-[#00b4d8]",
    cmd: 10005,
    singleton: true,
    desc: "Cổ vật dạng giáo mang dư chấn lòng đất, bắn sóng âm nén phá tan mọi rào cản phòng ngự.",
    tooltip: "&9&lWarden Spear|&7A deep-dark spear resonating with Warden pressure waves.||&6⚡ Active — Sonic Boom:|&fNgồi + Đánh hướng nhìn. Bắn sóng âm nén xa 12 khối, mục tiêu đầu tiên nhận 14 sát thương chuẩn và đẩy lùi mạnh 2.0. Trả giá người dùng mất 4 HP. Hồi chiêu 35s.||&a⭐ Passive — Quiet step:|&fĐi trên/gần Sculk giảm âm thanh. Đòn đập rơi tự do (Smash) được +1.5 sát thương mỗi 4 khối độ cao (cộng tối đa +6 HP).||&c☠ Curse — Quá tải phản âm:|&fSau active người dùng bị Mù lòa (Blindness) 1.5 giây và Slowness II 2 giây. Mang giáo này không phát sáng khi cầm.",
    recipe: {
      shape: [
        ["S", "C", "G"],
        ["N", "B", "N"],
        ["G", "E", "S"]
      ],
      ingredients: {
        S: { name: "Sculk Catalyst", itemId: "sculk_catalyst", tooltip: "&fSculk Catalyst|&7Spreads sculk blocks from souls." },
        C: { name: "Sculk Core", itemId: "sculk_core", tooltip: "&3Sculk Core|&8Bất ổn: &7Blindness/Darkness curse ticker." },
        G: { name: "Enchanted Golden Apple", itemId: "enchanted_golden_apple", tooltip: "&dEnchanted Golden Apple|&7Super notch apple." },
        N: { name: "Netherite Ingot", itemId: "netherite_ingot", tooltip: "&fNetherite Ingot|&7Standard nether alloy." },
        B: { name: "Breeze Rod", itemId: "breeze_rod", tooltip: "&fBreeze Rod|&7Wind rod." },
        E: { name: "Echo Shard", itemId: "echo_shard", tooltip: "&fEcho Shard|&7Ancient recovery material." }
      }
    }
  },
  {
    id: "soulfire",
    name: "Búa Hỏa Thiêu Hồn",
    enName: "Soulfire Pyre Mace",
    badge: "🔥",
    colorClass: "border-[#00f5d4]",
    cmd: 10011,
    singleton: true,
    desc: "Lò nung di động tích tụ hỏa nhiệt xanh của địa ngục Nether, thiêu rụi sinh mạng kẻ địch.",
    tooltip: "&b&lSoulfire Pyre Mace|&7A soul-forged mace wreathed in blue flame and rising spirits.||&6⚡ Active — Soulfire Storm:|&fNgồi + Đánh. Triệu hồi bão lửa xanh lan tỏa bán kính 5 khối trong 5 giây. Kẻ thù trong bão nhận 3 HP sát thương mỗi giây. Trả giá người dùng mất 4 HP. Hồi chiêu 40s.||&a⭐ Passive — Fire Guard & Soul Blaze:|&fKháng hoàn toàn sát thương từ lửa và dung nham. Đòn cận chiến thiêu cháy kẻ địch bằng lửa xanh linh hồn.||&c☠ Curse — Áp lực lửa linh hồn:|&fTăng x2 tốc độ cạn thanh đói (Hunger). Cầm trong người có 10% tự bốc cháy sau mỗi 30s.",
    recipe: {
      shape: [
        ["F", "C", "F"],
        ["G", "B", "S"],
        ["F", "N", "F"]
      ],
      ingredients: {
        F: { name: "Soul Campfire", itemId: "soul_campfire", tooltip: "&bSoul Campfire|&7Spooky blue campfire." },
        C: { name: "Soulfire Core", itemId: "soulfire_core", tooltip: "&bSoulfire Core|&1Bất ổn: &7Cháy ngẫu nhiên trong người." },
        G: { name: "Ghast Tear", itemId: "ghast_tear", tooltip: "&fGhast Tear|&7Nether ghost tear." },
        B: { name: "Breeze Rod", itemId: "breeze_rod", tooltip: "&fBreeze Rod|&7Wind rod." },
        S: { name: "Zombie Head", itemId: "zombie_head", tooltip: "&fZombie Head|&7Dead creature head." },
        N: { name: "Netherite Ingot", itemId: "netherite_ingot", tooltip: "&fNetherite Ingot|&7Standard metal alloy." }
      }
    }
  },
  {
    id: "chronos",
    name: "Giáo Thời Gian Chronos",
    enName: "Chronos Anchor Spear",
    badge: "⏳",
    colorClass: "border-[#e29578]",
    cmd: 2003,
    singleton: true,
    desc: "Cổ vật thao túng dòng thời gian, đóng băng vị trí của mục tiêu hoặc chính người dùng nếu ném trượt.",
    tooltip: "&e&lChronos Anchor Spear|&7A time-anchored spear that binds motion and space.||&6⚡ Active — Time Pin:|&fNgồi + Đánh hướng nhìn. Kích hoạt Time Pin đóng băng chuyển động mục tiêu trong dòng thời gian. (Hồi chiêu 55 giây)||&c☠ Curse — Phản phệ ném trượt:|&fNém trượt hoặc kích hoạt hụt sẽ tự đóng băng bản thân trong dòng thời gian. Giảm vĩnh viễn 15% máu tối đa khi mang theo.",
    recipe: {
      shape: [
        ["", "E", ""],
        ["", "B", ""],
        ["", "S", ""]
      ],
      ingredients: {
        E: { name: "Ender Pearl", itemId: "ender_pearl", tooltip: "&fEnder Pearl|&7Teleportation sphere." },
        B: { name: "Breeze Rod", itemId: "breeze_rod", tooltip: "&fBreeze Rod|&7Wind rod làm lõi gậy." },
        S: { name: "Amethyst Shard", itemId: "amethyst_shard", tooltip: "&dAmethyst Shard|&7Purple echo crystal." }
      }
    }
  }
];

// Other Custom Server Weapons (e.g. Cursed Sword, Custom Axes, Bows)
export const customWeapons: Weapon[] = [
  {
    id: "cursed_sword",
    name: "Kiếm Cổ Nguyền",
    enName: "Cursed Sword",
    badge: "☠",
    colorClass: "border-[#7209b7]",
    cmd: 5001,
    singleton: false,
    desc: "Thanh kiếm rải rác linh hồn của kẻ đọa đày, mang lại lượng máu tương ứng sát thương nhưng có thể phản phệ.",
    tooltip: "&f&lCursed Sword|&7A dark blade forged from withered bones and cursed potions.||&c☠ Curse — Trạng thái cầm kiếm:|&fCầm kiếm nhận Weakness + Slowness. Kiếm có thể chế nhiều và có thời hạn chế tạo 5 phút (singleton: false).||&6⚡ Đòn đánh nguyền rủa:|&fKhi tấn công người chơi khác, hồi máu bằng lượng sát thương gây ra. Có 50% cơ hội truyền trạng thái nguyền rủa 30 phút + Wither III trong 3 giây cho mục tiêu.||&c☠ Curse — Phản phệ nguyền rủa:|&fNếu không trúng 50% truyền cho đối phương, người dùng (50%) tự dính trạng thái nguyền rủa 30 phút + Wither III trong 3 giây. Kiếm gãy lập tức ngay sau 1 lần đánh.",
    recipe: {
      shape: [
        ["", "W", ""],
        ["", "P", ""],
        ["", "S", ""]
      ],
      ingredients: {
        W: { name: "Wither Skeleton Skull", itemId: "wither_skeleton_skull", tooltip: "&fWither Skeleton Skull|&7Đầu khô lâu héo úa." },
        P: { name: "Potion (Any)", itemId: "potion", tooltip: "&5Thuốc độc bất kì|&7Yêu cầu thuốc độc (Splash, Lingering hoặc Potion thường)." },
        S: { name: "Stick", itemId: "stick", tooltip: "&fStick|&7Gậy gỗ chế tạo." }
      }
    }
  }
];

export const cores: Core[] = [
  {
    id: "ego_core",
    name: "🔮 Ego Core",
    instability: "Người sở hữu không thể nhặt ngọc kinh nghiệm (XP), và khi tấn công mục tiêu ở độ cao bằng hoặc cao hơn bản thân sẽ bị nhận phản phệ từ 1-2 tim sát thương (báo qua Action Bar).",
    method: "Chế tạo bằng Bàn Chế Tạo thường (Lõi Heavy Core ở giữa, 4 thỏi Netherite Ingot và 4 bông hoa Wither Rose xung quanh).",
    recipe: {
      shape: [
        ["N", "R", "N"],
        ["R", "H", "R"],
        ["N", "R", "N"]
      ],
      ingredients: {
        N: { name: "Netherite Ingot", itemId: "netherite_ingot", tooltip: "&fNetherite Ingot" },
        R: { name: "Wither Rose", itemId: "wither_rose", tooltip: "&0Wither Rose" },
        H: { name: "Heavy Core", itemId: "heavy_core", tooltip: "&fHeavy Core" }
      }
    }
  },
  {
    id: "soulfire_core",
    name: "🔥 Soulfire Core",
    instability: "Cầm trong túi đồ cứ sau mỗi 30 giây sẽ có 10% cơ hội bị bùng cháy trong 5 giây, kèm theo tiếng cảnh báo (tink) và hiện Action Bar.",
    method: "Chế tạo bằng Bàn Chế Tạo (Heavy Core ở giữa, xen kẽ 4 Soul Lantern và 4 Magma Block).",
    recipe: {
      shape: [
        ["L", "M", "L"],
        ["M", "H", "M"],
        ["L", "M", "L"]
      ],
      ingredients: {
        L: { name: "Soul Lantern", itemId: "soul_lantern", tooltip: "&bSoul Lantern" },
        M: { name: "Magma Block", itemId: "magma_block", tooltip: "&fMagma Block" },
        H: { name: "Heavy Core", itemId: "heavy_core", tooltip: "&fHeavy Core" }
      }
    }
  },
  {
    id: "blood_core",
    name: "🩸 Blood Core",
    instability: "Mỗi 10 giây khi ở trong túi đồ người sở hữu, có 10% cơ hội gây 2 HP (1 tim) sát thương trực tiếp xuyên giáp.",
    method: "Nghi thức Hiến tế Nether: Thả Đầu Player Bị Vấy Bẩn (Cursed Player Head) trên Crimson Nylium ở Nether, dùng Kiếm Netherite chuột phải kết liễu 1 sinh vật gần đó (80% thành công thành Blood Core, 20% thất bại thành Ruined Core và bị nguyền rủa).",
    recipe: {
      shape: [
        ["", "R", ""],
        ["P", "H", "P"],
        ["", "R", ""]
      ],
      ingredients: {
        R: { name: "Redstone Block", itemId: "redstone_block", tooltip: "&cRedstone Block" },
        P: { name: "Player Head", itemId: "cursed_player_head", tooltip: "&cPlayer Head" },
        H: { name: "Heavy Core", itemId: "heavy_core", tooltip: "&fHeavy Core" }
      }
    }
  },
  {
    id: "sculk_core",
    name: "💀 Sculk Core",
    instability: "Chỉ cần để trong túi đồ, cứ mỗi 10s có 19% cơ hội nhận bóng tối Darkness/Blindness trong 29 giây.",
    method: "Nghi thức Sóng Âm Trầm Tích: Thả Heavy Core trên khối Sculk Catalyst, sau đó tiêu diệt 1 Warden lân cận (phạm vi 5 block).",
    recipe: null
  },
  {
    id: "end_core",
    name: "🌀 End Core",
    instability: "Mỗi 60 giây có 10% cơ hội tự động dịch chuyển người sở hữu ngẫu nhiên đến vùng an toàn lân cận.",
    method: "Nghi thức Khe Nứt Không Gian: Ném Heavy Core bay trực tiếp xuyên qua luồng cổng dịch chuyển End Portal đang hoạt động (20% thành công thành End Core, 80% thất bại thành Ruined Core và bị nguyền rủa).",
    recipe: null
  },
  {
    id: "ruined_core",
    name: "💀 Ruined Core",
    instability: "Lõi phế tích sụp đổ từ nghi thức rèn thất bại. Không thể dùng chế tạo các loại búa Mace, nhưng là vật liệu chính để rèn Kiếm Cổ Nguyền (Cursed Sword).",
    method: "Thu được khi rèn thất bại/nghi thức thất bại lõi End Core hoặc Blood Core.",
    recipe: null
  }
];

export const materials: Material[] = [
  {
    id: "obsidian_chaos",
    name: "Obsidian Chaos",
    cmd: 4001,
    desc: "Hắc diện thạch nhiễm năng lượng hỗn mang vụ nổ.",
    method: "Cầm Obsidian trên tay chính khi bị một Creeper nổ nổ chết. Có 5% cơ hội tiêu thụ khối Obsidian, người dùng chết và rơi ra Obsidian Chaos tại mộ phần."
  },
  {
    id: "challenger_eye",
    name: "Challenger's Eye",
    cmd: 4002,
    desc: "Cái nhìn cuối cùng của Enderman đông kết khi phá hủy Totem.",
    method: "Bị một Enderman đánh chí mạng. Nghi thức sẽ cưỡng chế bỏ qua Totem hồi sinh của bạn (bạn sẽ thực sự chết), đổi lại Challenger's Eye rơi ra trong hòm đồ chết."
  }
];

export const forgeSteps: ForgeStep[] = [
  { step: "1", title: "Khởi Đầu", icon: "🛠", desc: "Xếp nguyên liệu vào Bàn Chế Tạo thường và rút phôi tạm ra." },
  { step: "2", title: "Chuyển Hóa", icon: "🌀", desc: "Bàn Chế Tạo nổ và biến thành một khối Lodestone. Luồng hạt ma thuật tụ lại." },
  { step: "3", title: "Chấn Động 1", icon: "💥", desc: "Vụ nổ giai đoạn 1 giải phóng ma năng (Lực nổ 2.0). Bắt đầu nung chảy." },
  { step: "4", title: "Nung nóng", icon: "⏳", desc: "Lodestone nung nóng trong 5 Phút. Hiển thị hologram đếm ngược." },
  { step: "5", title: "Kết thúc", icon: "🔮", desc: "Vụ nổ lớn kết thúc (Lực nổ 4.0). Thả ra vũ khí Mace độc quyền." }
];

export const guideSections: GuideSection[] = [
  {
    id: "carry-limit",
    title: "🛡 Trọng Lực & Tải Trọng (Carry Limits)",
    content: "Vì năng lượng của các cổ vật quá mạnh mẽ, người chơi **chỉ được giữ tối đa một vũ khí đặc biệt** trong túi đồ (gồm Mace, Spear, Cursed Sword). Nếu cố tình kéo thả hoặc lượm thêm, hệ thống sẽ tự động ngăn chặn hoặc drop món vũ khí thừa xuống đất."
  },
  {
    id: "curse-state",
    title: "💀 Rơi Đầu & Giải Lời Nguyền",
    content: "Khi người chơi đang bị nguyền rủa (Cursed State) bị người chơi khác kết liễu, có **20% cơ hội rơi ra vật phẩm đầu của chính mình** (Player Head). Nếu rơi đầu thành công khi chết, **lời nguyền trên người chơi đó sẽ lập tức hóa giải hoàn toàn** và đầu đó được dùng làm nguyên liệu rèn Blood Core."
  },
  {
    id: "backfire",
    title: "⚠️ Hiệu ứng Phản Phệ & Kích Hoạt",
    content: "Để giải phóng năng lượng phong ấn, thực hiện tổ hợp phím **Sneak (Ngồi) + Left-Click (Click chuột trái)** trúng mục tiêu. Click hụt vào không khí/block có 10% - 50% cơ hội tự kích hoạt **Lời nguyền Phản phệ (Curse Backfire)** rút trực tiếp máu hoặc áp hiệu ứng Slowness/Blindness lên người dùng."
  }
];
