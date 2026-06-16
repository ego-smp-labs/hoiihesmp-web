export interface Ingredient {
  name: string;
  itemId: string;
  tooltip: string;
  amount?: number;
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
  gifUrl?: string;
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
    tooltip: "&b&lMace of Power|&7A heavy storm-forged mace that turns clean hits into upward force.||&6⚡ Active — Power Strike:|&fNgồi + Đánh trúng kẻ địch. 10% cơ hội nổ đẩy tung toàn bộ sinh vật bán kính 10 khối lên trời. (Hồi chiêu 8 giây)||&a⭐ Passive — Momentum:|&fĐòn trúng tăng +5% tốc chạy trong 10s. Đòn Smash đập từ trên cao nhân x1.10 sát thương và +0.35 đẩy lùi.||&c☠ Curse — Vung búa hụt:|&fNếu đánh air/block hụt, chịu Slowness trong 60 giây. Cầm búa trên tay bị trừ 10% tốc chạy.",
    recipe: {
      shape: [
        ["", "H", ""],
        ["", "B", ""],
        ["", "N", ""]
      ],
      ingredients: {
        H: { name: "Heavy Core", itemId: "heavy_core", tooltip: "&fHeavy Core|&7The core of physical impact." },
        B: { name: "Breeze Rod", itemId: "breeze_rod", tooltip: "&fBreeze Rod x16|&7A swirling elemental rod.", amount: 16 },
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
    tooltip: "&d&lAbyssal Void Mace|&7An abyssal mace that devours matter and bargains with fatal End damage.||&6⚡ Active — Mind Detachment:|&fKhi ở trạng thái Abyss State sau hồi sinh, đòn đánh Sneak+Left Click có 50% cơ hội áp bóng tối Darkness và Đóng Băng mục tiêu đứng yên trong 5 giây.||&a⭐ Passive — Abyss Resurrect & Devour:|&f10% cơ hội đòn đánh thường khóa 2 ô Hotbar đối phương trong 5s. Khi chịu sát thương chí mạng từ người (25% cơ hội) hoặc mob (5% cơ hội), cứu mạng người sở hữu (hồi chiêu 10 phút), cấp 10 tim ảo và bật Abyss State 30s. Nếu xung quanh 10m có ai cầm Totem, tăng 50% cơ hội hồi sinh; nếu thành công hồi sinh, tất cả totem cầm trên tay của đối phương gần đó sẽ bị cưỡng ép kích nổ và tiêu hao.||&c☠ Curse — Khô cạn & Nguyền Totem:|&fHồi máu tự nhiên giảm 60%, hiệu quả thuốc hồi máu giảm 35%, thanh đói cạn nhanh +50%. Mang búa chạm nước bị dính Wither II trong 3 giây. Đặc biệt, nếu mang búa trong người thì không thể dùng Totem (tự động drop hết Totem trong túi đồ ra ngoài đất và chặn hồi sinh bằng Totem).",
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
        W: { name: "Wither Rose", itemId: "wither_rose", tooltip: "&0Wither Rose x16|&7Black deadly flower.", amount: 16 },
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
        ["H", "W", "H"],
        ["O", "V", "O"]
      ],
      ingredients: {
        O: { name: "Obsidian Chaos", itemId: "obsidian_chaos", tooltip: "&5Obsidian Chaos|&7Hắc diện thạch nhiễm năng lượng Creeper nổ." },
        B: { name: "Blood Core", itemId: "blood_core", tooltip: "&cBlood Core|&4Bất ổn: &7Mỗi 10s rút 1 tim." },
        W: { name: "Wither Rose", itemId: "wither_rose", tooltip: "&0Wither Rose|&7Wither floral decay." },
        V: { name: "Void Core", itemId: "void_core", tooltip: "&dVoid Core|&7Lõi hư vô ngưng tụ phiêu diệt." },
        H: { name: "Cursed Player Head", itemId: "cursed_player_head", tooltip: "&cCursed Player Head|&7Lost player soul." }
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
    tooltip: "&c&lMace of Vampirism|&7A blood-bound mace that feeds through wounds but gnaws at its wielder.||&6⚡ Active — Blood Siphon:|&fNgồi + Đánh trúng kẻ địch. Hồi lập tức 6 HP. Đối với player địch, rút tạm thời 1 tim tối đa (2 HP) của địch trong 90s để cộng vào máu tối đa caster (tối đa +4 HP). Hồi chiêu 75s.||&a⭐ Passive — Lifesteal:|&fMelee thường hồi máu bằng 12% sát thương gây ra (tối đa 2 HP/hit). Dưới 30% HP tăng sát thương gây ra.||&c☠ Curse — Suy kiệt linh hồn:|&fKhi mang búa bị trừ vĩnh viễn 4 HP máu tối đa. Click active hụt tự gánh 6 sát thương thẳng lên bản thân. Nhận thêm +10% sát thương từ lửa, fall, và projectile.",
    recipe: {
      shape: [
        ["M", "B", "M"],
        ["N", "S", "N"],
        ["M", "W", "M"]
      ],
      ingredients: {
        M: { name: "Magma Block", itemId: "magma_block", tooltip: "&fMagma Block|&7Volcanic heat element.", amount: 64 },
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
        ["A", "B", "A"],
        ["", "C", ""],
        ["", "D", ""]
      ],
      ingredients: {
        A: { name: "Obsidian", itemId: "obsidian", tooltip: "&fObsidian x64|&7Tảng đá cứng nhất thiên nhiên.", amount: 64 },
        B: { name: "Netherite Block", itemId: "netherite_block", tooltip: "&fNetherite Block|&7Khối vật chất nặng nhất địa ngục." },
        C: { name: "Sculk Core", itemId: "sculk_core", tooltip: "&3Sculk Core|&8Bất ổn: &7Nhận darkness/blindness ngẫu nhiên." },
        D: { name: "Breeze Rod", itemId: "breeze_rod", tooltip: "&fBreeze Rod x16|&7Gậy gió.", amount: 16 }
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
    tooltip: "&b&lSoulfire Pyre Mace|&7A soul-forged mace wreathed in blue flame and rising spirits.||&6⚡ Active — Soulfire Storm:|&fNgồi + Đánh. Triệu hồi bão lửa xanh lan tỏa bán kính 5 khối trong 5 giây. Kẻ thù trong bão nhận 3 HP sát thương mỗi giây. Trả giá người dùng mất 4 HP. Hồi chiêu 40s.||&a⭐ Passive — Fire Guard & Soul Blaze:|&fKháng hoàn toàn sát thương từ lửa và dung nham. Đòn cận chiến thiêu cháy kẻ địch bằng lửa xanh linh hồn.||&c☠ Curse — Áp lực lửa linh hồn:|&fTăng x2 tốc độ cạn thanh đói (Hunger).",
    recipe: {
      shape: [
        ["F", "C", "F"],
        ["G", "B", "S"],
        ["F", "N", "F"]
      ],
      ingredients: {
        F: { name: "Soul Campfire", itemId: "soul_campfire", tooltip: "&bSoul Campfire x64|&7Spooky blue campfire.", amount: 64 },
        C: { name: "Soulfire Core", itemId: "soulfire_core", tooltip: "&bSoulfire Core|&1Bất ổn: &7Cháy ngẫu nhiên trong người." },
        G: { name: "Ghast Tear", itemId: "ghast_tear", tooltip: "&fGhast Tear|&7Nether ghost tear." },
        B: { name: "Breeze Rod", itemId: "breeze_rod", tooltip: "&fBreeze Rod x16|&7Wind rod.", amount: 16 },
        S: { name: "Zombie Head", itemId: "zombie_head", tooltip: "&fZombie Head|&7Dead creature head." },
        N: { name: "Netherite Ingot", itemId: "netherite_ingot", tooltip: "&fNetherite Ingot|&7Standard metal alloy." }
      }
    }
  }
];

// Spear Exclusive Weapons List
export const spearWeapons: Weapon[] = [
  {
    id: "sonic",
    name: "Giáo Tiếng Vọng Warden",
    enName: "Warden Spear",
    badge: "🔊",
    colorClass: "border-[#00b4d8]",
    cmd: 10005,
    singleton: true,
    desc: "Cổ vật dạng giáo mang dư chấn lòng đất, bắn sóng âm nén phá tan mọi rào cản phòng ngự.",
    tooltip: "&9&lWarden Spear|&7A deep-dark spear resonating with Warden pressure waves.||&6⚡ Active — Sonic Boom:|&fNgồi + Đánh hướng nhìn. Bắn sóng âm nén xa 12 khối, mục tiêu đầu tiên nhận 14 sát thương chuẩn và đẩy lùi mạnh 2.0. Trả giá người dùng mất 4 HP (không tự tử). Hồi chiêu 35s.||&a⭐ Passive — Quiet step:|&fĐi trên/gần Sculk giảm âm thanh. Đòn đập rơi tự do (Smash) được +1.5 sát thương mỗi 4 khối độ cao (cộng tối đa +6 HP).||&c☠ Curse — Quá tải phản âm:|&fSau active người dùng bị Mù lòa (Blindness) 1.5 giây và Slowness II 2 giây. Mang giáo này không phát sáng khi cầm (không nguyền rủa lộ vị trí).",
    recipe: {
      shape: [
        ["G", "B", "G"],
        ["S", "C", "D"],
        ["G", "E", "G"]
      ],
      ingredients: {
        B: { name: "Giáo Netherite", itemId: "netherite_spear", tooltip: "&7Netherite Spear|&7Cây giáo Netherite cơ bản." },
        C: { name: "Sculk Core", itemId: "sculk_core", tooltip: "&3Sculk Core|&8Bất ổn: &7Blindness/Darkness curse ticker." },
        E: { name: "Echo Shard", itemId: "echo_shard", tooltip: "&fEcho Shard x16|&7Ancient recovery material.", amount: 16 },
        D: { name: "Khối Kim Cương", itemId: "diamond_block", tooltip: "&bDiamond Block|&7Khối kim cương đặc khít." },
        S: { name: "Sculk Catalyst", itemId: "sculk_catalyst", tooltip: "&fSculk Catalyst x16|&7Spreads sculk blocks from souls.", amount: 16 },
        G: { name: "Enchanted Golden Apple", itemId: "enchanted_golden_apple", tooltip: "&dEnchanted Golden Apple|&7Super notch apple." }
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
    tooltip: "&6&lChronos Anchor Spear|&7A time-anchored spear that binds motion and space.||&6⚡ Active — Time Pin:|&fNgồi + Đánh hướng nhìn. Kích hoạt Time Pin đóng băng chuyển động mục tiêu trong dòng thời gian trong 2.25 giây. (Hồi chiêu 55 giây)||&c☠ Curse — Phản phệ ném trượt:|&fNém trượt hoặc kích hoạt hụt sẽ tự đóng băng bản thân trong 1.25 giây.",
    recipe: {
      shape: [
        ["G", "B", "G"],
        ["D", "S", "D"],
        ["G", "S", "G"]
      ],
      ingredients: {
        B: { name: "Giáo Netherite", itemId: "netherite_spear", tooltip: "&7Netherite Spear|&7Cây giáo Netherite cơ bản." },
        G: { name: "Đồng hồ Glitch", itemId: "glitch_clock", tooltip: "&eĐồng hồ Glitch|&7Đồng hồ lỗi vòng lặp thời gian." },
        D: { name: "Kim Cương", itemId: "diamond", tooltip: "&bDiamond x16|&7Kim cương bảo an.", amount: 16 },
        S: { name: "Slime Ball", itemId: "slime_ball", tooltip: "&fSlime Ball|&7Viên slime đàn hồi." }
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
        W: { name: "Đầu Bất Kỳ", itemId: "any_head", tooltip: "&fAny Head|&7Bất kỳ đầu sinh vật hoặc đầu người chơi nào." },
        P: { name: "Thuốc Độc Bất Kỳ", itemId: "any_poison_potion", tooltip: "&5Poison Potion|&7Yêu cầu thuốc độc (Splash, Lingering hoặc Potion thường)." },
        S: { name: "Gậy", itemId: "stick", tooltip: "&fStick|&7Gậy gỗ." }
      }
    }
  }
];

export const cores: Core[] = [
  {
    id: "ego_core",
    name: "Ego Core",
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
    name: "Soulfire Core",
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
    name: "Blood Core",
    instability: "Mỗi 10 giây khi ở trong túi đồ người sở hữu, có 10% cơ hội gây 2 HP (1 tim) sát thương trực tiếp xuyên giáp.",
    method: "Nghi thức Hiến tế Nether:\n1. Thả Đầu Player Bị Vấy Bẩn (Cursed Player Head) trên cỏ địa ngục đỏ Crimson Nylium ở Nether.\n2. Cầm Kiếm Netherite chuột phải vào đối tượng hiến tế (Piglin/Piglin Brute/Người chơi) gần khối (bán kính 6).\n3. Sét đánh xuống mục tiêu chịu sát thương, biến đổi Đầu Player thành Blood Core (80% tỉ lệ thành công).\n4. Có 20% tỉ lệ thất bại: rơi ra Ruined Core và người thực hiện bị dính Trạng thái Nguyền rủa (Craft Lockout 15 phút).",
    recipe: null
  },
  {
    id: "sculk_core",
    name: "Sculk Core",
    instability: "Chỉ cần để trong túi đồ, cứ mỗi 10s có 19% cơ hội nhận bóng tối Darkness/Blindness trong 29 giây.",
    method: "Nghi thức Sóng Âm Trầm Tích:\nThả một vật phẩm Heavy Core được đặt trên một khối Sculk Catalyst.\nTiêu diệt một Warden gần đó (bán kính 5.0 khối) để Lõi hấp thụ chấn động và biến thành Sculk Core.",
    recipe: null
  },
  {
    id: "end_core",
    name: "End Core",
    instability: "Mỗi 60 giây có 10% cơ hội tự động dịch chuyển người sở hữu ngẫu nhiên đến vùng an toàn lân cận.",
    method: "Nghi thức Khe Nứt Không Gian:\nNém một vật phẩm Heavy Core bay trực tiếp xuyên qua luồng cổng End Portal đang hoạt động.\nCó 20% cơ hội biến đổi thành End Core và 80% cơ hội hỏng thành Ruined Core đồng thời người ném bị dính Trạng thái Nguyền rủa (Craft Lockout 15 phút).",
    recipe: null
  },
  {
    id: "ruined_core",
    name: "Ruined Core",
    instability: "Lõi phế tích sụp đổ từ nghi thức rèn thất bại. Không thể dùng chế tạo các loại búa Mace, nhưng là vật liệu chính để rèn Kiếm Cổ Nguyền (Cursed Sword).",
    method: "Có 80% cơ hội nhận được khi rèn thất bại/nghi thức thất bại lõi End Core hoặc Blood Core.",
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
  },
  {
    id: "glitch_clock",
    name: "Đồng hồ Glitch",
    cmd: 4003,
    desc: "Chiếc đồng hồ bị lỗi vòng lặp thời gian từ nghịch lý sinh mạng.",
    method: "Thoát game khi tay đang cầm đồng hồ thông thường và lượng máu của bạn chỉ còn từ 0.5 tim trở xuống (<= 1.0 HP), tỉ lệ thành công là 20%."
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
    id: "backfire",
    title: "📖 Hướng Dẫn Kích Hoạt Kỹ Năng & Phản Hồi",
    content: "Để giải phóng năng lượng phong ấn của các vũ khí cổ vật này, bạn phải thực hiện tổ hợp phím:\n\n**Ngồi (Sneak) + Click Chuột Trái (Left-Click) vào Entity/Mục Tiêu**\n\n- **Cảnh Báo:** Nếu click chuột phải hoặc tấn công thông thường, vũ khí sẽ hoạt động như bản gốc (ví dụ búa đập bình thường, giáo/trident thực hiện hành động ném/đâm). Kỹ năng đặc biệt **chỉ kích hoạt bằng Sneak + Left-Click**.\n- **Phản Hồi (Feedback):** Khi kỹ năng kích hoạt thành công, một dòng thông báo trên **Action Bar** sẽ xuất hiện. Nếu bạn cố gắng dùng kỹ năng khi đang hồi chiêu, Action Bar sẽ hiện thời gian đếm ngược (được giới hạn tốc độ hiển thị để không gây spam)."
  },
  {
    id: "carry-limit",
    title: "⚠️ Giới Hạn Mang Vũ Khí Đặc Biệt (Carry Limits)",
    content: "Người chơi **không thể mang đồng thời nhiều hơn một vũ khí cổ vật đặc biệt** trong túi đồ (bao gồm các loại búa Mace, giáo Spear/Trident và kiếm Cursed Sword). Nếu đang giữ một vũ khí đặc biệt, hệ thống sẽ ngăn chặn việc nhặt, di chuyển, kéo thả hoặc bắt đầu đúc lò rèn cho vũ khí thứ hai."
  },
  {
    id: "lodestone-forge",
    title: "⚡ Nghi Thức Lò Rèn Lodestone",
    content: "Các vũ khí này quá nặng và ma pháp quá lớn để có thể đúc trực tiếp bằng bàn chế tạo thường. Quá trình chế tạo phải thông qua một nghi thức rèn nhiệt đặc thù:\n\n1. **Bắt đầu nghi thức:** Xếp nguyên liệu vào Bàn Chế Tạo thường và lấy thành phẩm tạm ra.\n2. **Chuyển hóa & Hút hạt:** Bàn Chế Tạo biến thành khối **LODESTONE**. Luồng hạt ma thuật xoáy tụ trong 3 giây.\n3. **Vụ nổ giai đoạn 1:** Hấp thụ năng lượng phát nổ (Lực nổ 2.0). Bắt đầu đếm ngược nung búa nóng.\n4. **Nung nóng (5 Phút):** Hologram đếm ngược hiển thị trên Lodestone. Người rèn phải bảo vệ lò rèn này.\n5. **Nổ giai đoạn 2 & Drop:** Nổ kết thúc (Lực nổ 4.0). Thả ra vũ khí Mace hoàn tất liên kết linh hồn.\n\n* **Cảnh Báo Sức Khỏe:** Khi kích hoạt Nghi thức Lò rèn Lodestone (chế tạo mace), chấn động ma năng sẽ gây sát thương phản phệ ngẫu nhiên từ **5 đến 9 tim** (10 - 18 HP) cho người chế tạo."
  },
  {
    id: "netherite-forge",
    title: "🛡️ Nghi Thức Rèn Trang Bị Netherite",
    content: "Để nâng cấp trang bị Kim Cương lên Netherite (Vũ khí, Công cụ và Giáp), bạn không thể rèn lập tiếp tại Bàn Rèn (Smithing Table). Nghi thức rèn đúc yêu cầu một khoảng thời gian nung chảy và liên kết vật lý:\n\n1. **Đúc phôi Bàn Rèn:** Đặt phôi nâng cấp, Diamond item và thỏi Netherite vào Smithing Table rồi rút sản phẩm ra.\n2. **Biến đổi lò rèn:** Bàn Rèn sẽ lập tức biến thành khối **LODESTONE** và hút sản phẩm lơ lửng phía trên.\n3. **Đúc nhiệt (60 Giây):** Hologram đếm ngược 60 giây xuất hiện. Người rèn phải đứng yên trong phạm vi 4 khối.\n4. **Hoàn tất & Nhận đồ:** Sau 60 giây, Lodestone biến trở lại thành Bàn Rèn và rơi ra trang bị Netherite hoàn tất (Tỉ lệ 100%).\n\n* **Chú Ý Trạng Thái:** Trong suốt 60 giây rèn đúc, người chơi sẽ bị **đóng băng tại chỗ (Freeze)** để tập trung năng lượng. Nếu bạn đi quá xa khỏi lò rèn (trên 4.0 blocks) hoặc phá hủy khối Lodestone, nghi thức sẽ bị hủy và hoàn trả nguyên liệu."
  },
  {
    id: "curse-state",
    title: "☠ Trạng Thái Nguyền Rủa (Cursed State)",
    content: "Trạng thái nguyền rủa là một hiệu ứng tiêu cực kéo dài ám ảnh người chơi khi họ tiếp xúc hoặc thất bại trong việc kiểm soát các ma pháp cổ vật mạnh mẽ.\n\n- **Cách thức dính Lời Nguyền:**\n  + *Chế tạo thất bại:* Rèn lỗi lõi ma thuật (như thất bại 80% khi chế tạo End Core).\n  + *Sử dụng Kiếm Cổ Nguyền:* Tấn công bằng Kiếm Cổ Nguyền có 50% cơ hội tự nguyền rủa bản thân, hoặc 50% cơ hội truyền lời nguyền cho nạn nhân bị chém.\n\n- **Rơi đầu người chơi & Giải lời nguyền:**\n  + *Rơi đầu khi chết:* Khi người chơi đang bị nguyền rủa bị người chơi khác giết, có **20% cơ hội** rơi ra vật phẩm đầu của chính mình (Player Head).\n  + *Hóa giải lập tức:* Nếu đầu người chơi rơi thành công khi chết, Lời nguyền trên người chơi đó sẽ **biến mất ngay lập tức**.\n  + *Nguyên liệu quý:* Đầu người chơi thu thập được từ lời nguyền là nguyên liệu bắt buộc để chế tạo **Lõi Huyết Ma (Blood Core)**."
  },
  {
    id: "enchant-rules",
    title: "✨ Quy Tắc Cường Hóa (Enchantment) & Sửa Chữa",
    content: "Hệ thống áp dụng chính sách cường hóa riêng biệt để bảo đảm tính cân bằng của các cổ vật:\n\n- Các loại búa **Mace** mặc định chỉ nhận phù phép **Mending** và **Unbreaking**.\n- Các loại giáo **Spear** nhận thêm phù phép **Sharpness**.\n- Việc ép sách hoặc cường hóa các loại phù phép bị cấm khác sẽ bị hệ thống chặn hoàn toàn.\n- Tuy nhiên, việc sửa chữa vũ khí bằng đe **Anvil** (không kèm sách phù phép bị cấm) vẫn diễn ra bình thường."
  },
  {
    id: "ingame-info",
    title: "🔍 Tra Cứu Trực Tiếp Trong Game (/macee info)",
    content: "Sử dụng lệnh **`/macee info`** (hoặc gõ tắt **`/me info`**) để mở menu giao diện GUI tra cứu công thức rèn đúc trực quan ngay trong game.\n\nHoặc gõ **`/macee info <tên_vũ_khí>`** (ví dụ: `/macee info void`) để kiểm tra ai đang sở hữu cổ vật đó."
  }
];

export const vaneTriflesItems: Weapon[] = [
  {
    id: "golden_sickle",
    name: "Liềm Thu Hoạch",
    enName: "Golden Sickle",
    badge: "🌾",
    colorClass: "border-[#ffaa00]",
    cmd: 3001,
    singleton: false,
    desc: "Dụng cụ nông nghiệp chuyên dụng giúp thu hoạch lúa chín và tự gieo hạt trong bán kính cực rộng (5x5).",
    tooltip: "&e&lGolden Sickle|&7Dụng cụ thu hoạch diện rộng.||&6⚡ Active — Area Harvest:|&fChuột phải vào ruộng chín để thu hoạch và tự động trồng lại. Phạm vi 5x5. (Bản liềm vàng cho hiệu quả tốt nhất) ||&a⭐ Passive:|&fThời gian sử dụng cực lâu, hỗ trợ làm nông năng suất cao.",
    gifUrl: "https://oddlama.github.io/vane/assets/gifs/sickle.gif",
    recipe: {
      shape: [
        ["", "G", "G"],
        ["", "", "G"],
        ["", "S", ""]
      ],
      ingredients: {
        G: { name: "Thỏi Vàng", itemId: "gold_ingot", tooltip: "&eGold Ingot|&7Thỏi vàng nguyên chất." },
        S: { name: "Gậy", itemId: "stick", tooltip: "&fStick|&7Gậy gỗ." }
      }
    }
  },
  {
    id: "file_tool",
    name: "Giũa Kiến Trúc",
    enName: "Block Connection File",
    badge: "🔧",
    colorClass: "border-[#aaaaaa]",
    cmd: 3002,
    singleton: false,
    desc: "Công cụ tinh chỉnh các kết nối vật lý của khối tường đá, hàng rào, kính tấm hoặc thay đổi hình dáng bậc thang.",
    tooltip: "&7&lDesign File|&7Tweak block connections.||&6⚡ Active — Connection Tweak:|&fChuột phải vào hàng rào, tường đá, kính tấm hoặc bậc thang để xoay và định hình khớp nối thủ công theo ý muốn.",
    recipe: {
      shape: [
        ["", "I", ""],
        ["S", "", ""],
        ["", "", ""]
      ],
      ingredients: {
        I: { name: "Thỏi Sắt", itemId: "iron_ingot", tooltip: "&fIron Ingot|&7Thỏi sắt chế tác." },
        S: { name: "Gậy", itemId: "stick", tooltip: "&fStick|&7Gậy gỗ." }
      }
    }
  },
  {
    id: "trowel",
    name: "Bay Xây Dựng",
    enName: "Architect Trowel",
    badge: "🧱",
    colorClass: "border-[#b5e2fa]",
    cmd: 3003,
    singleton: false,
    desc: "Tự động đặt một khối xây dựng ngẫu nhiên từ Hotbar hoặc hàng rương chỉ định khi nhấp chuột phải.",
    tooltip: "&b&lArchitect Trowel|&7Xây dựng vân khối ngẫu nhiên.||&6⚡ Active — Random Block Placement:|&fChuột phải để đặt một khối ngẫu nhiên có trong Hotbar.||&a⭐ Passive — Source Selection:|&fChuột phải trong túi đồ để thay đổi dòng kho đồ cấp vật liệu xây dựng (Hotbar hoặc các dòng kho đồ khác).",
    gifUrl: "https://oddlama.github.io/vane/assets/gifs/trowel.gif",
    recipe: {
      shape: [
        ["", "", "S"],
        ["I", "I", ""],
        ["", "", ""]
      ],
      ingredients: {
        I: { name: "Thỏi Sắt", itemId: "iron_ingot", tooltip: "&fIron Ingot|&7Thỏi sắt thô." },
        S: { name: "Gậy", itemId: "stick", tooltip: "&fStick|&7Gậy gỗ." }
      }
    }
  },
  {
    id: "north_compass",
    name: "La Bàn Hướng Bắc True-North",
    enName: "North Compass",
    badge: "🧭",
    colorClass: "border-[#ff5555]",
    cmd: 3004,
    singleton: false,
    desc: "La bàn thám hiểm luôn chỉ về hướng Bắc địa lý thực sự, thay vì chỉ về điểm Spawn thế giới.",
    tooltip: "&c&lNorth Compass|&7Points to the true North.||&a⭐ Passive — True North Indicator:|&fKim la bàn luôn xoay và chỉ về hướng Bắc tuyệt đối của thế giới hiện tại.",
    recipe: {
      shape: [
        ["", "I", ""],
        ["I", "R", "I"],
        ["", "I", ""]
      ],
      ingredients: {
        I: { name: "Thỏi Đồng", itemId: "copper_ingot", tooltip: "&6Copper Ingot|&7Thỏi đồng tiêu chuẩn." },
        R: { name: "Bột Đá Đỏ", itemId: "redstone", tooltip: "&cRedstone Dust|&7Bột đá đỏ truyền dẫn năng lượng." }
      }
    }
  },
  {
    id: "slime_bucket",
    name: "Xô Bắt Slime",
    enName: "Slime Bucket",
    badge: "🟢",
    colorClass: "border-[#55ff55]",
    cmd: 3005,
    singleton: false,
    desc: "Chứa một slime nhỏ. Slime sẽ nhảy liên tục trong xô khi người chơi đang đứng trong một Slime Chunk.",
    tooltip: "&a&lSlime Bucket|&7Slime chunk detector.||&a⭐ Passive — Chunk Finder:|&fSlime trong xô nhảy tưng tưng nếu bạn đứng trong Slime Chunk.||&6⚡ Active — Deploy Slime:|&fChuột phải vào đất để thả slime nhỏ ra ngoài. Có thể thay thế cho slimeball khi chế tạo.",
    gifUrl: "https://oddlama.github.io/vane/assets/gifs/slime_bucket.gif",
    recipe: null
  },
  {
    id: "pouch",
    name: "Túi Da Pouch",
    enName: "Pouch",
    badge: "👛",
    colorClass: "border-[#ffaa00]",
    cmd: 3007,
    singleton: false,
    desc: "Giải pháp chứa đồ gọn nhẹ chứa được nhiều vật phẩm lẻ tẻ, nhấp chuột phải để mở giao diện chứa đồ.",
    tooltip: "&6&lPouch|&7Early game bundle alternative.||&6⚡ Active:|&fCầm trên tay và chuột phải để mở. Hoặc nhấp chuột phải vật phẩm lẻ vào túi để cất nhanh.",
    recipe: {
      shape: [
        ["S", "H", "S"],
        ["H", "", "H"],
        ["H", "H", "H"]
      ],
      ingredients: {
        H: { name: "Da Thỏ", itemId: "rabbit_hide", tooltip: "&7Rabbit Hide|&7Da thỏ mềm mại." },
        S: { name: "Sợi Chỉ", itemId: "string", tooltip: "&fString|&7Sợi chỉ mảnh." }
      }
    }
  },
  {
    id: "backpack",
    name: "Balo Leo Núi",
    enName: "Backpack",
    badge: "🎒",
    colorClass: "border-[#ff55ff]",
    cmd: 3006,
    singleton: false,
    desc: "Balo thám hiểm chứa 27 ô đồ phụ (tương đương rương đơn). Ghép nâng cấp bằng Bàn Rèn.",
    tooltip: "&d&lBackpack|&7Rương chứa đồ di động đeo vai.||&6⚡ Active — Open Pack:|&fĐeo trên lưng hoặc cầm trên tay để mở rương phụ 27 ô đồ.||&c☠ Điểm yếu:|&fKhông thể đặt balo xuống đất dưới dạng block.",
    recipe: {
      shape: [
        ["T", "B", "C"],
        ["", "", ""],
        ["", "", ""]
      ],
      ingredients: {
        T: { name: "Phôi Nâng Cấp Netherite", itemId: "netherite_upgrade_smithing_template", tooltip: "&7Netherite Upgrade Template|&7Phôi rèn rương đồ đeo vai." },
        B: { name: "Hộp Shulker", itemId: "shulker_box", tooltip: "&5Shulker Box|&7Khối shulker làm túi đồ." },
        C: { name: "Giáp Ngực Da", itemId: "leather_chestplate", tooltip: "&fLeather Chestplate|&7Giáp ngực da làm quai đeo." }
      }
    }
  },
  {
    id: "papyrus_scroll",
    name: "Cuộn Giấy Papyrus",
    enName: "Papyrus Scroll",
    badge: "📜",
    colorClass: "border-[#aaaaaa]",
    cmd: 3008,
    singleton: false,
    desc: "Mảnh giấy cổ nén năng lượng không gian, là phôi nền tảng để chế tạo toàn bộ các cuộn giấy dịch chuyển.",
    tooltip: "&7&lPapyrus Scroll|&7Base item for portal scrolls.||&a⭐ Nguyên Liệu Thám Hiểm:|&fKết hợp năng lượng của ngọc ender và thạch anh để định vị không gian.",
    recipe: {
      shape: [
        ["H", "P", "P"],
        ["P", "E", "P"],
        ["P", "P", "G"]
      ],
      ingredients: {
        H: { name: "Da Thỏ", itemId: "rabbit_hide", tooltip: "&7Rabbit Hide" },
        P: { name: "Giấy", itemId: "paper", tooltip: "&fPaper" },
        E: { name: "Mảnh Tiếng Vọng", itemId: "echo_shard", tooltip: "&3Echo Shard|&7Mảnh tiếng vọng ngưng tụ hạt không gian." },
        G: { name: "Hạt Vàng", itemId: "gold_nugget", tooltip: "&eGold Nugget" }
      }
    }
  },
  {
    id: "home_scroll",
    name: "Cuộn Dịch Chuyển Về Nhà",
    enName: "Portal Scroll - Home",
    badge: "🏠",
    colorClass: "border-[#55ff55]",
    cmd: 3010,
    singleton: false,
    desc: "Định vị và dịch chuyển tức thời bạn về giường ngủ của mình. Có 25 lượt sử dụng.",
    tooltip: "&a&lPortal Scroll - Home|&7Dịch chuyển về giường ngủ.||&6⚡ Active — Recall Home:|&fVận sức giữ đứng yên 3 giây để dịch chuyển về giường ngủ. Có 25 lượt dùng.||&f💡 Mẹo: &7Có thể ép sách Unbreaking tại đe để tăng số lần sử dụng.",
    recipe: {
      shape: [
        ["C", "G", "B"],
        ["E", "P", "E"],
        ["", "", ""]
      ],
      ingredients: {
        C: { name: "Lửa Trại", itemId: "campfire", tooltip: "&cCampfire|&7Khối lửa trại ấm cúng." },
        G: { name: "Sừng Dê", itemId: "goat_horn", tooltip: "&7Goat Horn|&7Sừng dê tạo âm thanh vang vọng." },
        B: { name: "Giường Ngủ", itemId: "bed", tooltip: "&cBed|&7Giường ngủ cá nhân làm mốc hồi quy." },
        E: { name: "Ngọc Ender", itemId: "ender_pearl", tooltip: "&fEnder Pearl" },
        P: { name: "Cuộn Giấy Papyrus", itemId: "papyrus_scroll", tooltip: "&7Papyrus Scroll" }
      }
    }
  },
  {
    id: "unstable_scroll",
    name: "Cuộn Dịch Chuyển Bất Ổn",
    enName: "Portal Scroll - Unstable",
    badge: "🌀",
    colorClass: "border-[#ff55ff]",
    cmd: 3011,
    singleton: false,
    desc: "Đưa bạn quay trở lại vị trí cũ mà bạn đã sử dụng cuộn giấy dịch chuyển gần nhất.",
    tooltip: "&d&lPortal Scroll - Unstable|&7Dịch chuyển về điểm dùng scroll trước đó.||&6⚡ Active — Return Teleport:|&fVận sức 3 giây để quay lại tọa độ thám hiểm trước khi dùng scroll về nhà/spawn.",
    recipe: {
      shape: [
        ["A", "C", "A"],
        ["F", "P", "F"],
        ["", "", ""]
      ],
      ingredients: {
        A: { name: "Mảnh Thạch Anh Tím", itemId: "amethyst_shard", tooltip: "&dAmethyst Shard" },
        C: { name: "La Bàn", itemId: "compass", tooltip: "&fCompass" },
        F: { name: "Quả Điệp Vy", itemId: "chorus_fruit", tooltip: "&5Chorus Fruit|&7Quả cây điệp vy hấp thụ ma pháp không gian." },
        P: { name: "Cuộn Giấy Papyrus", itemId: "papyrus_scroll", tooltip: "&7Papyrus Scroll" }
      }
    }
  },
  {
    id: "spawn_scroll",
    name: "Cuộn Dịch Chuyển Về Spawn",
    enName: "Portal Scroll - Spawn",
    badge: "🌍",
    colorClass: "border-[#55ffff]",
    cmd: 3012,
    singleton: false,
    desc: "Vận chuyển bạn lập tức quay trở lại điểm Spawn chính của thế giới/máy chủ.",
    tooltip: "&b&lPortal Scroll - Spawn|&7Dịch chuyển về Spawn của server.||&6⚡ Active — Teleport to Spawn:|&fVận sức 3 giây để bay về điểm Spawn trung tâm của máy chủ.",
    recipe: {
      shape: [
        ["W", "S", "W"],
        ["E", "P", "E"],
        ["", "", ""]
      ],
      ingredients: {
        W: { name: "Hạt Giống Lúa", itemId: "wheat_seeds", tooltip: "&7Wheat Seeds" },
        S: { name: "Mầm Cây Sồi", itemId: "sapling", tooltip: "&aOak Sapling" },
        E: { name: "Ngọc Ender", itemId: "ender_pearl", tooltip: "&fEnder Pearl" },
        P: { name: "Cuộn Giấy Papyrus", itemId: "papyrus_scroll", tooltip: "&7Papyrus Scroll" }
      }
    }
  },
  {
    id: "death_scroll",
    name: "Cuộn Dịch Chuyển Điểm Chết",
    enName: "Portal Scroll - Death",
    badge: "💀",
    colorClass: "border-[#ff5555]",
    cmd: 3013,
    singleton: false,
    desc: "Đưa bạn quay lại vị trí chết gần nhất (chỉ khả dụng trong vòng 20 phút sau khi tử trận). Chỉ có 2 lượt dùng.",
    tooltip: "&c&lPortal Scroll - Death|&7Dịch chuyển về điểm chết.||&6⚡ Active — Return to Death Point:|&fChuột phải để dịch chuyển về tọa độ bạn chết gần nhất.||&e⚠️ Giới hạn: &7Có tác dụng trong 20 phút kể từ lúc chết. Chỉ có 2 lượt sử dụng.",
    recipe: {
      shape: [
        ["B", "R", "B"],
        ["E", "P", "E"],
        ["", "", ""]
      ],
      ingredients: {
        B: { name: "Xương", itemId: "bone", tooltip: "&fBone" },
        R: { name: "La Bàn Hồi Phục", itemId: "recovery_compass", tooltip: "&3Recovery Compass|&7La bàn định vị điểm chết." },
        E: { name: "Ngọc Ender", itemId: "ender_pearl", tooltip: "&fEnder Pearl" },
        P: { name: "Cuộn Giấy Papyrus", itemId: "papyrus_scroll", tooltip: "&7Papyrus Scroll" }
      }
    }
  },
  {
    id: "lodestone_scroll",
    name: "Cuộn Dịch Chuyển Định Vị",
    enName: "Portal Scroll - Lodestone",
    badge: "🪨",
    colorClass: "border-[#aaaaaa]",
    cmd: 3014,
    singleton: false,
    desc: "Shift-chuột phải vào khối Lodestone bất kỳ để liên kết tọa độ, sau đó sử dụng để dịch chuyển về khối đó.",
    tooltip: "&7&lPortal Scroll - Lodestone|&7Dịch chuyển về khối Lodestone liên kết.||&6⚡ Hướng dẫn liên kết:|&fShift-chuột phải vào Lodestone trước để ghi nhớ tọa độ. Sau đó vận sức 3 giây để bay về khối đá đó.",
    recipe: {
      shape: [
        ["A", "N", "A"],
        ["E", "P", "E"],
        ["", "", ""]
      ],
      ingredients: {
        A: { name: "Mảnh Thạch Anh Tím", itemId: "amethyst_shard", tooltip: "&dAmethyst Shard" },
        N: { name: "Thỏi Netherite", itemId: "netherite_ingot", tooltip: "&7Netherite Ingot" },
        E: { name: "Ngọc Ender", itemId: "ender_pearl", tooltip: "&fEnder Pearl" },
        P: { name: "Cuộn Giấy Papyrus", itemId: "papyrus_scroll", tooltip: "&7Papyrus Scroll" }
      }
    }
  },
  {
    id: "empty_xp_bottle",
    name: "Chai EXP Rỗng",
    enName: "Empty XP Bottle",
    badge: "🧪",
    colorClass: "border-[#ffff55]",
    cmd: 3015,
    singleton: false,
    desc: "Chai thủy tinh đặc biệt giúp thu hồi và lưu trữ kinh nghiệm của bản thân thành Chai Kinh Nghiệm.",
    tooltip: "&e&lEmpty XP Bottle|&7Chai thu hồi kinh nghiệm.||&6⚡ Active — Store XP:|&fSneak + chuột phải để rút một phần cấp kinh nghiệm cá nhân cất vào chai. Sẽ có hao hụt nhỏ kinh nghiệm trong quá trình rút.",
    recipe: {
      shape: [
        ["X", "G", "N"],
        ["", "", ""],
        ["", "", ""]
      ],
      ingredients: {
        X: { name: "Chai Kinh Nghiệm", itemId: "experience_bottle", tooltip: "&aExperience Bottle|&7Chai kinh nghiệm gốc." },
        G: { name: "Chai Thủy Tinh Rỗng", itemId: "glass_bottle", tooltip: "&7Glass Bottle" },
        N: { name: "Hạt Vàng", itemId: "gold_nugget", tooltip: "&eGold Nugget" }
      }
    }
  },
  {
    id: "reinforced_elytra",
    name: "Cánh Cứng Netherite",
    enName: "Netherite Elytra",
    badge: "🛡️",
    colorClass: "border-[#4a3b5c]",
    cmd: 3016,
    singleton: false,
    desc: "Cánh cứng được gia cố hợp kim Netherite tại Bàn Rèn, kết hợp khả năng bay lượn và phòng thủ của giáp ngực.",
    tooltip: "&8&lNetherite Elytra|&7Cánh bay gia cố giáp ngực.||&a⭐ Passive — Defense flight:|&fCấp lượng chỉ số giáp tương tự như Giáp ngực Netherite cùng với khả năng bay lượn của Elytra thường.",
    recipe: {
      shape: [
        ["T", "E", "N"],
        ["", "", ""],
        ["", "", ""]
      ],
      ingredients: {
        T: { name: "Phôi Nâng Cấp Netherite", itemId: "netherite_upgrade_smithing_template", tooltip: "&7Netherite Upgrade Template" },
        E: { name: "Cánh Cứng", itemId: "elytra", tooltip: "&fElytra|&7Cánh bay Elytra." },
        N: { name: "Thỏi Netherite", itemId: "netherite_ingot", tooltip: "&7Netherite Ingot" }
      }
    }
  }
];

// ────────────────────────────────────────────────────────────────
// Tối ưu hóa Reactivity Vue 3: Đóng băng dữ liệu tĩnh
// ────────────────────────────────────────────────────────────────
Object.freeze(colorCodes);
Object.freeze(maceWeapons);
Object.freeze(spearWeapons);
Object.freeze(customWeapons);
Object.freeze(cores);
Object.freeze(materials);
Object.freeze(forgeSteps);
Object.freeze(guideSections);
Object.freeze(vaneTriflesItems);
