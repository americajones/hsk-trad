
//100% complete sets

const zhuyinCharacters = {
    "ㄅ": {
        "pinyin": "b",
        "pronounced": "",
        "isEnding": false
    },
    "ㄆ": {
        "pinyin": "p",
        "pronounced": "",
        "isEnding": false
    },
    "ㄇ": {
        "pinyin": "m",
        "pronounced": "",
        "isEnding": false
    },
    "ㄈ": {
        "pinyin": "f",
        "pronounced": "",
        "isEnding": false
    },
    "ㄉ": {
        "pinyin": "d",
        "pronounced": "",
        "isEnding": false
    },
    "ㄊ": {
        "pinyin": "t",
        "pronounced": "",
        "isEnding": false
    },
    "ㄋ": {
        "pinyin": "n",
        "pronounced": "",
        "isEnding": false
    },
    "ㄌ": {
        "pinyin": "l",
        "pronounced": "",
        "isEnding": false
    },
    "ㄍ": {
        "pinyin": "g",
        "pronounced": "",
        "isEnding": false
    },
    "ㄎ": {
        "pinyin": "k",
        "pronounced": "",
        "isEnding": false
    },
    "ㄏ": {
        "pinyin": "h",
        "pronounced": "",
        "isEnding": false
    },
    "ㄐ": {
        "pinyin": "j",
        "pronounced": "",
        "isEnding": false
    },
    "ㄑ": {
        "pinyin": "q",
        "pronounced": "ch",
        "isEnding": false
    },
    "ㄒ": {
        "pinyin": "x",
        "pronounced": "sh",
        "isEnding": false
    },
    "ㄓ": {
        "pinyin": "zh",
        "pronounced": "J",
        "isEnding": false
    },
    "ㄔ": {
        "pinyin": "ch",
        "pronounced": "",
        "isEnding": false
    },
    "ㄕ": {
        "pinyin": "sh",
        "pronounced": "",
        "isEnding": false
    },
    "ㄖ": {
        "pinyin": "r",
        "pronounced": "french j",
        "isEnding": false
    },
    "ㄗ": {
        "pinyin": "z",
        "pronounced": "",
        "isEnding": false
    },
    "ㄘ": {
        "pinyin": "c",
        "pronounced": "ts",
        "isEnding": false
    },
    "ㄙ": {
        "pinyin": "s",
        "pronounced": "",
        "isEnding": false
    },
    "一": {
        "pinyin": "i, y",
        "pronounced": "eee",
        "isEnding": true
    },
    "ㄨ": {
        "pinyin": "u, w",
        "pronounced": "ooo",
        "isEnding": true
    },
    "ㄩ": {
        "pinyin": "ü, yu",
        "pronounced": "yeuu",
        "isEnding": true
    },
    "ㄚ": {
        "pinyin": "a",
        "pronounced": "ah",
        "isEnding": true
    },
    "ㄛ": {
        "pinyin": "o",
        "pronounced": "ooh",
        "isEnding": true
    },
    "ㄜ": {
        "pinyin": "e",
        "pronounced": "uh",
        "isEnding": true
    },
    "ㄝ": {
        "pinyin": "e",
        "pronounced": "eh",
        "isEnding": true
    },
    "ㄞ": {
        "pinyin": "ai",
        "pronounced": "",
        "isEnding": true
    },
    "ㄟ": {
        "pinyin": "ei",
        "pronounced": "eyy",
        "isEnding": true
    },
    "ㄠ": {
        "pinyin": "ao",
        "pronounced": "",
        "isEnding": true
    },
    "ㄡ": {
        "pinyin": "ou",
        "pronounced": "oh",
        "isEnding": true
    },
    "ㄢ": {
        "pinyin": "an",
        "pronounced": "",
        "isEnding": true
    },
    "ㄣ": {
        "pinyin": "en",
        "pronounced": "uen",
        "isEnding": true
    },
    "ㄤ": {
        "pinyin": "ang",
        "pronounced": "",
        "isEnding": true
    },
    "ㄥ": {
        "pinyin": "eng",
        "pronounced": "ung",
        "isEnding": true
    },
    "ㄦ": {
        "pinyin": "er",
        "pronounced": "",
        "isEnding": true
    }
};
const chineseRadicals = {
    "一": {
        "zhuyin": "一",
        "pinyin": "yī",
        "tone": 1,
        "english": "one",
        "variant": ""
    },
    "丨": {
        "zhuyin": "ㄍㄨㄣˇ",
        "pinyin": "gǔn ",
        "tone": 3,
        "english": "line, down",
        "variant": ""
    },
    "丶": {
        "zhuyin": "ㄉ一ㄢˇ",
        "pinyin": "diǎn",
        "tone": 3,
        "english": "dot",
        "variant": ""
    },
    "丿": {
        "zhuyin": "ㄆ一ㄝˇ",
        "pinyin": "piě",
        "tone": 3,
        "english": "slash, left",
        "variant": "乀, 乁"
    },
    "乙": {
        "zhuyin": "一",
        "pinyin": "yǐ",
        "tone": 3,
        "english": "second, twist",
        "variant": "乚, 乛"
    },
    "亅": {
        "zhuyin": "ㄍㄡ",
        "pinyin": "gōu",
        "tone": 1,
        "english": "hook",
        "variant": ""
    },
    "二": {
        "zhuyin": "ㄦˋ",
        "pinyin": "èr",
        "tone": 4,
        "english": "two",
        "variant": ""
    },
    "亠": {
        "zhuyin": "ㄊㄡˊ",
        "pinyin": "tóu",
        "tone": 2,
        "english": "lid",
        "variant": ""
    },
    "人": {
        "zhuyin": "ㄖㄣˊ",
        "pinyin": "rén",
        "tone": 2,
        "english": "person",
        "variant": "亻"
    },
    "儿": {
        "zhuyin": "ㄦˊ",
        "pinyin": "ér",
        "tone": 2,
        "english": "legs",
        "variant": ""
    },
    "入": {
        "zhuyin": "ㄖㄨˋ",
        "pinyin": "rù",
        "tone": 4,
        "english": "enter",
        "variant": ""
    },
    "八": {
        "zhuyin": "ㄅㄚ",
        "pinyin": "bā",
        "tone": 1,
        "english": "eight",
        "variant": "丷"
    },
    "冂": {
        "zhuyin": "ㄐㄩㄥˇ",
        "pinyin": "jiǒng",
        "tone": 3,
        "english": "down box, borders",
        "variant": ""
    },
    "冖": {
        "zhuyin": "ㄇ一ˋ",
        "pinyin": "mì",
        "tone": 4,
        "english": "cover, crown",
        "variant": ""
    },
    "冫": {
        "zhuyin": "ㄅ一ㄥ",
        "pinyin": "bīng",
        "tone": 1,
        "english": "ice",
        "variant": ""
    },
    "几": {
        "zhuyin": "ㄐ一",
        "pinyin": "jī, jǐ",
        "tone": 1,
        "english": "table",
        "variant": ""
    },
    "凵": {
        "zhuyin": "ㄑㄩˇ",
        "pinyin": "qǔ",
        "tone": 3,
        "english": "open box, bowl",
        "variant": ""
    },
    "刀": {
        "zhuyin": "ㄉㄠ",
        "pinyin": "dāo",
        "tone": 1,
        "english": "knife",
        "variant": "刂"
    },
    "力": {
        "zhuyin": "ㄌ一ˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "power, strength",
        "variant": ""
    },
    "勹": {
        "zhuyin": "ㄅㄠ",
        "pinyin": "bāo",
        "tone": 1,
        "english": "wrap",
        "variant": ""
    },
    "匕": {
        "zhuyin": "ㄅ一ˇ",
        "pinyin": "bǐ",
        "tone": 3,
        "english": "ladle",
        "variant": ""
    },
    "匚": {
        "zhuyin": "ㄈㄤ",
        "pinyin": "fāng",
        "tone": 1,
        "english": "right open box",
        "variant": ""
    },
    "匸": {
        "zhuyin": "ㄒ一ˇ",
        "pinyin": "xǐ",
        "tone": 3,
        "english": "hiding enclosure",
        "variant": ""
    },
    "十": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "ten",
        "variant": ""
    },
    "卜": {
        "zhuyin": "ㄅㄨˇ",
        "pinyin": "bǔ",
        "tone": 3,
        "english": "divination, divine",
        "variant": ""
    },
    "卩": {
        "zhuyin": "ㄐ一ㄝˊ",
        "pinyin": "jié",
        "tone": 2,
        "english": "seal",
        "variant": ""
    },
    "厂": {
        "zhuyin": "ㄏㄢˋ",
        "pinyin": "hàn",
        "tone": 4,
        "english": "cliff, slope",
        "variant": ""
    },
    "厶": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "private, cocoon",
        "variant": ""
    },
    "又": {
        "zhuyin": "一ㄡˋ",
        "pinyin": "yòu",
        "tone": 4,
        "english": "again, right hand",
        "variant": ""
    },
    "口": {
        "zhuyin": "ㄎㄡˇ",
        "pinyin": "kǒu",
        "tone": 3,
        "english": "mouth, opening",
        "variant": ""
    },
    "囗": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "wéi",
        "tone": 2,
        "english": "enclosure, surround",
        "variant": ""
    },
    "土": {
        "zhuyin": "ㄊㄨˇ",
        "pinyin": "tǔ",
        "tone": 3,
        "english": "earth",
        "variant": ""
    },
    "士": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "scholar, knight",
        "variant": ""
    },
    "夂": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "go, follow",
        "variant": ""
    },
    "夊": {
        "zhuyin": "ㄙㄨㄟ",
        "pinyin": "suī",
        "tone": 1,
        "english": "go slowly",
        "variant": ""
    },
    "夕": {
        "zhuyin": "ㄒ一",
        "pinyin": "xī",
        "tone": 1,
        "english": "night",
        "variant": ""
    },
    "大": {
        "zhuyin": "ㄉㄚˋ",
        "pinyin": "dà",
        "tone": 4,
        "english": "big",
        "variant": ""
    },
    "女": {
        "zhuyin": "ㄋㄩˇ",
        "pinyin": "nǚ",
        "tone": 3,
        "english": "woman",
        "variant": ""
    },
    "子": {
        "zhuyin": "ㄗˇ",
        "pinyin": "zǐ",
        "tone": 3,
        "english": "child",
        "variant": ""
    },
    "宀": {
        "zhuyin": "ㄍㄞˋ",
        "pinyin": "gài",
        "tone": 4,
        "english": "roof",
        "variant": ""
    },
    "寸": {
        "zhuyin": "ㄘㄨㄣˋ",
        "pinyin": "cùn",
        "tone": 4,
        "english": "inch, thumb",
        "variant": ""
    },
    "小": {
        "zhuyin": "ㄒ一ㄠˇ",
        "pinyin": "xiǎo",
        "tone": 3,
        "english": "small",
        "variant": ""
    },
    "尢": {
        "zhuyin": "一ㄡˊ",
        "pinyin": "yóu",
        "tone": 2,
        "english": "lame",
        "variant": "尣"
    },
    "尸": {
        "zhuyin": "ㄕ",
        "pinyin": "shī",
        "tone": 1,
        "english": "corpse",
        "variant": ""
    },
    "屮": {
        "zhuyin": "ㄔㄜˋ",
        "pinyin": "chè",
        "tone": 4,
        "english": "sprout",
        "variant": ""
    },
    "山": {
        "zhuyin": "ㄕㄢ",
        "pinyin": "shān",
        "tone": 1,
        "english": "mountain",
        "variant": ""
    },
    "川": {
        "zhuyin": "ㄔㄨㄢ",
        "pinyin": "chuān",
        "tone": 1,
        "english": "river",
        "variant": "巛, 巜"
    },
    "工": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "work",
        "variant": ""
    },
    "己": {
        "zhuyin": "ㄐ一ˇ",
        "pinyin": "jǐ",
        "tone": 3,
        "english": "oneself",
        "variant": ""
    },
    "巾": {
        "zhuyin": "ㄐ一ㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "towel, cloth",
        "variant": ""
    },
    "干": {
        "zhuyin": "ㄍㄢ",
        "pinyin": "gān",
        "tone": 1,
        "english": "dry, shield",
        "variant": ""
    },
    "幺": {
        "zhuyin": "一ㄠ",
        "pinyin": "yāo",
        "tone": 1,
        "english": "thread, coil",
        "variant": ""
    },
    "广": {
        "zhuyin": "ㄍㄨㄤˇ",
        "pinyin": "guǎng",
        "tone": 3,
        "english": "shelter, house on cliff, lean to",
        "variant": ""
    },
    "廴": {
        "zhuyin": "一ㄣ",
        "pinyin": "yǐn",
        "tone": 3,
        "english": "stride, march",
        "variant": ""
    },
    "廾": {
        "zhuyin": "ㄍㄨㄥˇ",
        "pinyin": "gǒng",
        "tone": 3,
        "english": "clasp, hands joined",
        "variant": ""
    },
    "弋": {
        "zhuyin": "一ˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "dart, shoot with a bow",
        "variant": ""
    },
    "弓": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "bow",
        "variant": ""
    },
    "彐": {
        "zhuyin": "ㄐ一ˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "snout",
        "variant": "彑"
    },
    "彡": {
        "zhuyin": "ㄕㄢ",
        "pinyin": "shān",
        "tone": 1,
        "english": "hair, streaks",
        "variant": ""
    },
    "彳": {
        "zhuyin": "ㄔˋ",
        "pinyin": "chì",
        "tone": 4,
        "english": "step",
        "variant": ""
    },
    "心": {
        "zhuyin": "ㄒ一ㄣ",
        "pinyin": "xīn",
        "tone": 1,
        "english": "heart",
        "variant": "忄, ⺗"
    },
    "戈": {
        "zhuyin": "ㄍㄜ",
        "pinyin": "gē",
        "tone": 1,
        "english": "dagger, spear, lance",
        "variant": ""
    },
    "户": {
        "zhuyin": "ㄏㄨˋ",
        "pinyin": "hù",
        "tone": 4,
        "english": "door",
        "variant": ""
    },
    "手": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "shǒu",
        "tone": 3,
        "english": "hand",
        "variant": "扌"
    },
    "支": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "branch",
        "variant": ""
    },
    "攴": {
        "zhuyin": "ㄆㄨ",
        "pinyin": "pū",
        "tone": 1,
        "english": "rap, knock",
        "variant": "攵"
    },
    "文": {
        "zhuyin": "ㄨㄣˊ",
        "pinyin": "wén",
        "tone": 2,
        "english": "script, pattern",
        "variant": ""
    },
    "斗": {
        "zhuyin": "ㄉㄡˇ",
        "pinyin": "dǒu",
        "tone": 3,
        "english": "dipper, peck",
        "variant": ""
    },
    "斤": {
        "zhuyin": "ㄐ一ㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "axe",
        "variant": ""
    },
    "方": {
        "zhuyin": "ㄈㄤ",
        "pinyin": "fāng",
        "tone": 1,
        "english": "square",
        "variant": ""
    },
    "无": {
        "zhuyin": "ㄨˊ",
        "pinyin": "wú",
        "tone": 2,
        "english": "not, lack",
        "variant": ""
    },
    "日": {
        "zhuyin": "ㄖˋ",
        "pinyin": "rì",
        "tone": 4,
        "english": "sun",
        "variant": ""
    },
    "曰": {
        "zhuyin": "ㄩㄝ",
        "pinyin": "yuē",
        "tone": 1,
        "english": "say",
        "variant": ""
    },
    "月": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "yuè",
        "tone": 4,
        "english": "moon",
        "variant": ""
    },
    "木": {
        "zhuyin": "ㄇㄨˋ",
        "pinyin": "mù",
        "tone": 4,
        "english": "tree",
        "variant": ""
    },
    "欠": {
        "zhuyin": "ㄑ一ㄢˋ",
        "pinyin": "qiàn",
        "tone": 4,
        "english": "yawn, lack",
        "variant": ""
    },
    "止": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 1,
        "english": "stop",
        "variant": ""
    },
    "歹": {
        "zhuyin": "ㄉㄞˇ",
        "pinyin": "dǎi",
        "tone": 3,
        "english": "death, wicked, evil",
        "variant": ""
    },
    "殳": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "shū",
        "tone": 1,
        "english": "weapon, club",
        "variant": ""
    },
    "毋": {
        "zhuyin": "ㄇㄨˇ",
        "pinyin": "mǔ",
        "tone": 3,
        "english": "don't, not",
        "variant": "母"
    },
    "比": {
        "zhuyin": "ㄅ一ˇ",
        "pinyin": "bǐ",
        "tone": 3,
        "english": "compare",
        "variant": ""
    },
    "毛": {
        "zhuyin": "ㄇㄠˋ",
        "pinyin": "máo",
        "tone": 4,
        "english": "fur",
        "variant": ""
    },
    "氏": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "clan",
        "variant": ""
    },
    "氣": {
        "zhuyin": "ㄑ一ˋ",
        "pinyin": "qì",
        "tone": 4,
        "english": "steam, breath",
        "variant": ""
    },
    "水": {
        "zhuyin": "ㄕㄨㄟˇ",
        "pinyin": "shuǐ",
        "tone": 3,
        "english": "water",
        "variant": "氵"
    },
    "火": {
        "zhuyin": "ㄏㄨㄛˇ",
        "pinyin": "huǒ",
        "tone": 3,
        "english": "fire",
        "variant": "灬"
    },
    "爪": {
        "zhuyin": "ㄓㄠˇ",
        "pinyin": "zhǎo",
        "tone": 3,
        "english": "claw",
        "variant": "爫"
    },
    "父": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "father",
        "variant": ""
    },
    "爻": {
        "zhuyin": "一ㄠˊ",
        "pinyin": "yáo",
        "tone": 2,
        "english": "lines on a trigram, diagrams for divination",
        "variant": ""
    },
    "爿": {
        "zhuyin": "ㄑ一ㄤˊ",
        "pinyin": "qiáng",
        "tone": 2,
        "english": "half of a tree trunk, bed",
        "variant": ""
    },
    "片": {
        "zhuyin": "ㄆ一ㄢˋ",
        "pinyin": "piàn",
        "tone": 4,
        "english": "slice",
        "variant": ""
    },
    "牙": {
        "zhuyin": "一ㄚˊ",
        "pinyin": "yá",
        "tone": 2,
        "english": "fang, tooth",
        "variant": ""
    },
    "牛": {
        "zhuyin": "ㄋ一ㄡˊ",
        "pinyin": "niú",
        "tone": 2,
        "english": "cow",
        "variant": "牜"
    },
    "犬": {
        "zhuyin": "ㄑㄩㄢˇ",
        "pinyin": "quǎn",
        "tone": 3,
        "english": "dog",
        "variant": "犭"
    },
    "玄": {
        "zhuyin": "ㄒㄩㄢˊ",
        "pinyin": "xuán",
        "tone": 2,
        "english": "profound, dark",
        "variant": ""
    },
    "玉": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù",
        "tone": 4,
        "english": "jade",
        "variant": "王"
    },
    "瓜": {
        "zhuyin": "ㄍㄨㄚ",
        "pinyin": "guā",
        "tone": 1,
        "english": "melon",
        "variant": ""
    },
    "瓦": {
        "zhuyin": "ㄨㄚˇ",
        "pinyin": "wǎ",
        "tone": 3,
        "english": "tile",
        "variant": ""
    },
    "甘": {
        "zhuyin": "ㄍㄢ",
        "pinyin": "gān",
        "tone": 1,
        "english": "sweet",
        "variant": ""
    },
    "生": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "shēng",
        "tone": 1,
        "english": "life, birth",
        "variant": ""
    },
    "用": {
        "zhuyin": "一ㄤˋ",
        "pinyin": "yòng",
        "tone": 4,
        "english": "use",
        "variant": ""
    },
    "田": {
        "zhuyin": "ㄊ一ㄢˊ",
        "pinyin": "tián",
        "tone": 2,
        "english": "field, rice paddy",
        "variant": ""
    },
    "疋": {
        "zhuyin": "ㄆ一ˇ",
        "pinyin": "pǐ",
        "tone": 3,
        "english": "bolt of cloth",
        "variant": ""
    },
    "疒": {
        "zhuyin": "ㄅ一ㄥˋ",
        "pinyin": "bìng",
        "tone": 4,
        "english": "illness",
        "variant": ""
    },
    "癶": {
        "zhuyin": "ㄅㄛ",
        "pinyin": "bō",
        "tone": 1,
        "english": "foot steps, back",
        "variant": ""
    },
    "白": {
        "zhuyin": "ㄅㄞˊ",
        "pinyin": "bái",
        "tone": 2,
        "english": "white",
        "variant": ""
    },
    "皮": {
        "zhuyin": "ㄆ一ˊ",
        "pinyin": "pí",
        "tone": 2,
        "english": "skin",
        "variant": ""
    },
    "皿": {
        "zhuyin": "ㄇ一ㄣˇ",
        "pinyin": "mǐn",
        "tone": 3,
        "english": "dish",
        "variant": ""
    },
    "目": {
        "zhuyin": "ㄇㄨˋ",
        "pinyin": "mù",
        "tone": 4,
        "english": "eye",
        "variant": ""
    },
    "矛": {
        "zhuyin": "ㄇㄠˊ",
        "pinyin": "máo",
        "tone": 2,
        "english": "spear",
        "variant": ""
    },
    "矢": {
        "zhuyin": "ㄕˇ",
        "pinyin": "shǐ",
        "tone": 3,
        "english": "arrow",
        "variant": ""
    },
    "石": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "stone, rock",
        "variant": ""
    },
    "示": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "spirit, sign",
        "variant": "礻"
    },
    "禸": {
        "zhuyin": "ㄖㄡˊ",
        "pinyin": "róu",
        "tone": 2,
        "english": "track",
        "variant": ""
    },
    "禾": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "hé",
        "tone": 2,
        "english": "grain",
        "variant": ""
    },
    "穴": {
        "zhuyin": "ㄒㄩㄝˋ",
        "pinyin": "xuè",
        "tone": 4,
        "english": "cave",
        "variant": ""
    },
    "立": {
        "zhuyin": "ㄌ一ˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "stand",
        "variant": ""
    },
    "竹": {
        "zhuyin": "ㄓㄨˊ",
        "pinyin": "zhú",
        "tone": 2,
        "english": "bamboo",
        "variant": ""
    },
    "米": {
        "zhuyin": "ㄇ一ˇ",
        "pinyin": "mǐ",
        "tone": 3,
        "english": "rice",
        "variant": ""
    },
    "糸": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "silk",
        "variant": "纟"
    },
    "缶": {
        "zhuyin": "ㄈㄡˇ",
        "pinyin": "fǒu",
        "tone": 3,
        "english": "jar, crock",
        "variant": ""
    },
    "网": {
        "zhuyin": "ㄨㄤˇ",
        "pinyin": "wǎng",
        "tone": 3,
        "english": "net",
        "variant": "罒"
    },
    "羊": {
        "zhuyin": "一ㄤˊ",
        "pinyin": "yáng",
        "tone": 2,
        "english": "sheep",
        "variant": ""
    },
    "羽": {
        "zhuyin": "ㄩˇ",
        "pinyin": "yǔ",
        "tone": 3,
        "english": "feathers, wings",
        "variant": ""
    },
    "老": {
        "zhuyin": "ㄌㄠˇ",
        "pinyin": "lǎo",
        "tone": 3,
        "english": "old",
        "variant": ""
    },
    "而": {
        "zhuyin": "ㄦˊ",
        "pinyin": "ér",
        "tone": 2,
        "english": "and, beard",
        "variant": ""
    },
    "耒": {
        "zhuyin": "ㄌㄟˇ",
        "pinyin": "lěi",
        "tone": 3,
        "english": "plow",
        "variant": ""
    },
    "耳": {
        "zhuyin": "ㄦˇ",
        "pinyin": "ěr",
        "tone": 3,
        "english": "ear",
        "variant": ""
    },
    "聿": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù",
        "tone": 4,
        "english": "brush",
        "variant": ""
    },
    "肉": {
        "zhuyin": "ㄖㄡˋ",
        "pinyin": "ròu",
        "tone": 4,
        "english": "meat",
        "variant": ""
    },
    "臣": {
        "zhuyin": "ㄔㄣˊ",
        "pinyin": "chén",
        "tone": 2,
        "english": "minister, bureaucrat",
        "variant": ""
    },
    "自": {
        "zhuyin": "ㄗˋ",
        "pinyin": "zì",
        "tone": 4,
        "english": "oneself, small nose",
        "variant": ""
    },
    "至": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "arrive, reach",
        "variant": ""
    },
    "臼": {
        "zhuyin": "ㄐ一ㄡˋ",
        "pinyin": "jiù",
        "tone": 4,
        "english": "mortar",
        "variant": ""
    },
    "舌": {
        "zhuyin": "ㄕㄜˊ",
        "pinyin": "shé",
        "tone": 2,
        "english": "tongue",
        "variant": ""
    },
    "舛": {
        "zhuyin": "ㄔㄨㄢˇ",
        "pinyin": "chuǎn",
        "tone": 3,
        "english": "contrary, oppose, discord",
        "variant": ""
    },
    "舟": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "zhōu",
        "tone": 1,
        "english": "boat",
        "variant": ""
    },
    "艮": {
        "zhuyin": "ㄍㄣˋ",
        "pinyin": "gèn",
        "tone": 4,
        "english": "stubborn, tough, trigram mountain, stopping",
        "variant": ""
    },
    "色": {
        "zhuyin": "ㄙㄜˋ",
        "pinyin": "sè",
        "tone": 4,
        "english": "color",
        "variant": ""
    },
    "艸": {
        "zhuyin": "ㄘㄠˇ",
        "pinyin": "cǎo",
        "tone": 3,
        "english": "grass",
        "variant": "艹"
    },
    "虍": {
        "zhuyin": "ㄏㄨˇ",
        "pinyin": "hǔ",
        "tone": 3,
        "english": "tiger",
        "variant": ""
    },
    "虫": {
        "zhuyin": "ㄔㄨㄥˊ",
        "pinyin": "chóng",
        "tone": 2,
        "english": "insect",
        "variant": ""
    },
    "血": {
        "zhuyin": "ㄒㄩㄝˇ",
        "pinyin": "xuě",
        "tone": 3,
        "english": "blood",
        "variant": ""
    },
    "行": {
        "zhuyin": "ㄒ一ㄥˊ",
        "pinyin": "xíng",
        "tone": 2,
        "english": "walk, go",
        "variant": ""
    },
    "衣": {
        "zhuyin": "一",
        "pinyin": "yī",
        "tone": 1,
        "english": "clothes, gown",
        "variant": "衤"
    },
    "西": {
        "zhuyin": "ㄒ一",
        "pinyin": "xī",
        "tone": 1,
        "english": "west",
        "variant": "覀"
    },
    "見": {
        "zhuyin": "ㄐ一ㄢˋ",
        "pinyin": "jiàn",
        "tone": 4,
        "english": "see",
        "variant": "见"
    },
    "角": {
        "zhuyin": "ㄐ一ㄠˇ",
        "pinyin": "jiǎo",
        "tone": 3,
        "english": "horn",
        "variant": ""
    },
    "言": {
        "zhuyin": "一ㄢˊ",
        "pinyin": "yán",
        "tone": 2,
        "english": "speech, words",
        "variant": ""
    },
    "谷": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "valley",
        "variant": ""
    },
    "豆": {
        "zhuyin": "ㄉㄡˋ",
        "pinyin": "dòu",
        "tone": 4,
        "english": "bean, flask",
        "variant": ""
    },
    "豕": {
        "zhuyin": "ㄕˇ",
        "pinyin": "shǐ",
        "tone": 3,
        "english": "pig",
        "variant": ""
    },
    "豸": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "badger, snake",
        "variant": ""
    },
    "貝": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "bèi",
        "tone": 4,
        "english": "shell",
        "variant": ""
    },
    "赤": {
        "zhuyin": "ㄔˋ",
        "pinyin": "chì",
        "tone": 4,
        "english": "red",
        "variant": ""
    },
    "走": {
        "zhuyin": "ㄗㄡˇ",
        "pinyin": "zǒu",
        "tone": 3,
        "english": "walk, run",
        "variant": ""
    },
    "足": {
        "zhuyin": "ㄗㄨˊ",
        "pinyin": "zú",
        "tone": 2,
        "english": "foot",
        "variant": ""
    },
    "身	": {
        "zhuyin": "ㄕㄣ",
        "pinyin": "shēn",
        "tone": 1,
        "english": "torso, body",
        "variant": ""
    },
    "車": {
        "zhuyin": "ㄔㄜ",
        "pinyin": "chē",
        "tone": 1,
        "english": "cart, car",
        "variant": "车"
    },
    "辛": {
        "zhuyin": "ㄒ一ㄣ",
        "pinyin": "xīn",
        "tone": 1,
        "english": "bitter",
        "variant": ""
    },
    "辰": {
        "zhuyin": "ㄔㄣˊ",
        "pinyin": "chén",
        "tone": 2,
        "english": "morning",
        "variant": ""
    },
    "辶": {
        "zhuyin": "ㄔㄨㄛˋ",
        "pinyin": "chuò",
        "tone": 4,
        "english": "walk",
        "variant": ""
    },
    "邑": {
        "zhuyin": "一ˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "city",
        "variant": "阝"
    },
    "酉": {
        "zhuyin": "一ㄡˇ",
        "pinyin": "yǒu",
        "tone": 3,
        "english": "wine",
        "variant": ""
    },
    "釆": {
        "zhuyin": "ㄅ一ㄢˋ",
        "pinyin": "biàn",
        "tone": 4,
        "english": "sift, distinguish",
        "variant": ""
    },
    "里": {
        "zhuyin": "ㄌ一ˇ",
        "pinyin": "lǐ",
        "tone": 3,
        "english": "village",
        "variant": ""
    },
    "金": {
        "zhuyin": "ㄐ一ㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "metal, gold",
        "variant": "钅"
    },
    "長": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "cháng",
        "tone": 2,
        "english": "long",
        "variant": "长"
    },
    "門": {
        "zhuyin": "ㄇㄣˊ",
        "pinyin": "mén",
        "tone": 2,
        "english": "gate",
        "variant": "门"
    },
    "阜": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "mound",
        "variant": "阝"
    },
    "隶": {
        "zhuyin": "ㄌ一ˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "slave, grab",
        "variant": ""
    },
    "隹": {
        "zhuyin": "ㄓㄨㄟ",
        "pinyin": "zhuī",
        "tone": 1,
        "english": "dove, short-tailed bird",
        "variant": ""
    },
    "雨": {
        "zhuyin": "ㄩˇ",
        "pinyin": "yǔ",
        "tone": 3,
        "english": "rain",
        "variant": ""
    },
    "青": {
        "zhuyin": "ㄑ一ㄥ",
        "pinyin": "qīng",
        "tone": 1,
        "english": "blue, green",
        "variant": ""
    },
    "非": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "fēi",
        "tone": 1,
        "english": "wrong",
        "variant": ""
    },
    "面": {
        "zhuyin": "ㄇ一ㄢˋ",
        "pinyin": "miàn",
        "tone": 4,
        "english": "face",
        "variant": ""
    },
    "革": {
        "zhuyin": "ㄍㄜˊ",
        "pinyin": "gé",
        "tone": 2,
        "english": "leather, hide",
        "variant": ""
    },
    "韋": {
        "zhuyin": "ㄨㄟˇ",
        "pinyin": "wěi",
        "tone": 3,
        "english": "soft leather, tanned leather, walk off",
        "variant": "韦"
    },
    "韭	": {
        "zhuyin": "ㄐ一ㄡˇ",
        "pinyin": "jiǔ",
        "tone": 3,
        "english": "leek",
        "variant": ""
    },
    "音": {
        "zhuyin": "一ㄣ",
        "pinyin": "yīn",
        "tone": 1,
        "english": "sound, tone",
        "variant": ""
    },
    "頁": {
        "zhuyin": "一ㄝˋ",
        "pinyin": "yè",
        "tone": 4,
        "english": "page, leaf",
        "variant": "页"
    },
    "風": {
        "zhuyin": "ㄈㄥ",
        "pinyin": "fēng",
        "tone": 1,
        "english": "wind",
        "variant": "风"
    },
    "飛": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "fēi",
        "tone": 1,
        "english": "fly",
        "variant": "飞"
    },
    "食": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "eat, food",
        "variant": "飠, 饣"
    },
    "首": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "shǒu",
        "tone": 3,
        "english": "head",
        "variant": ""
    },
    "香": {
        "zhuyin": "ㄒ一ㄤ",
        "pinyin": "xiāng",
        "tone": 1,
        "english": "fragrant",
        "variant": ""
    },
    "馬": {
        "zhuyin": "ㄇㄚˇ",
        "pinyin": "mǎ",
        "tone": 3,
        "english": "horse",
        "variant": "马"
    },
    "骨": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "bone",
        "variant": ""
    },
    "高	": {
        "zhuyin": "ㄍㄠ",
        "pinyin": "gāo",
        "tone": 1,
        "english": "high, tall",
        "variant": ""
    },
    "髟	": {
        "zhuyin": "ㄅ一ㄠ",
        "pinyin": "biāo",
        "tone": 1,
        "english": "long hair",
        "variant": ""
    },
    "鬥": {
        "zhuyin": "ㄉㄡˋ",
        "pinyin": "dòu",
        "tone": 4,
        "english": "fight",
        "variant": "斗"
    },
    "鬯": {
        "zhuyin": "ㄔㄤˋ",
        "pinyin": "chàng",
        "tone": 4,
        "english": "sacrificial wine, mixed wine",
        "variant": ""
    },
    "鬲": {
        "zhuyin": "ㄌ一ˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "cauldron",
        "variant": ""
    },
    "鬼": {
        "zhuyin": "ㄍㄨㄟ",
        "pinyin": "guǐ",
        "tone": 1,
        "english": "ghost",
        "variant": ""
    },
    "魚": {
        "zhuyin": "ㄩˊ",
        "pinyin": "yú",
        "tone": 2,
        "english": "fish",
        "variant": "鱼"
    },
    "鳥": {
        "zhuyin": "ㄋ一ㄠˇ",
        "pinyin": "niǎo",
        "tone": 3,
        "english": "bird",
        "variant": "鸟"
    },
    "鹵": {
        "zhuyin": "ㄌㄨˇ",
        "pinyin": "lǔ",
        "tone": 3,
        "english": "salty",
        "variant": "卤"
    },
    "鹿": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "lù",
        "tone": 4,
        "english": "deer",
        "variant": ""
    },
    "麥": {
        "zhuyin": "ㄇㄞˋ",
        "pinyin": "mài",
        "tone": 4,
        "english": "wheat",
        "variant": "麦"
    },
    "麻": {
        "zhuyin": "ㄇㄚˊ",
        "pinyin": "má",
        "tone": 2,
        "english": "hemp",
        "variant": ""
    },
    "黄": {
        "zhuyin": "ㄏㄨㄤˊ",
        "pinyin": "huáng",
        "tone": 2,
        "english": "yellow",
        "variant": ""
    },
    "黍": {
        "zhuyin": "ㄕㄨˇ",
        "pinyin": "shǔ",
        "tone": 3,
        "english": "millet (an ancient seed cooked like a grain)",
        "variant": ""
    },
    "黑": {
        "zhuyin": "ㄏㄟ",
        "pinyin": "hēi",
        "tone": 1,
        "english": "black",
        "variant": ""
    },
    "黹": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 3,
        "english": "embroidery",
        "variant": ""
    },
    "黽": {
        "zhuyin": "ㄇ一ㄣˇ",
        "pinyin": "mǐn",
        "tone": 3,
        "english": "frog, toad",
        "variant": "黾"
    },
    "鼎": {
        "zhuyin": "ㄉ一ㄥˇ",
        "pinyin": "dǐng",
        "tone": 3,
        "english": "tripod",
        "variant": ""
    },
    "鼓": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "drum",
        "variant": ""
    },
    "鼠	": {
        "zhuyin": "ㄕㄨˇ",
        "pinyin": "shǔ",
        "tone": 3,
        "english": "rat, mouse",
        "variant": ""
    },
    "鼻": {
        "zhuyin": "ㄅ一ˊ",
        "pinyin": "bí",
        "tone": 2,
        "english": "big nose",
        "variant": ""
    },
    "齊": {
        "zhuyin": "ㄑ一ˊ",
        "pinyin": "qí",
        "tone": 2,
        "english": "even, line up",
        "variant": "齐"
    },
    "齒": {
        "zhuyin": "ㄔ",
        "pinyin": "chǐ",
        "tone": 1,
        "english": "tooth, teeth",
        "variant": "齿"
    },
    "龍": {
        "zhuyin": "ㄌㄨㄥˊ",
        "pinyin": "lóng",
        "tone": 2,
        "english": "dragon",
        "variant": "龙"
    },
    "龜": {
        "zhuyin": "ㄍㄨㄟ",
        "pinyin": "guī",
        "tone": 1,
        "english": "turtle, tortoise",
        "variant": "龟"
    },
    "龠": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "yuè",
        "tone": 4,
        "english": "flute",
        "variant": "",
    }
};
const HSK1words = {
    //500 words
    "愛": {
        "zhuyin": "ㄞˋ",
        "pinyin": "ài",
        "level": "HSK1",
        "english": "love"
    },
    "愛好": {
        "zhuyin": "ㄞˋ ㄏㄠˇ",
        "pinyin": "ài hào",
        "level": "HSK1",
        "english": "hobby"
    },
    "八": {
        "zhuyin": "ㄅㄚ",
        "pinyin": "bā",
        "level": "HSK1",
        "english": "eight"
    },
    "爸爸": {
        "zhuyin": "ㄅㄚˋ ㄅㄚˋ",
        "pinyin": "bà ba",
        "level": "HSK1",
        "english": "(informal) father"
    },
    "吧": {
        "zhuyin": "ㄅㄚ˙",
        "pinyin": "ba",
        "level": "HSK1",
        "english": "(interjection p.)"
    },
    "白": {
        "zhuyin": "ㄅㄞˊ",
        "pinyin": "bái",
        "level": "HSK1",
        "english": "white"
    },
    "白天": {
        "zhuyin": "ㄅㄞˊ ㄊㄧㄢ",
        "pinyin": "bái tiān",
        "level": "HSK1",
        "english": "day, daytime"
    },
    "百": {
        "zhuyin": "ㄅㄞˇ ",
        "pinyin": "bǎi",
        "level": "HSK1",
        "english": "hundred"
    },
    "班": {
        "zhuyin": "ㄅㄢ",
        "pinyin": "bān",
        "level": "HSK1",
        "english": "class"
    },
    "半": {
        "zhuyin": "ㄅㄢˋ",
        "pinyin": "bàn",
        "level": "HSK1",
        "english": "half"
    },
    "半年": {
        "zhuyin": "ㄅㄢˋ ㄋㄧㄢˊ",
        "pinyin": "bàn nián",
        "level": "HSK1",
        "english": "half a year"
    },
    "半天": {
        "zhuyin": "ㄅㄢˋ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "half day"
    },
    "幫": {
        "zhuyin": "ㄅㄤ",
        "pinyin": "bāng",
        "level": "HSK1",
        "english": "help"
    },
    "幫忙": {
        "zhuyin": "ㄅㄤ ㄇㄤˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "help"
    },
    "包": {
        "zhuyin": "ㄅㄠ",
        "pinyin": "",
        "level": "HSK1",
        "english": "package"
    },
    "包子": {
        "zhuyin": "ㄅㄠ ㄗˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "bun"
    },
    "杯子": {
        "zhuyin": "ㄅㄟ ㄗˇ",
        "pinyin": "bēi zi",
        "level": "HSK1",
        "english": "cup, glass"
    },
    "北": {
        "zhuyin": "ㄅㄟˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "north"
    },
    "北邊": {
        "zhuyin": "ㄅㄟˇ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "north side"
    },
    "北京": {
        "zhuyin": "ㄅㄟˇ ㄐㄧㄥ",
        "pinyin": "Běi jīng",
        "level": "HSK1",
        "english": "Beijing"
    },
    "本": {
        "zhuyin": "ㄅㄣˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "(measure word for books or volumes)"
    },
    "本子": {
        "zhuyin": "ㄅㄣˇ ㄗˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "book"
    },
    "比": {
        "zhuyin": "ㄅㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "(comparison p.)"
    },
    "别": {
        "zhuyin": "ㄅㄧㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "don't"
    },
    // "副": {
    //     "zhuyin": "ㄈㄨˋ",
    //     "pinyin": "",
    //     "level": "HSK1",
    //     "english": "don't"
    // },
    "别的": {
        "zhuyin": "ㄅㄧㄝˊ ㄉㄜ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "other"
    },
    "别人": {
        "zhuyin": "ㄅㄧㄝˊ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "other people"
    },
    "病": {
        "zhuyin": "ㄅㄧㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "disease"
    },
    "病人": {
        "zhuyin": " ㄅㄧㄥˋ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "patient"
    },
    "不大": {
        "zhuyin": "ㄅㄨˋ ㄉㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "not big"
    },
    "不對": {
        "zhuyin": "ㄅㄨˋ ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "wrong, not correct"
    },
    "不客氣": {
        "zhuyin": "ㄅㄨˋ ㄎㄜˋ ㄑㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "you're welcome"
    },
    "不用": {
        "zhuyin": "ㄅㄨˋ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "no need to"
    },
    "不": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "no"
    },
    "菜": {
        "zhuyin": "ㄘㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "veggie, greens, dish(food)"
    },
    "茶": {
        "zhuyin": "ㄔㄚˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "tea"
    },
    "差": {
        "zhuyin": "ㄔㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "differ from, bad, short of"
    },
    "常": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "often"
    },
    "常常": {
        "zhuyin": "ㄔㄤˊ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "often"
    },
    "唱": {
        "zhuyin": "ㄔㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sing"
    },
    "唱歌": {
        "zhuyin": "ㄔㄤˋ ㄍㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sing a song"
    },
    "車": {
        "zhuyin": "ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "car"
    },
    "車票": {
        "zhuyin": "ㄔㄜ ㄆㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ticket"
    },
    "車上": {
        "zhuyin": "ㄔㄜ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "in the car"
    },
    "車站": {
        "zhuyin": "ㄔㄜ ㄓㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "station"
    },
    "吃": {
        "zhuyin": "ㄔ",
        "pinyin": "",
        "level": "HSK1",
        "english": "eat"
    },
    "吃飯": {
        "zhuyin": "ㄔ ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "have a meal"
    },
    "出": {
        "zhuyin": "ㄔㄨ",
        "pinyin": "",
        "level": "HSK1",
        "english": "out"
    },
    "出來": {
        "zhuyin": "ㄔㄨ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "come"
    },
    "出去": {
        "zhuyin": "ㄔㄨ ㄑㄩˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go out"
    },
    "穿": {
        "zhuyin": "ㄔㄨㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "wear"
    },
    "床": {
        "zhuyin": "ㄔㄨㄤˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "bed"
    },
    "次": {
        "zhuyin": "ㄘˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "(measure word for times, frequency)"
    },
    "從": {
        "zhuyin": "ㄘㄨㄥˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "from"
    },
    "錯": {
        "zhuyin": "ㄘㄨㄛˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "wrong"
    },
    "打": {
        "zhuyin": "ㄉㄚˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hit take"
    },
    "打車": {
        "zhuyin": "ㄉㄚˇ ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "take a taxi"
    },
    "打電話": {
        "zhuyin": "ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "make a phone call"
    },
    "打開": {
        "zhuyin": "ㄉㄚˇ ㄎㄞ",
        "pinyin": "",
        "level": "HSK1",
        "english": "turn on"
    },
    "打球": {
        "zhuyin": "ㄉㄚˇ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "play ball"
    },
    "大": {
        "zhuyin": "ㄉㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "big"
    },
    "大學": {
        "zhuyin": "ㄉㄚˋ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "university"
    },
    "大學生": {
        "zhuyin": "ㄉㄚˋ ㄒㄩㄝˊ ㄕㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "university student"
    },
    "到": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "reach"
    },
    "得到": {
        "zhuyin": "ㄉㄜˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "get"
    },
    "地": {
        "zhuyin": "ㄉㄜ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "-ly, (linking p.)"
    },
    "的": {
        "zhuyin": "ㄉㄜ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "of, 's (possesssive p.)"
    },
    "等": {
        "zhuyin": "ㄉㄥˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "wait"
    },
    "地": {
        "zhuyin": "ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ground"
    },
    "地點": {
        "zhuyin": "ㄉㄧˋ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "location"
    },
    "地方": {
        "zhuyin": "ㄉㄧˋ ㄈㄤ",
        "pinyin": "",
        "level": "HSK1",
        "english": "local"
    },
    "地上": {
        "zhuyin": "ㄉㄧˋ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "on the ground"
    },
    "地圖": {
        "zhuyin": "ㄉㄧˋ ㄊㄨˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "map"
    },
    "弟弟": {
        "zhuyin": "ㄉㄧˋ ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "younger brother"
    },
    "第": {
        "zhuyin": "ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "added to numbers to make 'first, second, third...'"
    },
    "點": {
        "zhuyin": "ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "spot"
    },
    "電": {
        "zhuyin": "ㄉㄧㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "electricity"
    },
    "電話": {
        "zhuyin": "ㄉㄧㄢˋ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "phone"
    },

    "電腦": {
        "zhuyin": "ㄉㄧㄢˋ ㄋㄠˇ",
        "pinyin": "diàn nǎo",
        "level": "HSK1",
        "english": "computer"
    },
    "電視": {
        "zhuyin": "ㄉㄧㄢˋ ㄕˋ",
        "pinyin": "diàn shì",
        "level": "HSK1",
        "english": "tv"
    },
    "電影": {
        "zhuyin": "ㄉㄧㄢˋ ㄧㄥˇ",
        "pinyin": "diàn yǐng",
        "level": "HSK1",
        "english": "movie, film"
    },
    "電影院": {
        "zhuyin": "ㄉㄧㄢˋ ㄧㄥˇ ㄩㄢˋ",
        "pinyin": "diàn yǐng",
        "level": "HSK1",
        "english": "movie theatre, cinema"
    },
    "東": {
        "zhuyin": "ㄉㄨㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "east"
    },
    "東邊": {
        "zhuyin": "ㄉㄨㄥ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "east side"
    },
    "東西": {
        "zhuyin": "ㄉㄨㄥ ㄒㄧ",
        "pinyin": "dōng xi",
        "level": "HSK1",
        "english": "thing, stuff"
    },
    "動": {
        "zhuyin": "ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "move"
    },
    "動作": {
        "zhuyin": "ㄉㄨㄥˋ ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "action"
    },
    "都": {
        "zhuyin": "ㄉㄡ",
        "pinyin": "",
        "level": "HSK1",
        "english": "all"
    },
    "讀": {
        "zhuyin": "ㄉㄨˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "read"
    },
    "讀書": {
        "zhuyin": "ㄉㄨˊ ㄕㄨ",
        "pinyin": "",
        "level": "HSK1",
        "english": "reading, study"
    },
    "對": {
        "zhuyin": "ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "right"
    },
    "對不起": {
        "zhuyin": "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "I'm sorry"
    },

    "多少": {
        "zhuyin": "ㄉㄨㄛ ㄕㄠˇ",
        "pinyin": "duō shao",
        "level": "HSK1",
        "english": "how much, how many"
    },
    "餓": {
        "zhuyin": "ㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hungry"
    },
    "兒子": {
        "zhuyin": "ㄦˊ ㄗˇ",
        "pinyin": "ér zi",
        "level": "HSK1",
        "english": "son"
    },
    "飯": {
        "zhuyin": "ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "rice, meal"
    },
    "飯店": {
        "zhuyin": "ㄈㄢˋ ㄉㄧㄢˋ",
        "pinyin": "fàn diàn",
        "level": "HSK1",
        "english": "restaurant, hotel"
    },
    "飯館": {
        "zhuyin": "ㄈㄢˋ ㄍㄨㄢˇ",
        "pinyin": "fàn guǎn",
        "level": "HSK1",
        "english": "restaurant"
    },
    "房間": {
        "zhuyin": "ㄈㄤˊ ㄐㄧㄢ",
        "pinyin": "fáng jiān",
        "level": "HSK1",
        "english": "room"
    },
    "房子": {
        "zhuyin": " ㄈㄤˊ ㄗˇ",
        "pinyin": "fáng zi",
        "level": "HSK1",
        "english": "house, building"
    },
    "放": {
        "zhuyin": " ㄈㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "discharge, release"
    },
    "放假": {
        "zhuyin": "ㄈㄤˋ ㄐㄧㄚˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "holiday, have a holiday"
    },
    "放學": {
        "zhuyin": "ㄈㄤˋ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "off school"
    },
    "飛": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "",
        "level": "HSK1",
        "english": "fly"
    },

    "飛機": {
        "zhuyin": "ㄈㄟ ㄐㄧ ",
        "pinyin": "fēi jī",
        "level": "HSK1",
        "english": "airplane"
    },
    "非常": {
        "zhuyin": "ㄈㄟ ㄔㄤˊ",
        "pinyin": "fēi cháng",
        "level": "HSK1",
        "english": "extraordinary, unusual, exceptional, very"
    },
    "分": {
        "zhuyin": "ㄈㄣ",
        "pinyin": "fēn",
        "level": "HSK1",
        "english": "minute, point, part, (measure word)"
    },
    "分鐘": {
        "zhuyin": "ㄈㄣ ㄓㄨㄥ",
        "pinyin": "fēn zhōng",
        "level": "HSK1",
        "english": "minute"
    },
    "風": {
        "zhuyin": "ㄈㄥ",
        "pinyin": "fēng",
        "level": "HSK1",
        "english": "wind",
    },
    "干": {
        "zhuyin": "ㄍㄢ",
        "pinyin": "gān",
        "level": "HSK1",
        "english": "dry, shield",
    },
    "乾淨": {
        "zhuyin": "ㄍㄢ ㄐㄧㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "clean, neat"
    },
    "乾脆": {
        "zhuyin": "ㄍㄢ ㄘㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "straightforward, clear cut, blunt"
    },
    "幹什麼": {
        "zhuyin": "ㄍㄢˋ ㄕㄣˊ ㄇㄜ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "what to do"
    },
    "高	": {
        "zhuyin": "ㄍㄠ",
        "pinyin": "gāo",
        "level": "HSK1",
        "english": "high, tall",
    },
    "高興": {
        "zhuyin": "ㄍㄠ ㄒㄧㄥ",
        "pinyin": "gāo xìng",
        "level": "HSK1",
        "english": "happy, glad"
    },
    "告訴": {
        "zhuyin": "ㄍㄠˋ ㄙㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "tell"
    },
    "哥哥": {
        "zhuyin": "ㄍㄜ ㄍㄜ",
        "pinyin": "gē ge",
        "level": "HSK1",
        "english": "older brother"
    },
    "歌": {
        "zhuyin": "ㄍㄜ",
        "pinyin": "gē",
        "level": "HSK1",
        "english": "song"
    },
    "個": {
        "zhuyin": "ㄍㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "individual"
    },
    "給": {
        "zhuyin": "ㄍㄟˇ",
        "pinyin": "gěi",
        "level": "HSK1",
        "english": "give, to, for",
    },
    "跟": {
        "zhuyin": "ㄍㄣ",
        "pinyin": "gēn",
        "level": "HSK1",
        "english": "with, to follow",
    },
    "工人": {
        "zhuyin": "ㄍㄨㄥ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "worker"
    },
    "工作": {
        "zhuyin": "ㄍㄨㄥ ㄗㄨㄛˋ",
        "pinyin": "gōng zuò",
        "level": "HSK1",
        "english": "to work, job, work, task"
    },
    "關": {
        "zhuyin": "ㄍㄨㄢ",
        "pinyin": "guān",
        "level": "HSK1",
        "english": "close, shut",
    },
    "關上": {
        "zhuyin": "ㄍㄨㄢ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "close, shut to, turn off",
    },
    "貴": {
        "zhuyin": "ㄍㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "noble"
    },
    "國": {
        "zhuyin": "ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "country, state, nation"
    },
    "國家": {
        "zhuyin": "ㄍㄨㄛˊ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK1",
        "english": "home country"
    },
    "外國": {
        "zhuyin": "ㄨㄞˋ ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "foreign, oversea, abroad"
    },
    "過": {
        "zhuyin": "ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "pass, surpass, cross",
    },
    "還": {
        "zhuyin": "ㄏㄞˊ",
        "pinyin": "hái",
        "level": "HSK1",
        "english": "still, yet",
    },
    "還是": {
        "zhuyin": "ㄏㄞˊ ㄕˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "still"
    },
    "還有": {
        "zhuyin": "ㄏㄞˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "also, in addition, besides"
    },
    "孩子": {
        "zhuyin": "ㄏㄞˊ ㄗˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "children",
    },
    "漢語": {
        "zhuyin": "ㄏㄢˋ ㄩˇ",
        "pinyin": "hàn yǔ",
        "level": "HSK1",
        "english": "Chinese language"
    },
    "漢字": {
        "zhuyin": "ㄏㄢˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Chinese character"
    },
    "好": {
        "zhuyin": "ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "good"
    },
    "好吃": {
        "zhuyin": "ㄏㄠˇ ㄔ",
        "pinyin": "hǎo chī",
        "level": "HSK1",
        "english": "delicious, yummy"
    },
    "好看": {
        "zhuyin": "ㄏㄠˇ ㄎㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "good looking"
    },
    "好聽": {
        "zhuyin": "ㄏㄠˇ ㄊㄧㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "pleasant to hear"
    },
    "好玩兒": {
        "zhuyin": "ㄏㄠˇ ㄨㄢˊ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "fun, interesting"
    },

    "號": {
        "zhuyin": "ㄏㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "number/date"
    },
    "喝": {
        "zhuyin": "ㄏㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "drink"
    },
    "和": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "hé",
        "level": "HSK1",
        "english": "and",
    },
    "很": {
        "zhuyin": "ㄏㄣˇ",
        "pinyin": "hěn",
        "english": "very",
    },
    "後": {
        "zhuyin": "ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "back, behind, after, later"
    },
    "後邊": {
        "zhuyin": "ㄏㄡˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "behind, back"
    },
    "後面": {
        "zhuyin": "ㄏㄡˋ ㄇㄧㄢˋ",
        "pinyin": "hòu mian",
        "level": "HSK1",
        "english": "rear face, back, behind"
    },
    "後天": {
        "zhuyin": "ㄏㄡˋ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "day after tomorrow"
    },
    "花": {
        "zhuyin": "ㄏㄨㄚ",
        "pinyin": "",
        "level": "HSK1",
        "english": "flower"
    },
    "話": {
        "zhuyin": "ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "word, words"
    },
    "壞": {
        "zhuyin": "ㄏㄨㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "bad"
    },
    "還": {
        "zhuyin": "ㄏㄨㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "return, pay back"
    },
    "回": {
        "zhuyin": "ㄏㄨㄟˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go back, return"
    },
    "回答": {
        "zhuyin": "ㄏㄨㄟˊ ㄉㄚˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "answer"
    },
    "回到": {
        "zhuyin": "ㄏㄨㄟˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "back to"
    },
    "回家": {
        "zhuyin": "ㄏㄨㄟˊ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go home, return home"
    },
    "回來": {
        "zhuyin": "ㄏㄨㄟˊ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "come back, return"
    },
    "會": {
        "zhuyin": "ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "can, be able to"
    },
    "火車": {
        "zhuyin": "ㄏㄨㄛˇ ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "train"
    },
    "機場": {
        "zhuyin": "ㄐㄧ ㄔㄤˊ",
        "pinyin": "jī chǎng",
        "level": "HSK1",
        "english": "airport"
    },
    "機票": {
        "zhuyin": "ㄐㄧ ㄆㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "air ticket, plane ticket"
    },
    "雞蛋": {
        "zhuyin": "ㄐㄧ ㄉㄢˋ",
        "pinyin": "jīdàn",
        "level": "HSK1",
        "english": "egg, hen's egg"
    },
    "幾": {
        "zhuyin": "ㄐㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "several, how many"
    },
    "記": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "remember"
    },
    "記得": {
        "zhuyin": "ㄐㄧˋ ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "remember"
    },
    "記住": {
        "zhuyin": "ㄐㄧˋ ㄓㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "remember, keep in mind"
    },
    "家": {
        "zhuyin": "ㄐ一ㄚ",
        "pinyin": "jiā",
        "level": "HSK1",
        "english": "home, family",
    },
    "家裡": {
        "zhuyin": "ㄐ一ㄚ ㄌㄧˇ",
        "pinyin": "jiā",
        "level": "HSK1",
        "english": "in the home",
    },
    "家人": {
        "zhuyin": "ㄐㄧㄚ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "family"
    },
    "間": {
        "zhuyin": "ㄐㄧㄢ",
        "pinyin": "jiān",
        "level": "HSK1",
        "english": "between, among, room, space, (measure word for rooms)",
    },
    "見": {
        "zhuyin": "ㄐ一ㄢˋ",
        "pinyin": "jiàn",
        "level": "HSK1",
        "english": "see",
    },
    "見面": {
        "zhuyin": "ㄐㄧㄢˋ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "meet"
    },
    "教": {
        "zhuyin": "ㄐㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "teach"
    },
    "叫": {
        "zhuyin": "ㄐㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "call, be called"
    },
    "教學樓": {
        "zhuyin": "ㄐㄧㄠˋ ㄒㄩㄝˊ ㄌㄡˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "teaching building"
    },
    "姐姐": {
        "zhuyin": "ㄐㄧㄝˇ ㄐㄧㄝˇ",
        "pinyin": "jiě jie",
        "level": "HSK1",
        "english": "older sister"
    },
    "介紹": {
        "zhuyin": "ㄐㄧㄝˋ ㄕㄠˋ",
        "pinyin": "jiè shào",
        "level": "HSK1",
        "english": "to present, introduce, recommend, suggest"
    },
    "今年": {
        "zhuyin": "ㄐㄧㄣ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "this year"
    },
    "今天": {
        "zhuyin": "ㄐㄧㄣ ㄊㄧㄢ",
        "pinyin": "jīn tiān",
        "level": "HSK1",
        "english": "today, now"
    },
    "進": {
        "zhuyin": "ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "enter"
    },
    "進來": {
        "zhuyin": "ㄐㄧㄣˋ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "come in"
    },
    "進去": {
        "zhuyin": "ㄐㄧㄣˋ ㄑㄩˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go in"
    },
    "九": {
        "zhuyin": "ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "nine"
    },
    "就": {
        "zhuyin": "ㄐ一ㄡˋ",
        "pinyin": "jiù",
        "level": "HSK1",
        "english": "as soon as, right away, then",
    },
    "覺得": {
        "zhuyin": "ㄐㄩㄝˊ ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "think"
    },
    "開": {
        "zhuyin": "ㄎㄞ",
        "pinyin": "kāi",
        "level": "HSK1",
        "english": "to open, to start",
    },
    "開車": {
        "zhuyin": "ㄎㄞ ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "drive, drive a car"
    },
    "開會": {
        "zhuyin": "ㄎㄞ ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "have a meeting"
    },
    "開玩笑": {
        "zhuyin": "ㄎㄞ ㄨㄢˊ ㄒㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "make fun of"
    },
    "看": {
        "zhuyin": "ㄎㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "see"
    },
    "看病": {
        "zhuyin": "ㄎㄢˋ ㄅㄧㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "see a doctor"
    },
    "看到": {
        "zhuyin": "ㄎㄢˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "can see (thing)"
    },
    "看見": {
        "zhuyin": "ㄎㄢˋ ㄐㄧㄢˋ",
        "pinyin": "kàn jiàn",
        "level": "HSK1",
        "english": "seeing, to catch sight of"
    },
    "考": {
        "zhuyin": "ㄎㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "test, examine"
    },
    "考試": {
        "zhuyin": "ㄎㄠˇ ㄕˋ",
        "pinyin": "kǎo shì",
        "level": "HSK1",
        "english": "exam"
    },
    "渴": {
        "zhuyin": "ㄎㄜˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "thirsty"
    },
    "課": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "course"
    },
    "課本": {
        "zhuyin": "ㄎㄜˋ ㄅㄣˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "textbook"
    },
    // 200/500 done
    "課文": {
        "zhuyin": "ㄎㄜˋ ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "course text"
    },
    "口": {
        "zhuyin": "ㄎㄡˇ",
        "pinyin": "kǒu",
        "level": "HSK1",
        "english": "mouth, opening",
    },
    "塊": {
        "zhuyin": "ㄎㄨㄞˋ",
        "pinyin": "kuài",
        "level": "HSK1",
        "english": "block, lump, piece"
    },
    "快": {
        "zhuyin": "ㄎㄨㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "fast"
    },
    "來": {
        "zhuyin": "ㄌㄞˊ",
        "pinyin": "lái",
        "level": "HSK1",
        "english": "come",
    },
    "來到": {
        "zhuyin": "ㄌㄞˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "come, arrive"
    },
    "老": {
        "zhuyin": "ㄌㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "old (aged)"
    },
    "老人": {
        "zhuyin": "ㄌㄠˇ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "old person, old folks"
    },
    "老師": {
        "zhuyin": "ㄌㄠˇ ㄕ",
        "pinyin": "lǎo shī",
        "level": "HSK1",
        "english": "teacher"
    },
    "了": {
        "zhuyin": "ㄌㄜ˙",
        "pinyin": "le",
        "level": "HSK1",
        "english": "-ed, (completed action p.)",
    },
    "累": {
        "zhuyin": "ㄌㄟˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "tired"
    },
    "冷": {
        "zhuyin": "ㄌㄥˇ",
        "pinyin": "lěng",
        "level": "HSK1",
        "english": "cold",
    },
    "裡": {
        "zhuyin": "ㄌ一ˇ",
        "pinyin": "lǐ",
        "level": "HSK1",
        "english": "in, inside",
    },
    "裡邊": {
        "zhuyin": "ㄌㄧˇ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "inside"
    },
    "兩": {
        "zhuyin": "ㄌㄧㄤˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "two, both"
    },
    "零": {
        "zhuyin": "ㄌㄧㄥˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "zero"
    },
    "六": {
        "zhuyin": "ㄌㄧㄡˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "six"
    },
    "樓": {
        "zhuyin": "ㄌㄡˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "floor"
    },
    "樓上": {
        "zhuyin": "ㄌㄡˊ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "upstairs"
    },
    "樓下": {
        "zhuyin": "ㄌㄡˊ ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "downstairs"
    },
    "路": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "road"
    },
    "路口": {
        "zhuyin": "ㄌㄨˋ ㄎㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "intersection, crossing"
    },
    "路上": {
        "zhuyin": "ㄌㄨˋ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "on the road"
    },
    "媽媽": {
        "zhuyin": "ㄇㄚ ㄇㄚ",
        "pinyin": "mā ma",
        "level": "HSK1",
        "english": "(informal) mother"
    },
    "馬路": {
        "zhuyin": "ㄇㄚˇ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "road"
    },
    "馬上": {
        "zhuyin": "ㄇㄚˇ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "at once, right away, right off, immediately"
    },
    "嗎": {
        "zhuyin": "ㄇㄚ˙",
        "pinyin": "ma",
        "level": "HSK1",
        "english": "yes or no ?",
    },
    "買": {
        "zhuyin": "ㄇㄞˇ",
        "pinyin": "mǎi",
        "level": "HSK1",
        "english": "buy"
    },
    "慢": {
        "zhuyin": "ㄇㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "slow"
    },
    "忙": {
        "zhuyin": "ㄇㄤˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "busy"
    },
    "毛": {
        "zhuyin": "ㄇㄠˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "fur, a fractional unit of money in China(10分)"
    },
    "沒": {
        "zhuyin": "ㄇㄟˊ",
        "pinyin": "méi",
        "level": "HSK1",
        "english": "have not, no",
    },
    "沒關係": {
        "zhuyin": "ㄇㄟˊ ㄍㄨㄢ ㄒㄧˋ",
        "pinyin": "méi guān xi",
        "level": "HSK1",
        "english": "it doesn't matter(no problem)",
    },
    "沒什麼": {
        "zhuyin": "ㄇㄟˊ ㄕˊ ㄇㄜ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "It’s nothing"
    },
    "沒事兒": {
        "zhuyin": "ㄇㄟˊ ㄕˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "it's okay"
    },
    "沒有": {
        "zhuyin": "ㄇㄟˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "have not; don't have"
    },
    "妹妹": {
        "zhuyin": "ㄇㄟˋ ㄇㄟˋ",
        "pinyin": "mèi mei",
        "level": "HSK1",
        "english": "younger sister"
    },
    "門": {
        "zhuyin": "ㄇㄣˊ",
        "pinyin": "mén",
        "level": "HSK1",
        "english": "gate",
    },
    "門口": {
        "zhuyin": "ㄇㄣˊ ㄎㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "doorway, area by entrance"
    },
    "門票": {
        "zhuyin": "ㄇㄣˊ ㄆㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "tickets, entry pass"
    },
    "們": {
        "zhuyin": "ㄇㄣ˙",
        "pinyin": "men",
        "level": "HSK1",
        "english": "(plural p.)",
    },
    "米飯": {
        "zhuyin": "ㄇㄧˇ ㄈㄢˋ",
        "pinyin": "mǐ fàn",
        "level": "HSK1",
        "english": "steamed rice"
    },
    "麵包": {
        "zhuyin": "ㄇㄧㄢˋ ㄅㄠ",
        "pinyin": "",
        "level": "HSK1",
        "english": "bread"
    },
    "麵條兒": {
        "zhuyin": "ㄇㄧㄢˋ ㄊㄧㄠˊ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "noodles"
    },
    "名字": {
        "zhuyin": "ㄇㄧㄥˊ ㄗˋ",
        "pinyin": "míng zi",
        "level": "HSK1",
        "english": "name"
    },
    "明白": {
        "zhuyin": "ㄇㄧㄥˊ ㄅㄞˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "clear"
    },
    "明年": {
        "zhuyin": "ㄇㄧㄥˊ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "next year"
    },
    "明天": {
        "zhuyin": "ㄇㄧㄥˊ ㄊㄧㄢ",
        "pinyin": "míng tiān",
        "level": "HSK1",
        "english": "tomorrow"
    },
    "拿": {
        "zhuyin": "ㄋㄚˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "take"
    },
    "哪": {
        "zhuyin": "ㄋㄚˇ",
        "pinyin": "nǎ",
        "level": "HSK1",
        "english": "which",
    },
    "哪裡": {
        "zhuyin": "ㄋㄚˇ ㄌㄧˇ",
        "pinyin": "nǎlǐ",
        "level": "HSK1",
        "english": "where, wherever"
    },

    "哪兒": {
        "zhuyin": "ㄋㄚˇ ㄦˊ",
        "pinyin": "nǎ ér",
        "level": "HSK1",
        "english": "where?, wherever, anywhere"
    },
    "哪些": {
        "zhuyin": "ㄋㄚˇ ㄒㄧㄝ",
        "pinyin": "",
        "level": "HSK1",
        "english": "which"
    },
    "那": {
        "zhuyin": "ㄋㄚˋ",
        "pinyin": "nà",
        "level": "HSK1",
        "english": "that",
    },
    "那邊": {
        "zhuyin": "ㄋㄚˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "that side, there"
    },
    "那裡": {
        "zhuyin": "ㄋㄚˋ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "that place, that area, there"
    },
    "那兒": {
        "zhuyin": "ㄋㄚˋㄦ",
        "pinyin": "",
        "level": "HSK1",
        "english": "there"
    },
    "那些": {
        "zhuyin": "ㄋㄚˋ ㄒㄧㄝ",
        "pinyin": "",
        "level": "HSK1",
        "english": "those"
    },
    // 258/500
    "奶": {
        "zhuyin": "ㄋㄞˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "milk"
    },
    "奶奶": {
        "zhuyin": "ㄋㄞˇ ㄋㄞˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "grandma"
    },
    "男": {
        "zhuyin": "ㄋㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "man"
    },
    "男孩兒": {
        "zhuyin": "ㄋㄢˊ ㄏㄞˊ ㄦ",
        "pinyin": "",
        "level": "HSK1",
        "english": "boy"
    },
    "男朋友": {
        "zhuyin": "ㄋㄢˊ ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "boyfriend"
    },
    "男人": {
        "zhuyin": "ㄋㄢˊ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "man, guy"
    },
    "男生": {
        "zhuyin": "ㄋㄢˊ ㄕㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "boy"
    },
    "南": {
        "zhuyin": "ㄋㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "south"
    },
    "南邊": {
        "zhuyin": "ㄋㄢˊ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "south, south side"
    },
    "難": {
        "zhuyin": "ㄋㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "disaster, blame"
    },
    "呢": {
        "zhuyin": "ㄋㄜ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "(? particle)"
    },
    "能": {
        "zhuyin": "ㄋㄥˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "can, be able to"
    },
    "你": {
        "zhuyin": "ㄋㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "you"
    },
    "你們": {
        "zhuyin": "ㄋㄧˇ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "yall"
    },
    "年": {
        "zhuyin": "ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "year"
    },
    "您": {
        "zhuyin": "ㄋㄧㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "you(formal, corteous)"
    },
    "牛奶": {
        "zhuyin": "ㄋㄧㄡˊ ㄋㄞˇ",
        "pinyin": "niú nǎi",
        "level": "HSK1",
        "english": "cow's milk"
    },
    "女": {
        "zhuyin": "ㄋㄩˇ",
        "pinyin": "nǚ",
        "level": "HSK1",
        "english": "woman",
    },
    "女兒": {
        "zhuyin": "ㄋㄩˇ ㄦˊ",
        "pinyin": "nǚ ér",
        "level": "HSK1",
        "english": "daughter"
    },
    "女孩兒": {
        "zhuyin": "ㄋㄩˇㄏㄞˊㄦ",
        "pinyin": "",
        "level": "HSK1",
        "english": "girl"
    },
    "女朋友": {
        "zhuyin": "ㄋㄩˇ ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "girlfriend"
    },
    "女人": {
        "zhuyin": "ㄋㄩˇ ㄦˊ",
        "pinyin": "nǚ rén",
        "level": "HSK1",
        "english": "woman"
    },
    "女生": {
        "zhuyin": "ㄋㄩˇ ㄕㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "lady"
    },
    "旁邊": {
        "zhuyin": "ㄆㄤˊ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "to the side, besides"
    },
    "跑": {
        "zhuyin": "ㄆㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "run"
    },
    "朋友": {
        "zhuyin": "ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "péng you",
        "level": "HSK1",
        "english": "friend"
    },
    "朋友們": {
        "zhuyin": "ㄆㄥˊ ㄧㄡˇ ㄇㄣ˙",
        "pinyin": "",
        "level": "HSK1",
        "english": "friends"
    },
    "票": {
        "zhuyin": "ㄆㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ticket"
    },
    "漂亮": {
        "zhuyin": "ㄆㄧㄠ ㄌㄧㄤˋ",
        "pinyin": "piào liang",
        "level": "HSK1",
        "english": "pretty, beautiful"
    },
    "蘋果": {
        "zhuyin": "ㄆㄧㄥˊ ㄍㄨㄛˇ",
        "pinyin": "píng guǒ",
        "level": "HSK1",
        "english": "apple"
    },
    "七": {
        "zhuyin": "ㄑㄧ",
        "pinyin": "",
        "level": "HSK1",
        "english": "seven"
    },
    "起": {
        "zhuyin": "ㄑㄧˇ",
        "pinyin": "qǐ",
        "level": "HSK1",
        "english": "get up, start, rise"
    },
    "起床": {
        "zhuyin": "ㄑㄧˇㄔㄨㄤˊ",
        "pinyin": "qǐ chuáng",
        "level": "HSK1",
        "english": "to get up"
    },
    "汽車": {
        "zhuyin": "ㄑㄧˋ ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "car"
    },
    "前": {
        "zhuyin": "ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "front"
    },
    "前邊": {
        "zhuyin": "ㄑㄧㄢˊ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "in front, front face"
    },
    "前天": {
        "zhuyin": "ㄑㄧㄢˊ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "the day before yesterday"
    },
    "前面": {
        "zhuyin": "ㄑㄧㄢˊ ㄇㄧㄢˋ",
        "pinyin": "qián miàn",
        "level": "HSK1",
        "english": "ahead, in front, preceding"
    },
    "錢": {
        "zhuyin": "ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "money"
    },
    "錢包": {
        "zhuyin": "ㄑㄧㄢˊ ㄅㄠ",
        "pinyin": "",
        "level": "HSK1",
        "english": "wallet"
    },
    "請": {
        "zhuyin": "ㄑㄧㄥˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "please"
    },
    "請假": {
        "zhuyin": "ㄑㄧㄥˇ ㄐㄧㄚˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ask for leave"
    },
    "請進": {
        "zhuyin": "ㄑㄧㄥˇ ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "please come in"
    },
    "請問": {
        "zhuyin": "ㄑㄧㄥˇ ㄨㄣˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "excuse me"
    },
    "請坐": {
        "zhuyin": "ㄑㄧㄥˇ ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "please have a seat"
    },
    // 300/500 done

    "球": {
        "zhuyin": "ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ball"
    },
    "去": {
        "zhuyin": "ㄑㄩˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go"
    },
    "去年": {
        "zhuyin": "ㄑㄩˋ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "last year"
    },
    "熱": {
        "zhuyin": "ㄖㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "heat"
    },
    "人": {
        "zhuyin": "ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "people"
    },

    "認識": {
        "zhuyin": "ㄖㄣˋ ㄕˊ",
        "pinyin": "rèn shi",
        "level": "HSK1",
        "english": "to know, to recognize, to be familliar with"
    },
    "認真": {
        "zhuyin": "ㄖㄣˋ ㄓㄣ",
        "pinyin": "",
        "level": "HSK1",
        "english": "earnest"
    },
    "日": {
        "zhuyin": "ㄖˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sun, date"
    },
    "日期": {
        "zhuyin": "ㄖˋ ㄑㄧ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Date"
    },
    "肉": {
        "zhuyin": "ㄖㄡˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "meat"
    },
    "三": {
        "zhuyin": "ㄙㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "three"
    },
    "山": {
        "zhuyin": "ㄕㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "mountain"
    },
    "商場": {
        "zhuyin": "ㄕㄤ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "shopping mall"
    },
    "商店": {
        "zhuyin": "ㄕㄤ ㄉㄧㄢˋ",
        "pinyin": "shāng diàn",
        "level": "HSK1",
        "english": "store, shop"
    },
    "上": {
        "zhuyin": "ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "upper"
    },
    "上班": {
        "zhuyin": "ㄕㄤˋ ㄅㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go to work"
    },
    "上邊": {
        "zhuyin": "ㄕㄤˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "above, on"
    },
    "上車": {
        "zhuyin": "ㄕㄤˋ ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "get on"
    },
    "上次": {
        "zhuyin": "ㄕㄤˋ ㄘˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "last time"
    },
    "上課": {
        "zhuyin": "ㄕㄤˋ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "attend a class, have a class"
    },
    "上網": {
        "zhuyin": "ㄕㄤˋ ㄨㄤˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "surf the net, browse the web"
    },
    "上午": {
        "zhuyin": "ㄕㄤˋ ㄨˇ",
        "pinyin": "shàng wǔ",
        "level": "HSK1",
        "english": "morning"
    },
    "上學": {
        "zhuyin": "ㄕㄤˋ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go to school"
    },
    "少": {
        "zhuyin": "ㄕㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "less"
    },
    "誰": {
        "zhuyin": "ㄕㄨㄟˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "who"
    },
    "身上": {
        "zhuyin": "ㄕㄣ ㄕㄤˋ ",
        "pinyin": "",
        "level": "HSK1",
        "english": "body, on one's body"
    },
    "身體 ": {
        "zhuyin": "ㄕㄣ ㄊㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "body"
    },
    "什麼": {
        "zhuyin": "ㄕˊ ㄇㄜ˙",
        "pinyin": "shén me",
        "level": "HSK1",
        "english": "what, who, something, anything"
    },
    "生病": {
        "zhuyin": "ㄕㄥ ㄅㄧㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "fall ill"
    },
    "生氣": {
        "zhuyin": "ㄕㄥ ㄑㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "get angry"
    },
    // 330/500 done

    "生日": {
        "zhuyin": "ㄕㄥ ㄖˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "birthday"
    },
    "十": {
        "zhuyin": "ㄕˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ten"
    },
    "時候": {
        "zhuyin": "ㄕˊ ㄏㄡˋ",
        "pinyin": "shí hou",
        "level": "HSK1",
        "english": "time, length of time, moment, period"
    },
    "時間": {
        "zhuyin": "ㄕˊ ㄐㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "time"
    },
    "事": {
        "zhuyin": "ㄕˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "thing"
    },
    "試": {
        "zhuyin": "ㄕˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "try"
    },
    "是": {
        "zhuyin": "ㄕˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "yes"
    },
    "是不是": {
        "zhuyin": "ㄕˋ ㄅㄨˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "isn't it?"
    },
    "手": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hand"
    },
    "手機": {
        "zhuyin": "ㄕㄡˇ ㄐㄧ",
        "pinyin": "",
        "level": "HSK1",
        "english": "mobile phone, cell phone"
    },
    "書": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "",
        "level": "HSK1",
        "english": "book"
    },
    "書包": {
        "zhuyin": "ㄕㄨ ㄅㄠ",
        "pinyin": "",
        "level": "HSK1",
        "english": "book bag, school bag"
    },
    "書店": {
        "zhuyin": "ㄕㄨ ㄉㄧㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "bookstore"
    },
    "樹": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "tree, cultivatee"
    },
    "水": {
        "zhuyin": "ㄕㄨㄟˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "water"
    },
    "水果": {
        "zhuyin": "ㄕㄨㄟˇ ㄍㄨㄛˇ",
        "pinyin": "shuǐ guǒ",
        "level": "HSK1",
        "english": "fruit, fruits"
    },
    "睡": {
        "zhuyin": "ㄕㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sleep"
    },
    "睡覺": {
        "zhuyin": "ㄕㄨㄟˋ ㄐㄩㄝˊ",
        "pinyin": "shuì jiào",
        "level": "HSK1",
        "english": "to go to bed, to sleep"
    },
    "說": {
        "zhuyin": "ㄕㄨㄛ",
        "pinyin": "",
        "level": "HSK1",
        "english": "speak"
    },
    "說話": {
        "zhuyin": "ㄕㄨㄛ ㄏㄨㄚˋ",
        "pinyin": "shuō huà",
        "level": "HSK1",
        "english": "to speak, say, talk, tell stories"
    },
    "四": {
        "zhuyin": "ㄙˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "four"
    },
    "送": {
        "zhuyin": "ㄙㄨㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "give"
    },
    "歲": {
        "zhuyin": "ㄙㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "age, year"
    },
    "他": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "",
        "level": "HSK1",
        "english": "he"
    },
    "他們": {
        "zhuyin": "ㄊㄚ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "they"
    },
    "她": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "",
        "level": "HSK1",
        "english": "she"
    },
    "她們": {
        "zhuyin": "ㄊㄚ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "they"
    },
    "太": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "too"
    },
    "天": {
        "zhuyin": "ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "day"
    },
    "天氣": {
        "zhuyin": "ㄊㄧㄢ ㄑㄧˋ",
        "pinyin": "tiān qì",
        "level": "HSK1",
        "english": "weather"
    },
    "聽": {
        "zhuyin": "ㄊㄧㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hear"
    },
    "聽到": {
        "zhuyin": "ㄊㄧㄥ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hear"
    },
    "聽見": {
        "zhuyin": "ㄊㄧㄥ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hear"
    },
    "聽寫": {
        "zhuyin": "ㄊㄧㄥ ㄒㄧㄝˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "dictation"
    },
    "同學": {
        "zhuyin": "ㄊㄨㄥˊ ㄒㄩㄝˊ",
        "pinyin": "tóng xué",
        "level": "HSK1",
        "english": "to study at the same school, classmate"
    },
    "圖書館": {
        "zhuyin": "ㄊㄨˊ ㄕㄨ ㄍㄨㄢˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "library"
    },
    "外": {
        "zhuyin": "ㄨㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "abroad, outside"
    },
    "外邊": {
        "zhuyin": "ㄨㄞˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "outside"
    },
    "外國": {
        "zhuyin": "ㄨㄞˋ ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "foreign country"
    },
    "外語": {
        "zhuyin": "ㄨㄞˋ ㄩˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "foreign language"
    },
    "玩兒": {
        "zhuyin": "ㄨㄢˊ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "play"
    },
    "晚": {
        "zhuyin": "ㄨㄢˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "late"
    },
    "晚飯": {
        "zhuyin": "ㄨㄢˇ ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "dinner"
    },
    "晚上": {
        "zhuyin": "ㄨㄢˇ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "night, in the evening"
    },
    "網上": {
        "zhuyin": "ㄨㄤˇ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "online"
    },
    // 375/500 done
    "網友": {
        "zhuyin": "ㄨㄤˇ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "online friend"
    },
    "忘": {
        "zhuyin": "ㄨㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "forget"
    },
    "忘記": {
        "zhuyin": "ㄨㄤˋ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "forget"
    },
    "問": {
        "zhuyin": "ㄨㄣˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "ask"
    },
    "我": {
        "zhuyin": "ㄨㄛˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "I, me"
    },
    "我們": {
        "zhuyin": "ㄨㄛˇ ㄇㄣˊ",
        "pinyin": "wǒ men",
        "level": "HSK1",
        "english": "we, us, ourselves, our"
    },
    "五": {
        "zhuyin": "ㄨˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "five"
    },
    "午飯": {
        "zhuyin": "ㄨˇ ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "lunch"
    },
    "西": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "",
        "level": "HSK1",
        "english": "west"
    },
    "西邊": {
        "zhuyin": "ㄒㄧ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "west side, west"
    },
    "洗": {
        "zhuyin": "ㄒㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "wash"
    },
    "洗手間": {
        "zhuyin": "ㄒㄧˇ ㄕㄡˇ ㄐㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "restroom, washroom"
    },
    "喜歡": {
        "zhuyin": "ㄒㄧˇ ㄏㄨㄢ",
        "pinyin": "xǐ huan",
        "level": "HSK1",
        "english": "to like, be fond of"
    },
    "下": {
        "zhuyin": "ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "below, under, go down, get off"
    },
    "下班": {
        "zhuyin": "ㄒㄧㄚˋ ㄅㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "get off work"
    },
    "下邊": {
        "zhuyin": "ㄒㄧㄚˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "below, under"
    },
    "下車": {
        "zhuyin": "ㄒㄧㄚˋ ㄔㄜ",
        "pinyin": "",
        "level": "HSK1",
        "english": "get off, disembark"
    },
    "下次": {
        "zhuyin": "ㄒㄧㄚˋ ㄘˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "next time"
    },
    "下課": {
        "zhuyin": "ㄒㄧㄚˋ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "finish class"
    },
    "下午": {
        "zhuyin": "ㄒㄧㄚˋ ㄨˇ",
        "pinyin": "xià wǔ",
        "level": "HSK1",
        "english": "afternoon"
    },
    "下雨": {
        "zhuyin": "ㄒㄧㄚˋ ㄩˇ",
        "pinyin": "xià yǔ",
        "level": "HSK1",
        "english": "to rain, rainy"
    },
    "先": {
        "zhuyin": "ㄒㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "before"
    },
    "先生": {
        "zhuyin": "ㄒㄧㄢ ㄕㄥ",
        "pinyin": "xiān sheng",
        "level": "HSK1",
        "english": "Mr. or sir"
    },
    "現在": {
        "zhuyin": "ㄒㄧㄢˋ ㄗㄞˋ",
        "pinyin": "xiàn zài",
        "level": "HSK1",
        "english": "now, at present, at the moment, nowadays, currently"
    },
    "想": {
        "zhuyin": "ㄒㄧㄤˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "think"
    },
    "小": {
        "zhuyin": "ㄒㄧㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "small"
    },
    "小孩兒": {
        "zhuyin": "ㄒㄧㄠˇ ㄏㄞˊ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "child, kid"
    },
    "小姐": {
        "zhuyin": "ㄒㄧㄠˇ ㄐㄧㄝˇ",
        "pinyin": "xiǎo jiě",
        "level": "HSK1",
        "english": "Miss"
    },
    "小朋友": {
        "zhuyin": "ㄒㄧㄠˇ ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "child, kid"
    },
    "小時": {
        "zhuyin": "ㄒㄧㄠˇ ㄕˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "hour"
    },
    "小學": {
        "zhuyin": "ㄒㄧㄠˇ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "elementary school"
    },
    "小學生": {
        "zhuyin": "ㄒㄧㄠˇ ㄒㄩㄝˊ ㄕㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "elementary student"
    },
    "笑": {
        "zhuyin": "ㄒㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "laugh, smile"
    },
    "寫": {
        "zhuyin": "ㄒㄧㄝˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "write"
    },
    "謝謝": {
        "zhuyin": "ㄒㄧㄝˋ ㄒㄧㄝˋ",
        "pinyin": "xiè xie",
        "level": "HSK1",
        "english": "thanks, to thank"
    },
    "新": {
        "zhuyin": "ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK1",
        "english": "new"
    },
    "新年": {
        "zhuyin": "ㄒㄧㄣ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "new year"
    },
    "星期": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ",
        "pinyin": "xīng qī",
        "level": "HSK1",
        "english": "week"
    },
    "星期日": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄖˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Sunday"
    },
    "星期天": {
        "zhuyin": "ㄒㄧㄥ ㄑㄧ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Sunday"
    },
    "行": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "that's ok, go, do"
    },
    "休息": {
        "zhuyin": "ㄒㄧㄡ ㄒㄧ",
        "pinyin": "",
        "level": "HSK1",
        "english": "rest"
    },
    "學": {
        "zhuyin": "ㄒㄩㄝˊ",
        "pinyin": "xué",
        "level": "HSK1",
        "english": "learn, study"
    },
    "學生": {
        "zhuyin": "ㄒㄩㄝˊ ㄕㄥ",
        "pinyin": "xué sheng",
        "level": "HSK1",
        "english": "student"
    },
    "學習": {
        "zhuyin": "ㄒㄩㄝˊ ㄒㄧˊ",
        "pinyin": "xué xí",
        "level": "HSK1",
        "english": "to learn, to study"
    },
    "學校": {
        "zhuyin": "ㄒㄩㄝˊ ㄒㄧㄠˋ",
        "pinyin": "xué xiào",
        "level": "HSK1",
        "english": "school"
    },
    "學院": {
        "zhuyin": "ㄒㄩㄝˊ ㄩㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "college, academy"
    },
    "要": {
        "zhuyin": "ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "want, going to, must, probably, if"
    },
    "爺爺": {
        "zhuyin": "ㄧㄝˊ ㄧㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "grandpa"
    },
    "也": {
        "zhuyin": "ㄧㄝˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "also"
    },
    "頁": {
        "zhuyin": "ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "page"
    },
    "一": {
        "zhuyin": "一",
        "pinyin": "",
        "level": "HSK1",
        "english": "one"
    },
    "衣服": {
        "zhuyin": "ㄧ ㄈㄨˊ",
        "pinyin": "yī fu",
        "level": "HSK1",
        "english": "clothes"
    },
    "醫生": {
        "zhuyin": "ㄧ ㄕㄥ",
        "pinyin": "yī shēng",
        "level": "HSK1",
        "english": "doctor"
    },
    "醫院": {
        "zhuyin": "ㄧ ㄩㄢˋ",
        "pinyin": "yī yuàn",
        "level": "HSK1",
        "english": "hospital"
    },
    "一半": {
        "zhuyin": "ㄧ ㄅㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "half"
    },
    "一會兒": {
        "zhuyin": "ㄧ ㄏㄨㄟˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "a little while"
    },
    "一塊兒": {
        "zhuyin": "ㄧ ㄎㄨㄞˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "together"
    },
    "一下兒": {
        "zhuyin": "ㄧ ㄒㄧㄚˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "a little bit"
    },
    "一樣": {
        "zhuyin": "ㄧ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "equally"
    },
    "一邊": {
        "zhuyin": "ㄧ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "one side"
    },
    "一點兒": {
        "zhuyin": "ㄧ ㄉㄧㄢˇ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "a little bit"
    },
    "一起": {
        "zhuyin": "ㄧ ㄑㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "together, with"
    },
    "一些": {
        "zhuyin": "ㄧ ㄒㄧㄝ",
        "pinyin": "",
        "level": "HSK1",
        "english": "some"
    },
    "用": {
        "zhuyin": "ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "use"
    },
    "有": {
        "zhuyin": "ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "have"
    },
    "有的": {
        "zhuyin": "ㄧㄡˇ ㄉㄧˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "some"
    },
    "有名": {
        "zhuyin": "ㄧㄡˇ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "famous"
    },
    "有時候": {
        "zhuyin": "ㄧㄡˇ ㄕˊ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sometimes"
    },
    "有（一）些": {
        "zhuyin": "ㄧㄡˇ （ㄧ） ㄒㄧㄝ",
        "pinyin": "",
        "level": "HSK1",
        "english": "some"
    },
    "椅子": {
        "zhuyin": "ㄧˇ ㄗˇ",
        "pinyin": "yǐ zi",
        "level": "HSK1",
        "english": "chair"
    },
    "有用": {
        "zhuyin": "ㄧㄡˇ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "useful"
    },
    "右": {
        "zhuyin": "ㄧㄡˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "right"
    },
    "右邊": {
        "zhuyin": "ㄧㄡˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "right side"
    },
    "雨": {
        "zhuyin": "ㄩˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "rain"
    },
    "元": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Yuan, element"
    },
    //450/500 done

    "遠": {
        "zhuyin": "ㄩㄢˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "far"
    },
    "月": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "month"
    },
    "再": {
        "zhuyin": "ㄗㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "again"
    },
    "再見": {
        "zhuyin": " ㄗㄞˋ ㄐㄧㄢˋ",
        "pinyin": "zài jiàn",
        "level": "HSK1",
        "english": "goodbye, see you later"
    },
    "在": {
        "zhuyin": "ㄗㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "stay, in process of"
    },
    "在家": {
        "zhuyin": "ㄗㄞˋ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK1",
        "english": "at home"
    },
    "早": {
        "zhuyin": "ㄗㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "early"
    },
    "早飯": {
        "zhuyin": "ㄗㄠˇ ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "breakfast"
    },
    "早上": {
        "zhuyin": "ㄗㄠˇ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "morning"
    },

    "怎麼": {
        "zhuyin": "ㄗㄣˇ ㄇㄜ˙",
        "pinyin": "zěn me",
        "level": "HSK1",
        "english": "how?, what?, why?"
    },
    "站": {
        "zhuyin": "ㄓㄢˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "station"
    },
    "找": {
        "zhuyin": "ㄓㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "look for"
    },
    "找到": {
        "zhuyin": "ㄓㄠˇ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "find"
    },
    "這": {
        "zhuyin": "ㄓㄜˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "here, this"
    },
    "這邊": {
        "zhuyin": "ㄓㄜˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "here, this side"
    },
    "這裡": {
        "zhuyin": "ㄓㄜˋ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "here, are here"
    },
    "這兒": {
        "zhuyin": "ㄓㄜˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "here"
    },
    "這些": {
        "zhuyin": "ㄓㄜˋ ㄒㄧㄝ",
        "pinyin": "",
        "level": "HSK1",
        "english": "these"
    },
    "着": {
        "zhuyin": "ㄓㄨㄛˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "in process of"
    },
    "真": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "",
        "level": "HSK1",
        "english": "really"
    },
    "真的": {
        "zhuyin": "ㄓㄣ ㄉㄛ",
        "pinyin": "",
        "level": "HSK1",
        "english": "really"
    },
    "正": {
        "zhuyin": "ㄓㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "just, exactly"
    },
    "正在": {
        "zhuyin": "ㄓㄥˋ ㄗㄞˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "in process of, under(development), is _ing"
    },
    "知道": {
        "zhuyin": "ㄓ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "know, become aware of"
    },
    "知識": {
        "zhuyin": "ㄓ ㄕˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "knowledge"
    },
    "中": {
        "zhuyin": "ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "middle, in"
    },
    "中國": {
        "zhuyin": "ㄓㄨㄥ ㄍㄨㄛˊ",
        "pinyin": "Zhōng guó",
        "level": "HSK1",
        "english": "China"
    },
    "中間": {
        "zhuyin": "ㄓㄨㄥ ㄐㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "between, among, the middle, center"
    },
    "中文": {
        "zhuyin": "ㄓㄨㄥ ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "Chinese"
    },
    "中午": {
        "zhuyin": "ㄓㄨㄥ ㄨˇ",
        "pinyin": "zhōng wǔ",
        "level": "HSK1",
        "english": "noon"
    },
    "中學": {
        "zhuyin": "ㄓㄨㄥ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK1",
        "english": "middle school"
    },
    "中學生": {
        "zhuyin": "ㄓㄨㄥ ㄒㄩㄝˊ ㄕㄥ",
        "pinyin": "",
        "level": "HSK1",
        "english": "middle school student"
    },
    "重": {
        "zhuyin": "ㄓㄨㄥˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "heavy"
    },
    "重要": {
        "zhuyin": "ㄓㄨㄥˋ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "important"
    },
    "住": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "live"
    },
    "準備": {
        "zhuyin": "ㄓㄨㄣˇ ㄅㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "get ready"
    },
    "桌子": {
        "zhuyin": "ㄓㄨㄛ ㄗˇ ",
        "pinyin": "zhuō zi",
        "level": "HSK1",
        "english": "table, desk"
    },
    "字": {
        "zhuyin": "ㄗˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "word, character"
    },
    "子": {
        "zhuyin": "ㄗˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "(goes after some nouns)"
    },
    "走": {
        "zhuyin": "ㄗㄡˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "go, walk"
    },
    "走路": {
        "zhuyin": "ㄗㄡˇ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "walk"
    },
    "最": {
        "zhuyin": "ㄗㄨㄟˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "most"
    },
    "最好": {
        "zhuyin": "ㄗㄨㄟˋ ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "best"
    },
    "最後": {
        "zhuyin": "ㄗㄨㄟˋ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "last"
    },
    "昨天": {
        "zhuyin": "ㄗㄨㄛˊ ㄊㄧㄢ",
        "pinyin": "zuó tiān",
        "level": "HSK1",
        "english": "yesterday"
    },
    "左": {
        "zhuyin": "ㄗㄨㄛˇ",
        "pinyin": "",
        "level": "HSK1",
        "english": "left"
    },
    "左邊": {
        "zhuyin": "ㄗㄨㄛˇ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK1",
        "english": "left side"
    },
    "坐": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sit"
    },
    "坐下": {
        "zhuyin": "ㄗㄨㄛˋ ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "sit down"
    },
    "做": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK1",
        "english": "do, make"
    }
};
const HSK2words = {
    //772 words
    "啊": {
        "zhuyin": "ㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ah"
    },
    "愛情": {
        "zhuyin": "ㄞˋ ㄑㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "Love"
    },
    "愛人": {
        "zhuyin": "ㄞˋ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lover"
    },
    "安靜": {
        "zhuyin": "ㄢ ㄐㄧㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be quiet"
    },
    "安全": {
        "zhuyin": "ㄢ ㄑㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "security"
    },
    "白色": {
        "zhuyin": "ㄅㄞˊ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "white"
    },
    "班長": {
        "zhuyin": "ㄅㄢ ㄔㄤˊ",
        "pinyin": "bān zhǎng",
        "level": "HSK2",
        "english": "monitor, squad leader"
    },
    "辦": {
        "zhuyin": "ㄅㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "do"
    },
    "辦法": {
        "zhuyin": "ㄅㄢˋ ㄈㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "way, method"
    },
    "辦公室": {
        "zhuyin": "ㄅㄢˋ ㄍㄨㄥ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "office"
    },
    "半夜": {
        "zhuyin": "ㄅㄢˋ ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "midnight"
    },
    "幫助": {
        "zhuyin": "ㄅㄤ ㄓㄨˋ",
        "pinyin": "bāng zhù",
        "level": "HSK2",
        "english": "to help, assist"
    },
    "飽": {
        "zhuyin": "ㄅㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "full"
    },
    "報名": {
        "zhuyin": "ㄅㄠˋ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sign up"
    },
    "報紙": {
        "zhuyin": "ㄅㄠˋ ㄓˇ",
        "pinyin": "bào zhǐ",
        "level": "HSK2",
        "english": "newspaper"
    },
    "北方": {
        "zhuyin": "ㄅㄟˇ ㄈㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "north"
    },
    "背": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "carry on the back, shoulder"
    },
    "比如": {
        "zhuyin": "ㄅㄧˇ ㄖㄨˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "such as"
    },
    "比如說": {
        "zhuyin": "ㄅㄧˇ ㄖㄨˊ ㄕㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "for example"
    },
    "筆": {
        "zhuyin": "ㄅㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pen"
    },
    "筆記": {
        "zhuyin": "ㄅㄧˇ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "note, notes"
    },
    "筆記本": {
        "zhuyin": "ㄅㄧˇ ㄐㄧˋ ㄅㄣˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "notebook"
    },
    "必須": {
        "zhuyin": "ㄅㄧˋ ㄒㄩ",
        "pinyin": "",
        "level": "HSK2",
        "english": "must"
    },
    "邊": {
        "zhuyin": "ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "side"
    },
    "變": {
        "zhuyin": "ㄅㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "change"
    },
    "變成": {
        "zhuyin": "ㄅㄧㄢˋ ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "become, change into"
    },
    "遍": {
        "zhuyin": "ㄅㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "times"
    },
    "錶": {
        "zhuyin": "ㄅㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "watch"
    },
    "表": {
        "zhuyin": "ㄅㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "exterior surface, a modal, to show one's opinion"
    },
    "表示": {
        "zhuyin": "ㄅㄧㄠˇ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "express, represent, indicate"
    },
    "不錯": {
        "zhuyin": "ㄅㄨˋ ㄘㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not bad, pretty good"
    },
    "不但": {
        "zhuyin": "ㄅㄨˋ ㄉㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not only"
    },
    "不夠": {
        "zhuyin": "ㄅㄨˋ ㄍㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not enough"
    },
    "不過": {
        "zhuyin": "ㄅㄨˋ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "however"
    },
    "不太": {
        "zhuyin": "ㄅㄨˋ ㄊㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not too-, not very much"
    },
    "不要": {
        "zhuyin": "ㄅㄨˋ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "don't"
    },
    "不好意思": {
        "zhuyin": "ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sorry, feel embarrassed"
    },
    "不久": {
        "zhuyin": "ㄅㄨˋ ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "soon"
    },
    "不滿": {
        "zhuyin": "ㄅㄨˋ ㄇㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dissatisfied"
    },
    "不如": {
        "zhuyin": "ㄅㄨˋ ㄖㄨˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not as good as"
    },
    "不少": {
        "zhuyin": "ㄅㄨˋ ㄕㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not a few, a lot"
    },
    "不同": {
        "zhuyin": "ㄅㄨˋ ㄊㄨㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "different"
    },
    "不行": {
        "zhuyin": "ㄅㄨˋ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "no way, out of the question"
    },
    "不一定": {
        "zhuyin": "ㄅㄨˋ ㄧ ㄉㄧㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "not necessarily, uncertain"
    },
    "不一會兒": {
        "zhuyin": "ㄅㄨˋ ㄧ ㄏㄨㄟˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in a moment, in a little while, soon"
    },
    "部分": {
        "zhuyin": "ㄅㄨˋ ㄈㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "part"
    },
    "賓館": {
        "zhuyin": "ㄅㄧㄣ ㄍㄨㄢˇ",
        "pinyin": "bīn guǎn",
        "level": "HSK2",
        "english": "guest house"
    },
    "才": {
        "zhuyin": "ㄘㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "only, just"
    },
    "菜單": {
        "zhuyin": "ㄘㄞˋ ㄉㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "menu"
    },
    "參觀": {
        "zhuyin": "ㄘㄢ ㄍㄨㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "visit"
    },
    "參加": {
        "zhuyin": "ㄘㄢ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "participate in"
    },
    "草": {
        "zhuyin": "ㄘㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "grass"
    },
    "草地": {
        "zhuyin": "ㄘㄠˇ ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "grass, lawn"
    },
    "層": {
        "zhuyin": "ㄘㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "layer"
    },
    "查": {
        "zhuyin": "ㄔㄚˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "search, check"
    },
    "差不多": {
        "zhuyin": "ㄔㄚˋ ㄅㄨˋ ㄉㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "almost"
    },
    "長": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "long"
    },
    "常見": {
        "zhuyin": "ㄔㄤˊ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "common"
    },
    "常用": {
        "zhuyin": "ㄔㄤˊ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in common use"
    },
    "場": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "site"
    },
    "超過": {
        "zhuyin": "ㄔㄠ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "exceed"
    },
    "超市": {
        "zhuyin": "ㄔㄠ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "supermarket"
    },
    "車輛": {
        "zhuyin": "ㄔㄜ ㄌㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "car, vehicle"
    },
    "稱": {
        "zhuyin": "ㄔㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "call, say"
    },
    "成": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "become, finish"
    },
    "成績": {
        "zhuyin": "ㄔㄥˊ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "achievement"
    },
    "成為": {
        "zhuyin": "ㄔㄥˊ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "become"
    },
    "重複": {
        "zhuyin": "ㄔㄨㄥˋ ㄈㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "repeat"
    },
    "重新": {
        "zhuyin": "ㄔㄨㄥˋ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "again"
    },
    "出發": {
        "zhuyin": "ㄔㄨ ㄈㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "set out"
    },
    "出國": {
        "zhuyin": "ㄔㄨ ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "go abroad"
    },
    "出口": {
        "zhuyin": "ㄔㄨ ㄎㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "export"
    },
    "出門": {
        "zhuyin": "ㄔㄨ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "go out"
    },
    "出生": {
        "zhuyin": "ㄔㄨ ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "birth"
    },
    "出現": {
        "zhuyin": "ㄔㄨ ㄒㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "appear"
    },
    "出院": {
        "zhuyin": "ㄔㄨ ㄩㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "discharged, leave the hospital"
    },
    "出租": {
        "zhuyin": "ㄔㄨ ㄗㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "rent"
    },
    "出租車": {
        "zhuyin": "ㄔㄨ ㄗㄨ ㄔㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "taxi"
    },
    "船": {
        "zhuyin": "ㄔㄨㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ship"
    },
    "吹": {
        "zhuyin": "ㄔㄨㄟ",
        "pinyin": "",
        "level": "HSK2",
        "english": "blow"
    },
    "春節": {
        "zhuyin": "ㄔㄨㄣ ㄐㄧㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "Spring Festival, Chinese New Year"
    },
    "春天": {
        "zhuyin": "ㄔㄨㄣ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "spring"
    },
    "詞": {
        "zhuyin": "ㄘˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "word"
    },
    "詞典": {
        "zhuyin": "ㄘˊ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dictionary"
    },
    "詞語": {
        "zhuyin": "ㄘˊ ㄩˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "terms"
    },
    "從小": {
        "zhuyin": "ㄘㄨㄥˊ ㄒㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "from childhood"
    },
    //84/772 done
    "答應": {
        "zhuyin": "ㄉㄚˊ ㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "promise"
    },
    "打工": {
        "zhuyin": "ㄉㄚˇ ㄍㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "work"
    },
    "打算": {
        "zhuyin": "ㄉㄚˇ ㄙㄨㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "plan"
    },
    "打印": {
        "zhuyin": "ㄉㄚˇ ㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "print"
    },
    "大部分": {
        "zhuyin": "ㄉㄚˋ ㄅㄨˋ ㄈㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "most"
    },
    "大大": {
        "zhuyin": "ㄉㄚˋ ㄉㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "greatly, enormously"
    },
    "大多數": {
        "zhuyin": "ㄉㄚˋ ㄉㄨㄛ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "most, great majority"
    },
    "大海": {
        "zhuyin": "ㄉㄚˋ ㄏㄞˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sea"
    },
    "大家": {
        "zhuyin": "ㄉㄚˋ ㄐㄧㄚ",
        "pinyin": "dà jiā",
        "level": "HSK2",
        "english": "everyone, everybody"
    },
    "大量": {
        "zhuyin": "ㄉㄚˋ ㄌㄧㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "a lot of, lots of"
    },
    "大門": {
        "zhuyin": "ㄉㄚˋ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "door, gate"
    },
    "大人": {
        "zhuyin": "ㄉㄚˋ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "adult"
    },
    "大聲": {
        "zhuyin": "ㄉㄚˋ ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "loud"
    },
    "大小": {
        "zhuyin": "ㄉㄚˋ ㄒㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "size"
    },
    "大衣": {
        "zhuyin": "ㄉㄚˋ ㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "overcoat"
    },
    "大自然": {
        "zhuyin": "ㄉㄚˋ ㄗˋ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "nature"
    },
    "帶": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "belt"
    },
    "帶來": {
        "zhuyin": "ㄉㄞˋ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bring"
    },
    "單位": {
        "zhuyin": "ㄉㄢ ㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "Company"
    },
    "但": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "but, however"
    },
    "但是": {
        "zhuyin": "ㄉㄢˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "but, however"
    },
    "蛋": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "egg"
    },
    "當": {
        "zhuyin": "ㄉㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "when"
    },
    "當時": {
        "zhuyin": "ㄉㄤ ㄕˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at that time"
    },
    "倒": {
        "zhuyin": "ㄉㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fall, topople, fail"
    },
    "到處": {
        "zhuyin": "ㄉㄠˋ ㄔㄨˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "everywhere"
    },
    "倒": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "inverted"
    },
    "道": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "road, way, path"
    },
    "道理": {
        "zhuyin": "ㄉㄠˋ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "truth"
    },
    "道路": {
        "zhuyin": "ㄉㄠˋ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "road, way, path"
    },
    "得": {
        "zhuyin": "ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "get"
    },
    "得出": {
        "zhuyin": "ㄉㄜˊ ㄔㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "obtain results, reach conclusion"
    },
    //116/772 done
    "的話": {
        "zhuyin": "ㄉㄜ˙ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "if"
    },
    "得": {
        "zhuyin": "ㄉㄜ˙",
        "pinyin": "",
        "level": "HSK2",
        "english": "(auxiliary verb)"
    },
    "燈": {
        "zhuyin": "ㄉㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lamp"
    },
    "等": {
        "zhuyin": "ㄉㄥˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "etc.; and so on"
    },
    "等到": {
        "zhuyin": "ㄉㄥˇ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "wait until, by the time"
    },
    "等於": {
        "zhuyin": "ㄉㄥˇ ㄩˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be equal to"
    },
    "低": {
        "zhuyin": "ㄉㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "low"
    },
    "地球": {
        "zhuyin": "ㄉㄧˋ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "earth"
    },
    "地鐵": {
        "zhuyin": "ㄉㄧˋ ㄊㄧㄝˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "metro"
    },
    "地鐵站": {
        "zhuyin": "ㄉㄧˋ ㄊㄧㄝˇ ㄓㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "subway station"
    },
    "點頭": {
        "zhuyin": "ㄉㄧㄢˇ ㄊㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "to nod(one's head)"
    },
    "店": {
        "zhuyin": "ㄉㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "shop, store"
    },
    "掉": {
        "zhuyin": "ㄉㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fall"
    },
    "東北": {
        "zhuyin": "ㄉㄨㄥ ㄅㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "northeast"
    },
    "東方": {
        "zhuyin": "ㄉㄨㄥ ㄈㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "east"
    },
    "東南": {
        "zhuyin": "ㄉㄨㄥ ㄋㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "southeast"
    },
    "冬天": {
        "zhuyin": "ㄉㄨㄥ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "winter"
    },
    "懂": {
        "zhuyin": "ㄉㄨㄥˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "understand"
    },
    "懂得": {
        "zhuyin": "ㄉㄨㄥˇ ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "know, understand, comprehend"
    },
    "動物": {
        "zhuyin": "ㄉㄨㄥˋ ㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "animal"
    },
    "動物園": {
        "zhuyin": "ㄉㄨㄥˋ ㄨˋ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "zoo"
    },
    "讀音": {
        "zhuyin": "ㄉㄨˊ ㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pronunciation"
    },
    "度": {
        "zhuyin": "ㄉㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "degree, limit"
    },
    "短": {
        "zhuyin": "ㄉㄨㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "short"
    },
    "短信": {
        "zhuyin": "ㄉㄨㄢˇ ㄒㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "message"
    },
    "段": {
        "zhuyin": "ㄉㄨㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "paragraph"
    },
    "隊": {
        "zhuyin": "ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "team"
    },
    "隊長": {
        "zhuyin": "ㄉㄨㄟˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "team leader, captain"
    },
    "對": {
        "zhuyin": "ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "to, at, face, be opposite, answer"
    },
    "對話": {
        "zhuyin": "ㄉㄨㄟˋ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dialogue"
    },
    "對面": {
        "zhuyin": "ㄉㄨㄟˋ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "opposite side"
    },
    "多": {
        "zhuyin": "ㄉㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "much more, far more"
    },
    "多久": {
        "zhuyin": "ㄉㄨㄛ ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "how long"
    },
    "多麼": {
        "zhuyin": "ㄉㄨㄛ ㄇㄜ˙",
        "pinyin": "",
        "level": "HSK2",
        "english": "what"
    },
    "多數": {
        "zhuyin": "ㄉㄨㄛ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "most, majority"
    },
    "多雲": {
        "zhuyin": "ㄉㄨㄛ ㄩㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cloudy"
    },
    "而且": {
        "zhuyin": "ㄦˊ ㄑㄧㄝˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "and"
    },
    "發": {
        "zhuyin": "ㄈㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "send out"
    },
    "發現": {
        "zhuyin": "ㄈㄚ ㄒㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "find, discover"
    },
    "飯館": {
        "zhuyin": "ㄈㄢˋ ㄍㄨㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "restaurant"
    },
    "方便": {
        "zhuyin": "ㄈㄤ ㄅㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "convenient"
    },
    "方便麵": {
        "zhuyin": "ㄈㄤ ㄅㄧㄢˋ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "instant noodles"
    },
    "方法": {
        "zhuyin": "ㄈㄤ ㄈㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "method"
    },
    "方面": {
        "zhuyin": "ㄈㄤ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "aspect"
    },
    "方向": {
        "zhuyin": "ㄈㄤ ㄒㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "direction"
    },
    "放下": {
        "zhuyin": "ㄈㄤˋ ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "put, lay down, drop"
    },
    "放心": {
        "zhuyin": "ㄈㄤˋ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "don't worry"
    },
    "分": {
        "zhuyin": "ㄈㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "divide, part, distribute"
    },
    "分開": {
        "zhuyin": "ㄈㄣ ㄎㄞ",
        "pinyin": "",
        "level": "HSK2",
        "english": "separate part"
    },
    "分數": {
        "zhuyin": "ㄈㄣ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "score, mark, fraction"
    },
    "分鐘": {
        "zhuyin": "ㄈㄣ ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "minute"
    },
    "份": {
        "zhuyin": "ㄈㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "share"
    },
    "服務": {
        "zhuyin": "ㄈㄨˊ ㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "service"
    },
    "複習": {
        "zhuyin": "ㄈㄨˋ ㄒㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "review"
    },
    "該": {
        "zhuyin": "ㄍㄞ",
        "pinyin": "",
        "level": "HSK2",
        "english": "deserve, should, owe"
    },
    "改": {
        "zhuyin": "ㄍㄞˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "change, correct, revise, switch over"
    },
    "改變": {
        "zhuyin": "ㄍㄞˇ ㄅㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "change"
    },
    "乾杯": {
        "zhuyin": "ㄍㄢ ㄅㄟ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cheers!"
    },
    "感到": {
        "zhuyin": "ㄍㄢˇ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "feel, sense"
    },
    "感動": {
        "zhuyin": "ㄍㄢˇ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be moved"
    },
    "感覺": {
        "zhuyin": "ㄍㄢˇ ㄐㄩㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "feel"
    },
    "感謝": {
        "zhuyin": "ㄍㄢˇ ㄒㄧㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "thank"
    },
    "幹活兒": {
        "zhuyin": "ㄍㄢ ㄏㄨㄛˊ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "work on a job"
    },
    "剛": {
        "zhuyin": "ㄍㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "just"
    },
    "剛才": {
        "zhuyin": "ㄍㄤ ㄘㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "just"
    },
    "剛剛": {
        "zhuyin": "ㄍㄤ ㄍㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "just, only, just a moment ago"
    },
    "高級": {
        "zhuyin": "ㄍㄠ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "senior"
    },
    "高中": {
        "zhuyin": "ㄍㄠ ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "senior high school"
    },
    "個子": {
        "zhuyin": "ㄍㄜˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "height"
    },
    "更": {
        "zhuyin": "ㄍㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "more"
    },
    "公共汽車": {
        "zhuyin": "ㄍㄨㄥ ㄍㄨㄥˋ ㄑㄧˋ ㄔㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bus"
    },
    "公交車": {
        "zhuyin": "ㄍㄨㄥ ㄐㄧㄠ ㄔㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bus"
    },
    "公斤": {
        "zhuyin": "ㄍㄨㄥ ㄐㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "kilogram"
    },
    "公里": {
        "zhuyin": "ㄍㄨㄥ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "kilometer"
    },
    "公路": {
        "zhuyin": "ㄍㄨㄥ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "highway"
    },
    "公平": {
        "zhuyin": "ㄍㄨㄥ ㄆㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fair"
    },
    "公司": {
        "zhuyin": "ㄍㄨㄥ ㄙ",
        "pinyin": "",
        "level": "HSK2",
        "english": "company"
    },
    "公園": {
        "zhuyin": "ㄍㄨㄥ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "public park"
    },
    "狗": {
        "zhuyin": "ㄍㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dog"
    },
    "夠": {
        "zhuyin": "ㄍㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "enough"
    },
    "故事": {
        "zhuyin": "ㄍㄨˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "story"
    },
    "故意": {
        "zhuyin": "ㄍㄨˋ ㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "deliberately"
    },
    "顧客": {
        "zhuyin": "ㄍㄨˋ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "customer"
    },
    "關機": {
        "zhuyin": "ㄍㄨㄢ ㄐㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "shutdown"
    },
    "關心": {
        "zhuyin": "ㄍㄨㄢ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "care for"
    },
    "觀點": {
        "zhuyin": "ㄍㄨㄢ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "viewpoint"
    },
    "廣場": {
        "zhuyin": "ㄍㄨㄤˇ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "square"
    },
    "廣告": {
        "zhuyin": "ㄍㄨㄤˇ ㄍㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "advertisement"
    },
    "國際": {
        "zhuyin": "ㄍㄨㄛˊ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "international"
    },
    "過來": {
        "zhuyin": "ㄍㄨㄛˋ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "come, come over"
    },
    "過年": {
        "zhuyin": "ㄍㄨㄛˋ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "celebrate the new year"
    },
    "過去": {
        "zhuyin": "ㄍㄨㄛˋ ㄑㄩˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "go over, pass by"
    },
    "過": {
        "zhuyin": "ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cross, pass, spend, live"
    },
    "海": {
        "zhuyin": "ㄏㄞˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sea"
    },
    "海邊": {
        "zhuyin": "ㄏㄞˇ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "seaside"
    },
    "喊": {
        "zhuyin": "ㄏㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "shout"
    },
    "好處": {
        "zhuyin": "ㄏㄠˇ ㄔㄨˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "benefit"
    },
    "好多": {
        "zhuyin": "ㄏㄠˇ ㄉㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "many, a lot of"
    },
    "好久": {
        "zhuyin": "ㄏㄠˇ ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "for a long time, long"
    },
    "好人": {
        "zhuyin": "ㄏㄠˇ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "good person"
    },
    "好事": {
        "zhuyin": "ㄏㄠˇ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "good deed, good thing"
    },
    "好像": {
        "zhuyin": "ㄏㄠˇ ㄒㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be like"
    },
    "合適": {
        "zhuyin": "ㄏㄜˊ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "appropriate"
    },
    "河": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "river"
    },
    "黑": {
        "zhuyin": "ㄏㄟ",
        "pinyin": "",
        "level": "HSK2",
        "english": "black"
    },
    "黑板": {
        "zhuyin": "ㄏㄟ ㄅㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "blackboard"
    },
    "黑色": {
        "zhuyin": "ㄏㄟ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "black color"
    },
    "紅": {
        "zhuyin": "",
        "pinyin": "",
        "level": "HSK2",
        "english": "red"
    },
    "紅色": {
        "zhuyin": "ㄏㄨㄥˊ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "red color"
    },
    "後來": {
        "zhuyin": "ㄏㄡˋ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "later"
    },
    "忽然": {
        "zhuyin": "ㄏㄨ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "suddenly"
    },
    "湖": {
        "zhuyin": "ㄏㄨˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lake"
    },
    "護照": {
        "zhuyin": "ㄏㄨˋ ㄓㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "passport"
    },
    "花": {
        "zhuyin": "ㄏㄨㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "spend, expend"
    },
    "花園": {
        "zhuyin": "ㄏㄨㄚ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "garden"
    },
    "畫": {
        "zhuyin": "ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "painting"
    },
    "畫家": {
        "zhuyin": "ㄏㄨㄚˋ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "painter, artist"
    },
    "畫兒": {
        "zhuyin": "ㄏㄨㄚˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "painting, drawing"
    },
    "壞處": {
        "zhuyin": "ㄏㄨㄞˋ ㄔㄨˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "disadvantage, harm"
    },
    "壞人": {
        "zhuyin": "ㄏㄨㄞˋ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bad person"
    },
    "歡迎": {
        "zhuyin": "ㄏㄨㄢ ㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "welcome"
    },
    "換": {
        "zhuyin": "ㄏㄨㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "change"
    },
    "黃": {
        "zhuyin": "ㄏㄨㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "yellow"
    },
    "黃色": {
        "zhuyin": "ㄏㄨㄤˊ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "yellow(in color)"
    },
    "回國": {
        "zhuyin": "ㄏㄨㄟˊ ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "return home from abroad"
    },
    "會": {
        "zhuyin": "ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meeting, gathering, union, party"
    },
    "活動": {
        "zhuyin": "ㄏㄨㄛˊ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "activity"
    },
    "或": {
        "zhuyin": "ㄏㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "or"
    },
    "或者": {
        "zhuyin": "ㄏㄨㄛˋ ㄓㄜˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "perhaps"
    },
    "機會": {
        "zhuyin": "ㄐㄧ ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "opportunity"
    },
    "雞": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "chicken"
    },
    "級": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "level, rank, grade, degree, step"
    },
    "急": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fast, anxious, urgent, annoyed"
    },
    "計劃": {
        "zhuyin": "ㄐㄧˋ ㄏㄨㄚˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "plan"
    },
    "計算機": {
        "zhuyin": "ㄐㄧˋ ㄙㄨㄢˋ ㄐㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "computer"
    },
    "加": {
        "zhuyin": "ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "add, increase, put in"
    },
    "加油": {
        "zhuyin": "ㄐㄧㄚ ㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "oil, refuel, make an all-out effort"
    },
    // 257/700 done
    "家": {
        "zhuyin": "ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "person noun suffix(like in 科學家 or 畫家)"
    },
    "家庭": {
        "zhuyin": "ㄐㄧㄚ ㄊㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "family"
    },
    "家長": {
        "zhuyin": "ㄐㄧㄚ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "parent, head of the family"
    },
    "假": {
        "zhuyin": "ㄐㄧㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "false"
    },
    "假期": {
        "zhuyin": "ㄐㄧㄚˇ ㄑㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "holiday, vacation"
    },
    "檢查": {
        "zhuyin": "ㄐㄧㄢˇ ㄔㄚˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "inspect, check"
    },
    "見到": {
        "zhuyin": "ㄐㄧㄢˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "see"
    },
    "見過": {
        "zhuyin": "ㄐㄧㄢˋ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "seen, have seen"
    },
    "件": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "piece"
    },
    "健康": {
        "zhuyin": "ㄐㄧㄢˋ ㄎㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "healthy"
    },
    "講": {
        "zhuyin": "ㄐㄧㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "speak"
    },
    "講話": {
        "zhuyin": "ㄐㄧㄤˇ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "speak, talk"
    },
    "交": {
        "zhuyin": "ㄐㄧㄠ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hand over"
    },
    "交給": {
        "zhuyin": "ㄐㄧㄠ ㄍㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hand over"
    },
    "交朋友": {
        "zhuyin": "ㄐㄧㄠ ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "make friends"
    },
    "交通": {
        "zhuyin": "ㄐㄧㄠ ㄊㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "traffic"
    },
    "角": {
        "zhuyin": "ㄐㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "horn"
    },
    "角度": {
        "zhuyin": "ㄐㄧㄠˇ ㄉㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "angle"
    },
    "餃子": {
        "zhuyin": "ㄐㄧㄠˇ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dumplings"
    },
    "腳": {
        "zhuyin": "ㄐㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "foot"
    },
    "叫作": {
        "zhuyin": "ㄐㄧㄠˋ ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be called, be known as"
    },
    "教師": {
        "zhuyin": "ㄐㄧㄠˋ ㄕ",
        "pinyin": "",
        "level": "HSK2",
        "english": "teacher"
    },
    "教室": {
        "zhuyin": "ㄐㄧㄠˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "classroom"
    },
    "教學": {
        "zhuyin": "ㄐㄧㄠˋ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "teach"
    },
    "教育": {
        "zhuyin": "ㄐㄧㄠˋ ㄩˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "education"
    },
    "接": {
        "zhuyin": "ㄐㄧㄝ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meet, pick"
    },
    "接到": {
        "zhuyin": "ㄐㄧㄝ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "recieve"
    },
    "接受": {
        "zhuyin": "ㄐㄧㄝ ㄕㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "accept"
    },
    "接下來": {
        "zhuyin": "ㄐㄧㄝ ㄒㄧㄚˋ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "next"
    },
    "接着": {
        "zhuyin": "ㄐㄧㄝ ㄓㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "next"
    },
    "街": {
        "zhuyin": "ㄐㄧㄝ",
        "pinyin": "",
        "level": "HSK2",
        "english": "street"
    },
    "節": {
        "zhuyin": "ㄐㄧㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "festival, holiday, joint"
    },
    "節目": {
        "zhuyin": "ㄐㄧㄝˊ ㄇㄨˋ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "program"
    },
    "節日": {
        "zhuyin": "ㄐㄧㄝˊ ㄖˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "festival"
    },
    "結果": {
        "zhuyin": "ㄐㄧㄝˊ ㄍㄨㄛˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "result"
    },
    "借": {
        "zhuyin": "ㄐㄧㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "borrow"
    },
    "斤": {
        "zhuyin": "ㄐㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "a unit of weight(1/2 kilogram)"
    },
    "今後": {
        "zhuyin": "ㄐㄧㄣ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "from now on, in the future"
    },
    "進入": {
        "zhuyin": "ㄐㄧㄣˋ ㄖㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "enter, go in, join"
    },
    "進行": {
        "zhuyin": "ㄐㄧㄣˋ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "conduct"
    },
    "近": {
        "zhuyin": "ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "near"
    },
    "經常": {
        "zhuyin": "ㄐㄧㄥ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "often"
    },
    "經過": {
        "zhuyin": "ㄐㄧㄥ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "after, through"
    },
    "經理": {
        "zhuyin": "ㄐㄧㄥ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "manager"
    },
    "酒": {
        "zhuyin": "ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "alcohol"
    },
    "酒店": {
        "zhuyin": "ㄐㄧㄡˇ ㄉㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hotel"
    },
    "就要": {
        "zhuyin": "ㄐㄧㄡˋ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be going to, be about to"
    },
    "舉": {
        "zhuyin": "ㄐㄩˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lift"
    },
    "舉手": {
        "zhuyin": "ㄐㄩˇ ㄕㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "raise one's hand or hands"
    },
    "舉行": {
        "zhuyin": "ㄐㄩˇ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hold"
    },
    "句": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sentence"
    },
    "句子": {
        "zhuyin": "ㄐㄩˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sentence"
    },
    "服務員": {
        "zhuyin": "ㄈㄨˊ ㄨˋ ㄩㄢˊ",
        "pinyin": "fú wù yuán",
        "level": "HSK2",
        "english": "attendant, customer service person, waiter"
    },
    "公共汽車": {
        "zhuyin": "ㄍㄨㄥ ㄍㄨㄥˋ ㄑㄧˋ ㄔㄜ",
        "pinyin": "gōng gòng qì chē",
        "level": "HSK2",
        "english": "bus"
    },
    "公司": {
        "zhuyin": "ㄍㄨㄥ ㄙ",
        "pinyin": "gōng sī",
        "level": "HSK2",
        "english": "buisness, company"
    },
    "火車站": {
        "zhuyin": "ㄏㄨㄛˇ ㄔㄜ ㄓㄢˋ",
        "pinyin": "huǒ chē zhàn",
        "level": "HSK2",
        "english": "train station"
    },
    "卡": {
        "zhuyin": "ㄎㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "card"
    },
    "開機": {
        "zhuyin": "ㄎㄞ ㄐㄧ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "starting up"
    },
    "開心": {
        "zhuyin": "ㄎㄞ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "happy"
    },
    "開學": {
        "zhuyin": "ㄎㄞ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "school opens, term begins"
    },
    "看法": {
        "zhuyin": "ㄎㄢˋ ㄈㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "view"
    },
    "考生": {
        "zhuyin": "ㄎㄠˇ ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "examinee"
    },
    "靠": {
        "zhuyin": "ㄎㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lean"
    },
    "科": {
        "zhuyin": "ㄎㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "subject, family, section"
    },
    "科學": {
        "zhuyin": "ㄎㄜ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "science"
    },
    "可愛": {
        "zhuyin": "ㄎㄜˇ ㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lovely, cute"
    },
    "可能": {
        "zhuyin": "",
        "pinyin": "kě néng",
        "level": "HSK2",
        "english": "might, possible, probably, maybe"
    },
    "可怕": {
        "zhuyin": "ㄎㄜˇ ㄆㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dreadful"
    },
    "可是": {
        "zhuyin": "ㄎㄜˇ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "however"
    },
    "可以": {
        "zhuyin": "ㄎㄜˇ ㄧˇ",
        "pinyin": "kě yǐ",
        "level": "HSK2",
        "english": "sure, can, may, possible, able to"
    },
    "克": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "gram"
    },
    "刻": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "quarter(of an hour)"
    },
    "客人": {
        "zhuyin": "ㄎㄜˋ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "guest"
    },
    "課堂": {
        "zhuyin": "ㄎㄜˋ ㄊㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "classroom"
    },
    "空氣": {
        "zhuyin": "ㄎㄨㄥ ㄑㄧˋ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "atmosphere"
    },
    "哭": {
        "zhuyin": "ㄎㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cry"
    },
    "快餐": {
        "zhuyin": "ㄎㄨㄞˋ ㄘㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fast food"
    },
    "快點兒": {
        "zhuyin": "ㄎㄨㄞˋ ㄉㄧㄢˇ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hurry up"
    },
    "快樂": {
        "zhuyin": "ㄎㄨㄞˋ ㄌㄜˋ",
        "pinyin": "kuài lè",
        "level": "HSK2",
        "english": "happy, merry"
    },
    "快要": {
        "zhuyin": "ㄎㄨㄞˋ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be about to, be going to"
    },
    "筷子": {
        "zhuyin": "ㄎㄨㄞˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "chopsticks"
    },
    "拉": {
        "zhuyin": "ㄌㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pull"
    },
    "來自": {
        "zhuyin": "ㄌㄞˊ ㄗˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "come from"
    },
    "藍": {
        "zhuyin": "ㄌㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "blue"
    },
    "藍色": {
        "zhuyin": "ㄌㄢˊ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "blue(in color)"
    },
    "籃球": {
        "zhuyin": "ㄌㄢˊ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "basketball"
    },
    "老": {
        "zhuyin": "ㄌㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "always, constantly, noun prefix"
    },
    "老年": {
        "zhuyin": "ㄌㄠˇ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "elderly"
    },
    "老朋友": {
        "zhuyin": "ㄌㄠˇ ㄆㄥˊ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "old friend"
    },
    "老是": {
        "zhuyin": "ㄌㄠˇ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "always, all times"
    },
    "離": {
        "zhuyin": "ㄌㄧˊ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "leave"
    },
    "離開": {
        "zhuyin": "ㄌㄧˊ ㄎㄞ",
        "pinyin": "",
        "level": "HSK2",
        "english": "leave"
    },
    "禮物": {
        "zhuyin": "ㄌㄧˇ ㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "gift"
    },
    "裡頭": {
        "zhuyin": "ㄌㄧˇ ㄊㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "inside"
    },
    "理想": {
        "zhuyin": "ㄌㄧˇ ㄒㄧㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ideal"
    },
    "例如": {
        "zhuyin": "ㄌㄧˋ ㄖㄨˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "for example"
    },
    "例子": {
        "zhuyin": "ㄌㄧˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "example"
    },
    "臉": {
        "zhuyin": "ㄌㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "face"
    },
    "練": {
        "zhuyin": "ㄌㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "practice, train"
    },
    "練習": {
        "zhuyin": "ㄌㄧㄢˋ ㄒㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "Practice"
    },
    "涼": {
        "zhuyin": "ㄌㄧㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cool"
    },
    "涼快": {
        "zhuyin": "ㄌㄧㄤˊ ㄎㄨㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pleasantly cool"
    },
    "亮": {
        "zhuyin": "ㄌㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bright"
    },
    "輛": {
        "zhuyin": "ㄌㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "measure word for cars"
    },
    "零下": {
        "zhuyin": "ㄌㄧㄥˊ ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "below zero"
    },
    "留": {
        "zhuyin": "ㄌㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stay"
    },
    "留下": {
        "zhuyin": "ㄌㄧㄡˊ ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stay, remain"
    },
    "留學生": {
        "zhuyin": "ㄌㄧㄡˊ ㄒㄩㄝˊ ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "student studying abroad, returned student"
    },
    "流": {
        "zhuyin": "ㄌㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "flow, spread"
    },
    "流利": {
        "zhuyin": "ㄌㄧㄡˊ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fluent"
    },
    "流行": {
        "zhuyin": "ㄌㄧㄡˊ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "popular"
    },
    "路邊": {
        "zhuyin": "ㄌㄨˋ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "roadside, wayside"
    },
    "旅客": {
        "zhuyin": "ㄌㄩˇ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "passenger, traveler"
    },
    "旅行": {
        "zhuyin": "ㄌㄩˇ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "travel"
    },
    "旅遊": {
        "zhuyin": "ㄌㄩˇ ㄧㄡˊ",
        "pinyin": "lǚ yóu",
        "level": "HSK2",
        "english": "trip, journey, tourism, travel"
    },
    "綠": {
        "zhuyin": "ㄌㄩ",
        "pinyin": "",
        "level": "HSK2",
        "english": "green"
    },
    "綠色": {
        "zhuyin": "ㄌㄩ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "green (in color)"
    },
    "賣": {
        "zhuyin": "ㄇㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sell"
    },
    "滿": {
        "zhuyin": "ㄇㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "full"
    },
    "滿意": {
        "zhuyin": "ㄇㄢˇ ㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "satisfied"
    },
    "貓": {
        "zhuyin": "ㄇㄠ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cat"
    },
    "米": {
        "zhuyin": "ㄇㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meter"
    },
    "面": {
        "zhuyin": "ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "(measure word), side, aspect"
    },
    "面": {
        "zhuyin": "ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "face, surface, outside, side, scale, flour"
    },
    "面前": {
        "zhuyin": "ㄇㄧㄢˋ ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in front of, before"
    },
    "名": {
        "zhuyin": "ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "name"
    },
    "名稱": {
        "zhuyin": "ㄇㄧㄥˊ ㄔㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "name, designation"
    },
    "名單": {
        "zhuyin": "ㄇㄧㄥˊ ㄉㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "list"
    },
    "明星": {
        "zhuyin": "ㄇㄧㄥˊ ㄒㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "star"
    },
    "目的": {
        "zhuyin": "ㄇㄨˋ ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "objective"
    },
    "拿出": {
        "zhuyin": "ㄋㄚˊ ㄔㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "take out"
    },
    "拿到": {
        "zhuyin": "ㄋㄚˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "get"
    },
    "那": {
        "zhuyin": "ㄋㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "then, in that case"
    },
    "那會兒": {
        "zhuyin": "ㄋㄚˋ ㄏㄨㄟˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at that time, then"
    },
    "那麼": {
        "zhuyin": "ㄋㄚˋ ㄇㄜ˙",
        "pinyin": "",
        "level": "HSK2",
        "english": "then, in that case"
    },
    "那時候": {
        "zhuyin": "ㄋㄚˋ ㄕˊ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at that time, then"
    },
    "那樣": {
        "zhuyin": "ㄋㄚˋ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "that kind, like that, such"
    },
    "南方": {
        "zhuyin": "ㄋㄢˊ ㄈㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "south"
    },
    "難過": {
        "zhuyin": "ㄋㄢˊ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sorry"
    },
    "難看": {
        "zhuyin": "ㄋㄢˊ ㄎㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ugly"
    },
    "難受": {
        "zhuyin": "ㄋㄢˊ ㄕㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "uncomfortable"
    },
    "難題": {
        "zhuyin": "ㄋㄢˊ ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "problen, difficult problem, puzzle"
    },
    "難聽": {
        "zhuyin": "ㄋㄢˊ ㄊㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "unpleasant to hear"
    },
    "能夠": {
        "zhuyin": "ㄋㄥˊ ㄍㄡ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be able to, can"
    },
    "年級": {
        "zhuyin": "ㄋㄧㄢˊ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "grade"
    },
    "年輕": {
        "zhuyin": "ㄋㄧㄢˊ ㄑㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "young, light in years"
    },
    "鳥": {
        "zhuyin": "ㄋㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bird"
    },
    "弄": {
        "zhuyin": "ㄋㄨㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "get, make"
    },
    "努力": {
        "zhuyin": "ㄋㄨˇ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "strive, great effort"
    },
    "爬": {
        "zhuyin": "ㄆㄚˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "climb, creep, crawl, scramble"
    },
    "爬山": {
        "zhuyin": "ㄆㄚˊ ㄕㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "mountain climbing"
    },
    "怕": {
        "zhuyin": "ㄆㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be afraid, fear, dread"
    },
    "排": {
        "zhuyin": "ㄆㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "row, line"
    },
    "排隊": {
        "zhuyin": "ㄆㄞˊ ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "queue, stand in a line"
    },
    "排球": {
        "zhuyin": "ㄆㄞˊ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "volleyball"
    },
    "碰": {
        "zhuyin": "ㄆㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "touch, meet"
    },
    "碰到": {
        "zhuyin": "ㄆㄥˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meet, run into, bump into"
    },
    "碰見": {
        "zhuyin": "ㄆㄥˋ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meet, run into, bump into"
    },
    "篇": {
        "zhuyin": "ㄆㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "piece"
    },
    "便宜": {
        "zhuyin": "ㄅㄧㄢˋ ㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cheap"
    },
    "片": {
        "zhuyin": "ㄆㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "slice"
    },
    "漂亮": {
        "zhuyin": "ㄆㄧㄠ ㄌㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "well done, beautiful"
    },
    "平": {
        "zhuyin": "ㄆㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "flat"
    },
    "平安": {
        "zhuyin": "ㄆㄧㄥˊ ㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sound and safe"
    },
    "平常": {
        "zhuyin": "ㄆㄧㄥˊ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "usual"
    },
    "平等": {
        "zhuyin": "ㄆㄧㄥˊ ㄉㄥˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "equality"
    },
    "平時": {
        "zhuyin": "ㄆㄧㄥˊ ㄕˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "peacetime"
    },
    "瓶": {
        "zhuyin": "ㄆㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bottle"
    },
    "瓶子": {
        "zhuyin": "ㄆㄧㄥˊ ㄗˇ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bottle"
    },
    "普通": {
        "zhuyin": "ㄆㄨˇ ㄊㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ordinary, general, average, common"
    },
    "普通話": {
        "zhuyin": "ㄆㄨˇ ㄊㄨㄥ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "mandarin"
    },
    "其他": {
        "zhuyin": "ㄑㄧˊ ㄊㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "other"
    },
    "其中": {
        "zhuyin": "ㄑㄧˊ ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "among"
    },
    "騎": {
        "zhuyin": "ㄑㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ride"
    },
    "騎車": {
        "zhuyin": "ㄑㄧˊ ㄔㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cycle"
    },
    "起飛": {
        "zhuyin": "ㄑㄧˇ ㄈㄟ",
        "pinyin": "",
        "level": "HSK2",
        "english": "take off"
    },
    "氣": {
        "zhuyin": "ㄑㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "air, gas, breath"
    },
    "氣溫": {
        "zhuyin": "ㄑㄧˋ ㄨㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "air temperature"
    },
    "千": {
        "zhuyin": "ㄑㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "thousand"
    },
    "千克": {
        "zhuyin": "ㄑㄧㄢ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "kilogram"
    },
    "前年": {
        "zhuyin": "ㄑㄧㄢˊ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "the year before last"
    },
    "牆": {
        "zhuyin": "ㄑㄧㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "wall"
    },
    "青年": {
        "zhuyin": "ㄑㄧㄥ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "youth, young"
    },
    "青少年": {
        "zhuyin": "ㄑㄧㄥ ㄕㄠˇ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "teenagers"
    },
    "輕": {
        "zhuyin": "ㄑㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "light"
    },
    "清楚": {
        "zhuyin": "ㄑㄧㄥ ㄔㄨˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "clear"
    },
    "晴": {
        "zhuyin": "ㄑㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sunny"
    },
    "晴天": {
        "zhuyin": "ㄑㄧㄥˊ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sunny day"
    },
    "請客": {
        "zhuyin": "ㄑㄧㄥˇ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stand treat, entertain"
    },
    "請求": {
        "zhuyin": "ㄑㄧㄥˇ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "request"
    },
    "秋天": {
        "zhuyin": "ㄑㄧㄡ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fall, autumn"
    },
    "求": {
        "zhuyin": "ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "request, beg, entreat, beseech"
    },
    "球場": {
        "zhuyin": "ㄑㄧㄡˊ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "court, field"
    },
    "球隊": {
        "zhuyin": "ㄑㄧㄡˊ ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "team"
    },
    "球鞋": {
        "zhuyin": "ㄑㄧㄡˊ ㄒㄧㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sneakers, gym shoes"
    },
    "取": {
        "zhuyin": "ㄑㄩˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "take"
    },
    "取得": {
        "zhuyin": "ㄑㄩˇ ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "acquire, gain, obtain"
    },
    "全": {
        "zhuyin": "ㄑㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "whole, entire, complete"
    },
    "全部": {
        "zhuyin": "ㄑㄩㄢˊ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "whole"
    },
    "全國": {
        "zhuyin": "ㄑㄩㄢˊ ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "nationwide, entire country"
    },
    "全家": {
        "zhuyin": "ㄑㄩㄢˊ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "whole family"
    },
    "全年": {
        "zhuyin": "ㄑㄩㄢˊ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "annual, yearly"
    },
    "全身": {
        "zhuyin": "ㄑㄩㄢˊ ㄕㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "whole body"
    },
    "全體": {
        "zhuyin": "ㄑㄩㄢˊ ㄊㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "all, entire, whole"
    },
    "然後": {
        "zhuyin": "ㄖㄢˊ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "then"
    },
    "讓": {
        "zhuyin": "ㄖㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "give way"
    },
    "熱情": {
        "zhuyin": "ㄖㄜˋ ㄑㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "enthusiasm"
    },
    "人口": {
        "zhuyin": "ㄖㄣˊ ㄎㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "population"
    },
    "人們": {
        "zhuyin": "ㄖㄣˊ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "people"
    },
    "人數": {
        "zhuyin": "ㄖㄣˊ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "number of people"
    },
    "認為": {
        "zhuyin": "ㄖㄣˋ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "think"
    },
    "日報": {
        "zhuyin": "ㄖˋ ㄅㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "daily, journal"
    },
    "日子": {
        "zhuyin": "ㄖˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "life, days"
    },
    "如果": {
        "zhuyin": "ㄖㄨˊ ㄍㄨㄛˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "if"
    },
    "入口": {
        "zhuyin": "ㄖㄨˋ ㄎㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "entrance"
    },
    "商量": {
        "zhuyin": "ㄕㄤ ㄌㄧㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "discuss"
    },
    "商人": {
        "zhuyin": "ㄕㄤ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "buisnessman"
    },
    "上周": {
        "zhuyin": "ㄕㄤˋ ㄓㄡ",
        "pinyin": "",
        "level": "HSK2",
        "english": "last week"
    },
    "少數": {
        "zhuyin": "ㄕㄠˇ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "small number, few, minority"
    },
    "少年": {
        "zhuyin": "ㄕㄠˇ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "juvenille, young person"
    },
    "身邊": {
        "zhuyin": "ㄕㄣ ㄅㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at(by) one's side"
    },
    "什麼樣": {
        "zhuyin": "ㄕㄣˊ ㄇㄜ˙ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "what kind"
    },
    "生": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "give birth, be born"
    },
    "生詞": {
        "zhuyin": "ㄕㄥ ㄘˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "new word"
    },
    "生活": {
        "zhuyin": "ㄕㄥ ㄏㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "Life"
    },
    "聲音": {
        "zhuyin": "ㄕㄥ ㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "voice"
    },
    "省": {
        "zhuyin": "ㄕㄥˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "province"
    },
    "省": {
        "zhuyin": "ㄕㄥˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "economize, save, omit, leave out"
    },
    "十分": {
        "zhuyin": "ㄕˊ ㄈㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "very"
    },
    "實際": {
        "zhuyin": "ㄕˊ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "actual"
    },
    "實習": {
        "zhuyin": "ㄕˊ ㄒㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "internship"
    },
    "實現": {
        "zhuyin": "ㄕˊ ㄒㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "realization"
    },
    "實在": {
        "zhuyin": "ㄕˊ ㄗㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "real, indeed"
    },
    "實在": {
        "zhuyin": "ㄕˊ ㄗㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "done carefully"
    },
    "食物": {
        "zhuyin": "ㄕˊ ㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "food"
    },
    "使用": {
        "zhuyin": "ㄕˇ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "use"
    },
    "市": {
        "zhuyin": "ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "city"
    },
    "市長": {
        "zhuyin": "ㄕˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "mayor"
    },
    "事情": {
        "zhuyin": "ㄕˋ ㄑㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "thing, matter"
    },
    "收": {
        "zhuyin": "ㄕㄡ",
        "pinyin": "",
        "level": "HSK2",
        "english": "collect"
    },
    "收到": {
        "zhuyin": "ㄕㄡ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "recieve, obtain"
    },
    "收入": {
        "zhuyin": "ㄕㄡ ㄖㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "income"
    },
    "手錶": {
        "zhuyin": "ㄕㄡˇ ㄅㄧㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "wrist watch"
    },
    "受到": {
        "zhuyin": "ㄕㄡˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "suffer"
    },
    "舒服": {
        "zhuyin": "ㄕㄨ ㄈㄨˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "comfortable"
    },
    "熟": {
        "zhuyin": "ㄕㄨˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ripe, cooked, familliar, skilled"
    },
    "數": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "to count"
    },
    "數字": {
        "zhuyin": "ㄕㄨˋ ㄗˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "number"
    },
    "水平": {
        "zhuyin": "ㄕㄨㄟˇ ㄆㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "level"
    },
    "順利": {
        "zhuyin": "ㄕㄨㄣˋ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "smoothly"
    },
    "說明": {
        "zhuyin": "ㄕㄨㄛ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "explain"
    },
    // 505/772 done
    "司機": {
        "zhuyin": "ㄙ ㄐㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "driver"
    },
    "送到": {
        "zhuyin": "ㄙㄨㄥˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sent to"
    },
    "送給": {
        "zhuyin": "ㄙㄨㄥˋ ㄍㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "give to"
    },
    "算": {
        "zhuyin": "ㄙㄨㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "count, calculate"
    },
    "雖然": {
        "zhuyin": "ㄙㄨㄟ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "although, though"
    },
    "隨便": {
        "zhuyin": "ㄙㄨㄟˊ ㄅㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "casual"
    },
    "隨時": {
        "zhuyin": "ㄙㄨㄟˊ ㄕˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at any time"
    },
    "所以": {
        "zhuyin": "ㄙㄨㄛˇ ㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "so"
    },
    "所有": {
        "zhuyin": "ㄙㄨㄛˇ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "all"
    },
    "它": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "it"
    },
    "它們": {
        "zhuyin": "ㄊㄚ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "they"
    },
    "太太": {
        "zhuyin": "ㄊㄞˋ ㄊㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "Ma'am"
    },
    "太陽": {
        "zhuyin": "ㄊㄞˋ ㄧㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sun"
    },
    "態度": {
        "zhuyin": "ㄊㄞˋ ㄉㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "attitude"
    },
    "討論": {
        "zhuyin": "ㄊㄠˇ ㄌㄨㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "discuss"
    },
    "套": {
        "zhuyin": "ㄊㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "set"
    },
    "特別": {
        "zhuyin": "ㄊㄜˋ ㄅㄧㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "especially"
    },
    "特點": {
        "zhuyin": "ㄊㄜˋ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "characteristic"
    },
    "疼": {
        "zhuyin": "ㄊㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hurt"
    },
    "提": {
        "zhuyin": "ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "carry"
    },
    "提出": {
        "zhuyin": "ㄊㄧˊ ㄔㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "put forward, propose, raise"
    },
    "提到": {
        "zhuyin": "ㄊㄧˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "mention, refer to"
    },
    "提高": {
        "zhuyin": "ㄊㄧˊ ㄍㄠ",
        "pinyin": "",
        "level": "HSK2",
        "english": "increase, promote"
    },
    "題": {
        "zhuyin": "ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "topic"
    },
    "體育": {
        "zhuyin": "ㄊㄧˇ ㄩˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "sports"
    },
    "體育場": {
        "zhuyin": "ㄊㄧˇ ㄩˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stadium"
    },
    "體育館": {
        "zhuyin": "ㄊㄧˇ ㄩˋ ㄍㄨㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stadium, gymnasium, gym"
    },
    "天上": {
        "zhuyin": "ㄊㄧㄢ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "the sky, heaven"
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "strip"
    },
    "條件": {
        "zhuyin": "ㄊㄧㄠˊ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "condition"
    },
    "聽講": {
        "zhuyin": "ㄊㄧㄥ ㄐㄧㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "attend a lecture, listen to a talk"
    },
    "聽說": {
        "zhuyin": "ㄊㄧㄥ ㄕㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be told, hear of"
    },
    "停": {
        "zhuyin": "ㄊㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stop"
    },
    "停車": {
        "zhuyin": "ㄊㄧㄥˊ ㄔㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "park"
    },
    "停車場": {
        "zhuyin": "ㄊㄧㄥˊ ㄔㄜ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "parking lot"
    },
    "挺": {
        "zhuyin": "ㄊㄧㄥˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "very, quite, rather, pretty"
    },
    "挺好": {
        "zhuyin": "ㄊㄧㄥˇ ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "very good, not half bad"
    },
    "通": {
        "zhuyin": "ㄊㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "through, common, all, understand, expert"
    },
    "通過": {
        "zhuyin": "ㄊㄨㄥ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "adopt"
    },
    "通知": {
        "zhuyin": "ㄊㄨㄥ ㄓ",
        "pinyin": "",
        "level": "HSK2",
        "english": "notice"
    },
    "同時": {
        "zhuyin": "ㄊㄨㄥˊ ㄕˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meanwhile"
    },
    "同事": {
        "zhuyin": "ㄊㄨㄥˊ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "collegue"
    },
    "同樣": {
        "zhuyin": "ㄊㄨㄥˊ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "same"
    },
    "頭": {
        "zhuyin": "ㄊㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "head, beginning or end, side"
    },
    "頭髮": {
        "zhuyin": "ㄊㄡˊ ㄈㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hair"
    },
    "圖片": {
        "zhuyin": "ㄊㄨˊ ㄆㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "picture, photograph"
    },
    "推": {
        "zhuyin": "ㄊㄨㄟ",
        "pinyin": "",
        "level": "HSK2",
        "english": "push"
    },
    "腿": {
        "zhuyin": "ㄊㄨㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "leg"
    },
    "外地": {
        "zhuyin": "ㄨㄞˋ ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "other places, nonlocal"
    },
    "外賣": {
        "zhuyin": "ㄨㄞˋ ㄇㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "takeaway, take out"
    },
    "完": {
        "zhuyin": "ㄨㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "finish"
    },
    "完成": {
        "zhuyin": "ㄨㄢˊ ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "complete"
    },
    "完全": {
        "zhuyin": "ㄨㄢˊ ㄑㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "completely"
    },
    "晚安": {
        "zhuyin": "ㄨㄢˇ ㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "good night"
    },
    "晚報": {
        "zhuyin": "ㄨㄢˇ ㄅㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "evening paper, evening news"
    },
    "晚餐": {
        "zhuyin": "ㄨㄢˇ ㄘㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dinner"
    },
    "晚會": {
        "zhuyin": "ㄨㄢˇ ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "evening party"
    },
    "碗": {
        "zhuyin": "ㄨㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bowl"
    },
    "萬": {
        "zhuyin": "ㄨㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ten thousand"
    },
    "網": {
        "zhuyin": "ㄨㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "net, network"
    },
    // 566/772 done
    "網球": {
        "zhuyin": "ㄨㄤˇ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "tennis"
    },
    "網站": {
        "zhuyin": "ㄨㄤˇ ㄓㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "website"
    },
    "往": {
        "zhuyin": "ㄨㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "to, towards"
    },
    "為": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "by"
    },
    "為什麼": {
        "zhuyin": "ㄨㄟˊ ㄕㄣˊ ㄇㄜ˙",
        "pinyin": "",
        "level": "HSK2",
        "english": "why"
    },
    "位": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "person (measure word)"
    },
    "味道": {
        "zhuyin": "ㄨㄟˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "taste"
    },
    "喂": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "hello, hey"
    },
    "溫度": {
        "zhuyin": "ㄨㄣ ㄉㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "temperature"
    },
    "聞": {
        "zhuyin": "ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "smell"
    },
    "問路": {
        "zhuyin": "ㄨㄣˋ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "ask for directions"
    },
    "問題": {
        "zhuyin": "ㄨㄣˋ ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "problem"
    },
    "午餐": {
        "zhuyin": "ㄨˇ ㄘㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lunch"
    },
    "午睡": {
        "zhuyin": "ㄨˇ ㄕㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "nap"
    },
    "西北": {
        "zhuyin": "ㄒㄧ ㄅㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "northwest"
    },
    "西餐": {
        "zhuyin": "ㄒㄧ ㄘㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "western food"
    },
    "西方": {
        "zhuyin": "ㄒㄧ ㄈㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "west"
    },
    "西南": {
        "zhuyin": "ㄒㄧ ㄋㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "southwest"
    },
    "西醫": {
        "zhuyin": "ㄒㄧ ㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "western medicine"
    },
    "習慣": {
        "zhuyin": "ㄒㄧˊ ㄍㄨㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "habit"
    },
    "洗衣機": {
        "zhuyin": "ㄒㄧˇ ㄧ ㄐㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "washing machine"
    },
    "洗澡": {
        "zhuyin": "ㄒㄧˇ ㄗㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "take a shower"
    },
    "下雪": {
        "zhuyin": "ㄒㄧㄚˋ ㄒㄩㄝˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "snow, snowing"
    },
    "下周": {
        "zhuyin": "ㄒㄧㄚˋ ㄓㄡ",
        "pinyin": "",
        "level": "HSK2",
        "english": "next week"
    },
    "夏天": {
        "zhuyin": "ㄒㄧㄚˋ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "summer"
    },
    "相同": {
        "zhuyin": "ㄒㄧㄤ ㄊㄨㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "identical"
    },
    "相信": {
        "zhuyin": "ㄒㄧㄤ ㄒㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "believe"
    },
    "響": {
        "zhuyin": "ㄒㄧㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "loud"
    },
    "想到": {
        "zhuyin": "ㄒㄧㄤˇ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "think of, call to mind, have at heart"
    },
    "想法": {
        "zhuyin": "ㄒㄧㄤˇ ㄈㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "idea, opinion, thought"
    },
    "想起": {
        "zhuyin": "ㄒㄧㄤˇ ㄑㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "remember, recall, think of, call to mind"
    },
    "向": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "towards"
    },
    "相機": {
        "zhuyin": "ㄒㄧㄤ ㄐㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "camera"
    },
    "像": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be like, resemble, look like, such as"
    },
    "小聲": {
        "zhuyin": "ㄒㄧㄠˇ ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in a low voice, whispers"
    },
    "小時候": {
        "zhuyin": "ㄒㄧㄠˇ ㄕˊ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in one's childhood, when one was young"
    },
    "小說": {
        "zhuyin": "ㄒㄧㄠˇ ㄕㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "novel"
    },
    "小心": {
        "zhuyin": "ㄒㄧㄠˇ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "look out"
    },
    "小組": {
        "zhuyin": "ㄒㄧㄠˇ ㄗㄨˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "group"
    },
    "校園": {
        "zhuyin": "ㄒㄧㄠˋ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "campus, schoolyard"
    },
    "校長": {
        "zhuyin": "ㄒㄧㄠˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "principal"
    },
    "笑話": {
        "zhuyin": "ㄒㄧㄠˋ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "joke"
    },
    "笑話兒": {
        "zhuyin": "ㄒㄧㄠˋ ㄏㄨㄚˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "joke"
    },
    "鞋": {
        "zhuyin": "ㄒㄧㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "shoes"
    },
    "心裡": {
        "zhuyin": "ㄒㄧㄣ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in the heart, at heart"
    },
    "心情": {
        "zhuyin": "ㄒㄧㄣ ㄑㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "mood"
    },
    "心中": {
        "zhuyin": "ㄒㄧㄣ ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "in the heart, at heart, in mind"
    },
    "新聞": {
        "zhuyin": "ㄒㄧㄣ ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "news"
    },
    "信": {
        "zhuyin": "ㄒㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "letter, mail, faith"
    },
    "信號": {
        "zhuyin": "ㄒㄧㄣˋ ㄏㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "signal"
    },
    "信息": {
        "zhuyin": "ㄒㄧㄣˋ ㄒㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "information"
    },
    "信心": {
        "zhuyin": "ㄒㄧㄣˋ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "confidence"
    },
    "信用卡": {
        "zhuyin": "ㄒㄧㄣˋ ㄩㄥˋ ㄑㄧㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "credit card"
    },
    "星星": {
        "zhuyin": "ㄒㄧㄥ ㄒㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "star"
    },
    "行動": {
        "zhuyin": "ㄒㄧㄥˊ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "get some action"
    },
    "行人": {
        "zhuyin": "ㄒㄧㄥˊ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pedestrian"
    },
    "行為": {
        "zhuyin": "ㄒㄧㄥˊ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "behavior"
    },
    "姓": {
        "zhuyin": "ㄒㄧㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "surname"
    },
    "姓名": {
        "zhuyin": "ㄒㄧㄥˋ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "full name"
    },
    "休假": {
        "zhuyin": "ㄒㄧㄡ ㄐㄧㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "have a holiday, take a vacation"
    },
    "許多": {
        "zhuyin": "ㄒㄩˇ ㄉㄨㄛ",
        "pinyin": "",
        "level": "HSK2",
        "english": "many"
    },
    "選": {
        "zhuyin": "ㄒㄩㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "choose, select, pick"
    },
    "學期": {
        "zhuyin": "ㄒㄩㄝˊ ㄑㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "semester"
    },
    "雪": {
        "zhuyin": "ㄒㄩㄝˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "snow"
    },
    "顏色": {
        "zhuyin": "ㄧㄢˊ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "color"
    },
    "眼": {
        "zhuyin": "ㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "eye"
    },
    "眼睛": {
        "zhuyin": "ㄧㄢˇ ㄐㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "eye"
    },
    "養": {
        "zhuyin": "ㄧㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "raise, keep, support, cultivate"
    },
    "樣子": {
        "zhuyin": "ㄧㄤˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "a look"
    },
    "要求": {
        "zhuyin": "ㄧㄠˋ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "requirment"
    },
    "藥": {
        "zhuyin": "ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "drug"
    },
    "藥店": {
        "zhuyin": "ㄧㄠˋ ㄉㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pharmacy"
    },
    "藥片": {
        "zhuyin": "ㄧㄠˋ ㄆㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pill"
    },
    "藥水": {
        "zhuyin": "ㄧㄠˋ ㄕㄨㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "liquid medicine"
    },
    "也許": {
        "zhuyin": "ㄧㄝˇ ㄒㄩˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "perhaps"
    },
    "夜": {
        "zhuyin": "ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "night"
    },
    "夜裡": {
        "zhuyin": "ㄧㄝˋ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at night"
    },
    "一部分": {
        "zhuyin": "ㄧ ㄅㄨˋ ㄈㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "a part, a portion"
    },
    "一定": {
        "zhuyin": "ㄧ ㄉㄧㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "certain"
    },
    "一共": {
        "zhuyin": "ㄧ ㄍㄨㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "altogether"
    },
    "一會兒": {
        "zhuyin": "ㄧ ㄏㄨㄟˋ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "awhile, in a moment, presently"
    },
    "一路平安": {
        "zhuyin": "ㄧ ㄌㄨˋ ㄆㄧㄥˊ ㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "safe journey, have a pleasane journey"
    },
    "一路順風": {
        "zhuyin": "ㄧ ㄌㄨˋ ㄕㄨㄣˋ ㄈㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bon voyage"
    },
    "已經": {
        "zhuyin": "ㄧˇ ㄐㄧㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "already"
    },
    "以後": {
        "zhuyin": "ㄧˇ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "after, later on, afterwards, later"
    },
    "以前": {
        "zhuyin": "ㄧˇ ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "before"
    },
    "以上": {
        "zhuyin": "ㄧˇ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "above, over"
    },
    "以外": {
        "zhuyin": "ㄧˇ ㄨㄞˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "beyond, outside, other than, except"
    },
    "以為": {
        "zhuyin": "ㄧˇ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "think"
    },
    "以下": {
        "zhuyin": "ㄧˇ ㄒㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "below, under"
    },
    "一般": {
        "zhuyin": "ㄧ ㄅㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "commonly"
    },
    "一點點": {
        "zhuyin": "ㄧ ㄉㄧㄢˇ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "a little bit"
    },
    "一生": {
        "zhuyin": "ㄧ ㄕㄥ",
        "pinyin": "",
        "level": "HSK2",
        "english": "all one's life, lifetime"
    },
    "一直": {
        "zhuyin": "ㄧ ㄓˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "always"
    },
    "億": {
        "zhuyin": "ㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "billion"
    },
    "意見": {
        "zhuyin": "ㄧˋ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "opinion"
    },
    "意思": {
        "zhuyin": "ㄧˋ ㄙ",
        "pinyin": "",
        "level": "HSK2",
        "english": "meaining"
    },
    "因為": {
        "zhuyin": "ㄧㄣ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "because"
    },
    "陰": {
        "zhuyin": "ㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "yin"
    },
    "陰天": {
        "zhuyin": "ㄧㄣ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cloudy day, overcast day"
    },
    "音節": {
        "zhuyin": "ㄧㄣ ㄐㄧㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "syllable"
    },
    "音樂": {
        "zhuyin": "ㄧㄣ ㄩㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "music"
    },
    "音樂會": {
        "zhuyin": "ㄧㄣ ㄩㄝˋ ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "concert"
    },
    "銀行": {
        "zhuyin": "ㄧㄣˊ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bank"
    },
    "銀行卡": {
        "zhuyin": "ㄧㄣˊ ㄒㄧㄥˊ ㄎㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bank card"
    },
    "應該": {
        "zhuyin": "ㄧㄥ ㄍㄞ",
        "pinyin": "",
        "level": "HSK2",
        "english": "should"
    },
    "英文": {
        "zhuyin": "ㄧㄥ ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "english"
    },
    "英語": {
        "zhuyin": "ㄧㄥ ㄩˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "english"
    },
    "影片": {
        "zhuyin": "ㄧㄥˇ ㄆㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "film, movie"
    },
    "影響": {
        "zhuyin": "ㄧㄥˇ ㄒㄧㄤˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "influence"
    },
    "永遠": {
        "zhuyin": "ㄩㄥˇ ㄩㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "forever"
    },
    // 680/772 done
    "油": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "oil, fat, grease"
    },
    "遊客": {
        "zhuyin": "ㄧㄡˊ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "tourist, visitor"
    },
    "友好": {
        "zhuyin": "ㄧㄡˇ ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "friendly"
    },
    "有空兒": {
        "zhuyin": "ㄧㄡˇ ㄎㄨㄥ ㄦˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be free, at leisure"
    },
    "有人": {
        "zhuyin": "ㄧㄡˇ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "someone, there's someone"
    },
    "有意思": {
        "zhuyin": "ㄧㄡˇ ㄧˋ ㄙ",
        "pinyin": "",
        "level": "HSK2",
        "english": "interesting"
    },
    "又": {
        "zhuyin": "ㄧㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "also"
    },
    "魚": {
        "zhuyin": "ㄩˊ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "fish"
    },
    "語言": {
        "zhuyin": "ㄩˇ ㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "language"
    },
    "原來": {
        "zhuyin": "ㄩㄢˊ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "original"
    },
    "原因": {
        "zhuyin": "ㄩㄢˊ ㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "reason"
    },
    "院": {
        "zhuyin": "ㄩㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "yard, compound, courtyard, college"
    },
    "院長": {
        "zhuyin": "ㄩㄢˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dean"
    },
    "院子": {
        "zhuyin": "ㄩㄢˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "courtyard, yard"
    },
    "願意": {
        "zhuyin": "ㄩㄢˋ ㄧˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be willing"
    },
    "月份": {
        "zhuyin": "ㄩㄝˋ ㄈㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "month"
    },
    "月亮": {
        "zhuyin": "ㄩㄝˋ ㄌㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "moon"
    },
    "越": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "the more"
    },
    "越來越": {
        "zhuyin": "ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "more and more"
    },
    "雲": {
        "zhuyin": "ㄩㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cloud"
    },
    "運動": {
        "zhuyin": "ㄩㄣˋ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "motion"
    },
    "咱": {
        "zhuyin": "ㄗㄢˊ ",
        "pinyin": "",
        "level": "HSK2",
        "english": "we, us"
    },
    "咱們": {
        "zhuyin": "ㄗㄢˊ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "we"
    },
    "臟": {
        "zhuyin": "ㄗㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dirty"
    },
    "早餐": {
        "zhuyin": "ㄗㄠˇ ㄘㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "breakfast"
    },
    "早晨": {
        "zhuyin": "ㄗㄠˇ ㄔㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "morning"
    },
    "早就": {
        "zhuyin": "ㄗㄠˇ ㄐㄧㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "long since"
    },
    "怎麼辦": {
        "zhuyin": "ㄗㄣˇ ㄇㄜ˙ ㄅㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "how to, what to do"
    },
    "怎麼樣": {
        "zhuyin": "ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "how about"
    },
    "怎樣": {
        "zhuyin": "ㄗㄣˇ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "how"
    },
    "占": {
        "zhuyin": "ㄓㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "occupy"
    },
    "站": {
        "zhuyin": "ㄓㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stand, halt, stop"
    },
    "站住": {
        "zhuyin": "ㄓㄢˋ ㄓㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "stop, halt"
    },
    "長": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "grow"
    },
    "長大": {
        "zhuyin": "ㄔㄤˊ ㄉㄚˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "grow up"
    },
    "找出": {
        "zhuyin": "ㄓㄠˇ ㄔㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "find out"
    },
    "照顧": {
        "zhuyin": "ㄓㄠˋ ㄍㄨˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "look after"
    },
    "照片": {
        "zhuyin": "ㄓㄠˋ ㄆㄧㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "photo"
    },
    "照相": {
        "zhuyin": "ㄓㄠˋ ㄒㄧㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "take a picture, photograph"
    },
    "這麼": {
        "zhuyin": "ㄓㄜˋ ㄇㄜ˙",
        "pinyin": "",
        "level": "HSK2",
        "english": "so, such,, this way, like this"
    },
    "這時候": {
        "zhuyin": "ㄓㄜˋ ㄕˊ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "at this moment, at this time"
    },
    "這樣": {
        "zhuyin": "ㄓㄜˋ ㄧㄤˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "so, such, this way, like this"
    },
    "真正": {
        "zhuyin": "ㄓㄣ ㄓㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "real"
    },
    "正常": {
        "zhuyin": "ㄓㄥˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "normal"
    },
    "正好": {
        "zhuyin": "ㄓㄥˋ ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "just right"
    },
    "正確": {
        "zhuyin": "ㄓㄥˋ ㄑㄩㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "correct"
    },
    "正是": {
        "zhuyin": "ㄓㄥˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "exactly"
    },
    "直接": {
        "zhuyin": "ㄓˊ ㄐㄧㄝ",
        "pinyin": "",
        "level": "HSK2",
        "english": "direct"
    },
    "只": {
        "zhuyin": "ㄓ",
        "pinyin": "",
        "level": "HSK2",
        "english": "only, just, merely"
    },
    "只能": {
        "zhuyin": "ㄓ ㄋㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "can only"
    },
    "只要": {
        "zhuyin": "ㄓ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "as long as"
    },
    "紙": {
        "zhuyin": "ㄓˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "paper"
    },
    "中餐": {
        "zhuyin": "ㄓㄨㄥ ㄘㄢ",
        "pinyin": "",
        "level": "HSK2",
        "english": "chinese food"
    },
    "中級": {
        "zhuyin": "ㄓㄨㄥ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "intermediate, middle-level"
    },
    "中年": {
        "zhuyin": "ㄓㄨㄥ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "middle-age"
    },
    "中小學": {
        "zhuyin": "ㄓㄨㄥ ㄒㄧㄠˇ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "elementary and middle school"
    },
    "中心": {
        "zhuyin": "ㄓㄨㄥ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK2",
        "english": "core"
    },
    "中醫": {
        "zhuyin": "ㄓㄨㄥˋ ㄧ",
        "pinyin": "",
        "level": "HSK2",
        "english": "chinese medicine"
    },
    "重點": {
        "zhuyin": "ㄓㄨㄥˋ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "a key"
    },
    "重視": {
        "zhuyin": "ㄓㄨㄥˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "attach importance to"
    },
    "周": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "",
        "level": "HSK2",
        "english": "week"
    },
    "周末": {
        "zhuyin": "ㄓㄡ ㄇㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "weekend"
    },
    "周年": {
        "zhuyin": "ㄓㄡ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "anniversary"
    },
    "主人": {
        "zhuyin": "ㄓㄨˇ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "master"
    },
    "主要": {
        "zhuyin": "ㄓㄨˇ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "main"
    },
    "住房": {
        "zhuyin": "ㄓㄨˋ ㄈㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "housing, lodging"
    },
    "住院": {
        "zhuyin": "ㄓㄨˋ ㄩㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "be hospitalized"
    },
    "裝": {
        "zhuyin": "ㄓㄨㄤ",
        "pinyin": "",
        "level": "HSK2",
        "english": "pretend"
    },
    "準確": {
        "zhuyin": "ㄓㄨㄣˇ ㄑㄩㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "accuracy"
    },
    "自己": {
        "zhuyin": "ㄗˋ ㄐㄧˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "own, self"
    },
    "自行車": {
        "zhuyin": "ㄗˋ ㄒㄧㄥˊ ㄔㄜ",
        "pinyin": "",
        "level": "HSK2",
        "english": "bicycle"
    },
    "自由": {
        "zhuyin": "ㄗˋ ㄧㄡˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "free"
    },
    "字典": {
        "zhuyin": "ㄗˋ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "dictionary"
    },
    "走過": {
        "zhuyin": "ㄗㄡˇ ㄍㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "walk through, pass through"
    },
    "走進": {
        "zhuyin": "ㄗㄡˇ ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "walk in"
    },
    "走開": {
        "zhuyin": "ㄗㄡˇ ㄎㄞ",
        "pinyin": "",
        "level": "HSK2",
        "english": "go away"
    },
    "租": {
        "zhuyin": "ㄗㄨ",
        "pinyin": "",
        "level": "HSK2",
        "english": "rent"
    },
    "組": {
        "zhuyin": "ㄗㄨˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "group"
    },
    "組成": {
        "zhuyin": "ㄗㄨˇ ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "form"
    },
    "組長": {
        "zhuyin": "ㄗㄨˇ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "group leader"
    },
    "嘴": {
        "zhuyin": "ㄗㄨㄟˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "mouth"
    },
    "最近": {
        "zhuyin": "ㄗㄨㄟˋ ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "lately"
    },
    "作家": {
        "zhuyin": "ㄗㄨㄛˋ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK2",
        "english": "writer"
    },
    "作文": {
        "zhuyin": "ㄗㄨㄛˋ ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK2",
        "english": "composition"
    },
    "作業": {
        "zhuyin": "ㄗㄨㄛˋ ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "task, homework"
    },
    "作用": {
        "zhuyin": "ㄗㄨㄛˋ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "effect"
    },
    "座": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "seat"
    },
    "座位": {
        "zhuyin": "ㄗㄨㄛˋ ㄨㄟˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "seat"
    },
    "做到": {
        "zhuyin": "ㄗㄨㄛˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "accomplish, acheive"
    },
    "做法": {
        "zhuyin": "ㄗㄨㄛˋ ㄈㄚˇ",
        "pinyin": "",
        "level": "HSK2",
        "english": "practice, behavior, way of doing things"
    },
    "做飯": {
        "zhuyin": "ㄗㄨㄛˋ ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK2",
        "english": "cook, make food"
    },
    // "": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "level": "HSK2",
    //     "english": ""
    // },
};
const HSK3words = {
    // 973 words
    "愛心": {
        "zhuyin": "ㄞˋ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "love"
    },
    "安排": {
        "zhuyin": "ㄢ ㄆㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "arrange"
    },
    "安裝": {
        "zhuyin": "ㄢ ㄓㄨㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "install"
    },
    "按": {
        "zhuyin": "ㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "press, push, check, restrain"
    },
    "按照": {
        "zhuyin": "ㄢˋ ㄓㄠ",
        "pinyin": "",
        "level": "HSK3",
        "english": "according to"
    },
    "把": {
        "zhuyin": "ㄅㄚˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "(particle marking the following noun as a direct object)"
    },
    "把": {
        "zhuyin": "ㄅㄚˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "(measure word for things with handles)"
    },
    "把握": {
        "zhuyin": "ㄅㄚˇ ㄨㄛˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "grasp"
    },
    "白": {
        "zhuyin": "ㄅㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "without results, in vain, waste efforts"
    },
    "白菜": {
        "zhuyin": "ㄅㄞˊ ㄘㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "chinese cabbage"
    },
    "班級": {
        "zhuyin": "ㄅㄢ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "class"
    },
    "搬": {
        "zhuyin": "ㄅㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "turn, move"
    },
    "搬家": {
        "zhuyin": "ㄅㄢ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK3",
        "english": "move houses"
    },
    "板": {
        "zhuyin": "ㄅㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "board, plank, shutter"
    },
    "辦理": {
        "zhuyin": "ㄅㄢˋ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "handle"
    },
    "保": {
        "zhuyin": "ㄅㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "defend, protect, keep, guarantee, ensure"
    },
    "保安": {
        "zhuyin": "ㄅㄠˇ ㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "security guard, public security, ensure safety"
    },
    "保持": {
        "zhuyin": "ㄅㄠˇ ㄔˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "keep"
    },
    "保存": {
        "zhuyin": "ㄅㄠˇ ㄘㄨㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "preservation"
    },
    "保護": {
        "zhuyin": "ㄅㄠˇ ㄏㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "protect"
    },
    "保留": {
        "zhuyin": "ㄅㄠˇ ㄌㄧㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "retain"
    },
    "保險": {
        "zhuyin": "ㄅㄠˇ ㄒㄧㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "insurance"
    },
    "保證": {
        "zhuyin": "ㄅㄠˇ ㄓㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ensure"
    },
    "報": {
        "zhuyin": "ㄅㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "newspaper, periodical, journal, report, telegram"
    },
    "報到": {
        "zhuyin": "ㄅㄠˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "register, check in"
    },
    "報道": {
        "zhuyin": "ㄅㄠˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "report"
    },
    "報告": {
        "zhuyin": "ㄅㄠˋ ㄍㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "presentation"
    },
    "背": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "back"
    },
    "北部": {
        "zhuyin": "ㄅㄟˇ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "north"
    },
    "背": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "back of the body, back side of an object"
    },
    "背後": {
        "zhuyin": "ㄅㄟˋ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "behind, at the back"
    },
    "被": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cover"
    },
    "被子": {
        "zhuyin": "ㄅㄟˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "quilt"
    },
    "本來": {
        "zhuyin": "ㄅㄣˇ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "originally"
    },
    "本領": {
        "zhuyin": "ㄅㄣˇ ㄌㄧㄥˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ability"
    },
    "本事": {
        "zhuyin": "ㄅㄣˇ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "skill"
    },
    "比較": {
        "zhuyin": "ㄅㄧˇ ㄐㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "compare"
    },
    "比例": {
        "zhuyin": "ㄅㄧˇ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "proportion"
    },
    "比賽": {
        "zhuyin": "ㄅㄧˇ ㄙㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "match"
    },
    "必然": {
        "zhuyin": "ㄅㄧˋ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "inevitable"
    },
    "必要": {
        "zhuyin": "ㄅㄧˋ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "necessary"
    },
    "變化": {
        "zhuyin": " ㄅㄧㄢˋ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "change"
    },
    "變為": {
        "zhuyin": "ㄅㄧㄢˋ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "become, turn into, chnage into"
    },
    "標題": {
        "zhuyin": "ㄅㄧㄠ ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "title, heading"
    },
    "標準": {
        "zhuyin": "ㄅㄧㄠ ㄓㄨㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "standard"
    },
    "表達": {
        "zhuyin": "ㄅㄧㄠˇ ㄉㄚˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "expression"
    },
    "表格": {
        "zhuyin": "ㄅㄧㄠˇ ㄍㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "form"
    },
    "表面": {
        "zhuyin": "ㄅㄧㄠˇ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "surface"
    },
    "表明": {
        "zhuyin": "ㄅㄧㄠˇ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "indicate"
    },
    "表現": {
        "zhuyin": "ㄅㄧㄠˇ ㄒㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "performance"
    },
    "表演": {
        "zhuyin": "ㄅㄧㄠˇ ㄧㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "perform"
    },
    "並": {
        "zhuyin": "ㄅㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "and, also, equally, simultaneously"
    },
    "並且": {
        "zhuyin": "ㄅㄧㄥˋ ㄑㄧㄝˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "also"
    },
    "播出": {
        "zhuyin": "ㄅㄛ ㄔㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "broadcast, on the air"
    },
    "播放": {
        "zhuyin": "ㄅㄛ ㄈㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "play"
    },
    "不必": {
        "zhuyin": "ㄅㄨˋ ㄅㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "need not, not have to"
    },
    "不斷": {
        "zhuyin": "ㄅㄨˋ ㄉㄨㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "constantly"
    },
    "不論": {
        "zhuyin": "ㄅㄨˋ ㄌㄨㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "whether, no matter"
    },
    "補": {
        "zhuyin": "ㄅㄨˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "repair, mend, patch, supply, make up for"
    },
    "補充": {
        "zhuyin": "ㄅㄨˇ ㄔㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "supplement"
    },
    "不安": {
        "zhuyin": "ㄅㄨˋ ㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "uneasy"
    },
    "不得不": {
        "zhuyin": "ㄅㄨˋ ㄉㄜˊ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cannot but"
    },
    "不光": {
        "zhuyin": "ㄅㄨˋ ㄍㄨㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "not only"
    },
    "不僅": {
        "zhuyin": "ㄅㄨˋ ㄐㄧㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "not only"
    },
    "布": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cloth"
    },
    "步": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "step, stage, walk, foot"
    },
    "部": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "unit, ministry, department, part, section"
    },
    "部門": {
        "zhuyin": "ㄅㄨˋ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "department"
    },
    "部長": {
        "zhuyin": "ㄅㄨˋ ㄓㄤˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "minister, head of department"
    },
    "才能": {
        "zhuyin": "ㄘㄞˊ ㄋㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "talent, ability, gift"
    },
    "採取": {
        "zhuyin": "ㄘㄞˇ ㄑㄩˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "take, adopt"
    },
    "採用": {
        "zhuyin": "ㄘㄞˇ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "put to use, adopt, use, employ"
    },
    "彩色": {
        "zhuyin": "ㄘㄞˇ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "multicolor, color"
    },
    "曾經": {
        "zhuyin": "ㄘㄥˊ ㄐㄧㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "once"
    },
    "產生": {
        "zhuyin": "ㄔㄢˇ ㄕㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "produce"
    },
    "長城": {
        "zhuyin": "ㄔㄤˊ ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "The Great Wall"
    },
    "長處": {
        "zhuyin": "ㄔㄤˊ ㄔㄨˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "strength, forte, strong point"
    },
    "長期": {
        "zhuyin": "ㄔㄤˊ ㄑㄧ",
        "pinyin": "",
        "level": "HSK3",
        "english": "over a long period of time, long term"
    },
    "廠": {
        "zhuyin": "ㄔㄤˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "factory, mill, plant, works"
    },
    "場合": {
        "zhuyin": "ㄔㄤˊ ㄏㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "occasion"
    },
    "場所": {
        "zhuyin": "ㄔㄤˊ ㄙㄨㄛˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "place"
    },
    "超級": {
        "zhuyin": "ㄔㄠ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "super"
    },
    "朝": {
        "zhuyin": "ㄔㄠˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "towards"
    },
    "吵": {
        "zhuyin": "ㄔㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "noisy"
    },
    "吵架": {
        "zhuyin": "ㄔㄠˇ ㄐㄧㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "quarrel"
    },
    "襯衫": {
        "zhuyin": "ㄔㄣˋ ㄕㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "shirt"
    },
    "襯衣": {
        "zhuyin": "ㄔㄣˋ ㄧ",
        "pinyin": "",
        "level": "HSK3",
        "english": "shirt"
    },
    "稱為": {
        "zhuyin": "ㄔㄥ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "call, be called, be known as"
    },
    "成功": {
        "zhuyin": "ㄔㄥˊ ㄍㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "success"
    },
    "成果": {
        "zhuyin": "ㄔㄥˊ ㄍㄨㄛˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "acheivements"
    },
    "成就": {
        "zhuyin": "ㄔㄥˊ ㄐㄧㄡˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "acheivement"
    },
    "成立": {
        "zhuyin": "ㄔㄥˊ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "establish"
    },
    "成熟": {
        "zhuyin": "ㄔㄥˊ ㄕㄨˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "mature"
    },
    "成員": {
        "zhuyin": "ㄔㄥˊ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "member"
    },
    "成長": {
        "zhuyin": "ㄔㄥˊ ㄓㄤˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "grow up"
    },
    "城": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "city, town"
    },
    "城市": {
        "zhuyin": "ㄔㄥˊ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "city"
    },
    "程度": {
        "zhuyin": "ㄔㄥˊ ㄉㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "degree"
    },
    "持續": {
        "zhuyin": "ㄔˊ ㄒㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "continued"
    },
    "充滿": {
        "zhuyin": "ㄔㄨㄥ ㄇㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "full of"
    },
    "重": {
        "zhuyin": "ㄓㄨㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "heavy"
    },
    "初": {
        "zhuyin": "ㄔㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "beginning, start, basis, at the beginning of"
    },
    "初": {
        "zhuyin": "ㄔㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "prefix, like in 初一: first grade of junior high"
    },
    "初步": {
        "zhuyin": "ㄔㄨ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "preliminary"
    },
    "初級": {
        "zhuyin": "ㄔㄨ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "primary"
    },
    "初中": {
        "zhuyin": "ㄔㄨ ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "junior high school"
    },
    "除了": {
        "zhuyin": "ㄔㄨˊ ㄌㄜ",
        "pinyin": "",
        "level": "HSK3",
        "english": "except"
    },
    "處理": {
        "zhuyin": "ㄔㄨˇ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "handle"
    },
    "傳": {
        "zhuyin": "ㄔㄨㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "pass, pass on, hand down, impart, spread, transmit"
    },
    "傳播": {
        "zhuyin": "ㄔㄨㄢˊ ㄅㄛ",
        "pinyin": "chuánbō",
        "level": "HSK3",
        "english": "spread"
    },
    "傳來": {
        "zhuyin": "ㄔㄨㄢˊ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "came, come through"
    },
    "傳說": {
        "zhuyin": "ㄔㄨㄢˊ ㄕㄨㄛ",
        "pinyin": "",
        "level": "HSK3",
        "english": "Legend"
    },
    "創新": {
        "zhuyin": "ㄔㄨㄤˋ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "innovate"
    },
    "創業": {
        "zhuyin": "ㄔㄨㄤˋ ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "carve out"
    },
    "創造": {
        "zhuyin": "ㄔㄨㄤˋ ㄗㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "create"
    },
    "創作": {
        "zhuyin": "ㄔㄨㄤˋ ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "a literary creation"
    },
    "從來": {
        "zhuyin": "ㄘㄨㄥˊ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "always"
    },
    "從前": {
        "zhuyin": "ㄘㄨㄥˊ ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "before"
    },
    "從事": {
        "zhuyin": "ㄘㄨㄥˊ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "be engaged in"
    },
    "村": {
        "zhuyin": "ㄘㄨㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "village"
    },
    "存": {
        "zhuyin": "ㄘㄨㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "deposit"
    },
    "存在": {
        "zhuyin": "ㄘㄨㄣˊ ㄗㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "existence"
    },
    "錯誤": {
        "zhuyin": "ㄘㄨㄛˋ ㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "error"
    },
    "達到": {
        "zhuyin": "ㄉㄚˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "achieve"
    },
    "打破": {
        "zhuyin": "ㄉㄚˇ ㄆㄛˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "break, smash"
    },
    "打聽": {
        "zhuyin": "ㄉㄚˇ ㄊㄧㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "inquire"
    },
    "大概": {
        "zhuyin": "ㄉㄚˋ ㄍㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "probably"
    },
    "大使館": {
        "zhuyin": "ㄉㄚˋ ㄕˇ ㄍㄨㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "embassy"
    },
    "大約": {
        "zhuyin": "ㄉㄚˋ ㄩㄝ",
        "pinyin": "",
        "level": "HSK3",
        "english": "about"
    },
    "大夫": {
        "zhuyin": "ㄉㄚˋ ㄈㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "doctor"
    },
    "代": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "substitute, replace, take the place of"
    },
    "代表": {
        "zhuyin": "ㄉㄞˋ ㄅㄧㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "representative"
    },
    "代表團": {
        "zhuyin": "ㄉㄞˋ ㄅㄧㄠˇ ㄊㄨㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "delegation, mission, deputation"
    },
    "帶動": {
        "zhuyin": "ㄉㄞˋ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "drive, spur"
    },
    "帶領": {
        "zhuyin": "ㄉㄞˋ ㄌㄧㄥˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "lead"
    },
    "單元": {
        "zhuyin": "ㄉㄢ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "unit"
    },
    "當初": {
        "zhuyin": "ㄉㄤ ㄔㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "original"
    },
    "當地": {
        "zhuyin": "ㄉㄤ ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "local"
    },
    "當然": {
        "zhuyin": "ㄉㄤ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "of course"
    },
    "當中": {
        "zhuyin": "ㄉㄤ ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "among, in the middle, in the center"
    },
    "刀": {
        "zhuyin": "ㄉㄠ",
        "pinyin": "",
        "level": "HSK3",
        "english": "knife"
    },
    "導演": {
        "zhuyin": "ㄉㄠˇ ㄧㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "director"
    },
    "到達": {
        "zhuyin": "ㄉㄠˋ ㄉㄚˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "arrive"
    },
    "到底": {
        "zhuyin": "ㄉㄠˋ ㄉㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "to the end"
    },
    "得分": {
        "zhuyin": "ㄉㄜˊ ㄈㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "score"
    },
    "等待": {
        "zhuyin": "ㄉㄥˇ ㄉㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "wait for"
    },
    "底下": {
        "zhuyin": "ㄉㄧˇ ㄒㄧㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "under, beneath, below"
    },
    "地區": {
        "zhuyin": "ㄉㄧˋ ㄑㄩ",
        "pinyin": "",
        "level": "HSK3",
        "english": "region"
    },
    "電視劇": {
        "zhuyin": "ㄉㄧㄢˋ ㄕˋ ㄐㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "tv series, tv drama"
    },
    "電視台": {
        "zhuyin": "ㄉㄧㄢˋ ㄕˋ ㄊㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "tv station"
    },
    "電台": {
        "zhuyin": "ㄉㄧㄢˋ ㄊㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "radio station"
    },
    "電子郵件": {
        "zhuyin": "ㄉㄧㄢˋ ㄗˇ ㄧㄡˊ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "e-mail"
    },
    "調": {
        "zhuyin": "ㄉㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "transfer, shift, move"
    },
    "調查": {
        "zhuyin": "ㄉㄧㄠˋ ㄔㄚˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "investigation"
    },
    "訂": {
        "zhuyin": "ㄉㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "conclude, draw up, order, revise"
    },
    "定期": {
        "zhuyin": "ㄉㄧㄥˋ ㄑㄧ",
        "pinyin": "",
        "level": "HSK3",
        "english": "regular"
    },
    "東部": {
        "zhuyin": "ㄉㄨㄥ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "east"
    },
    "動力": {
        "zhuyin": "ㄉㄨㄥˋ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "power, motivation"
    },
    "動人": {
        "zhuyin": "ㄉㄨㄥˋ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "moving, touching"
    },
    "讀者": {
        "zhuyin": "ㄉㄨˊ ㄓㄜˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "reader"
    },
    "短處": {
        "zhuyin": "ㄉㄨㄢˇ ㄔㄨˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "shortcoming, demerit"
    },
    "短褲": {
        "zhuyin": "ㄉㄨㄢˇ ㄎㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "shorts"
    },
    "短期": {
        "zhuyin": "ㄉㄨㄢˇ ㄑㄧ",
        "pinyin": "",
        "level": "HSK3",
        "english": "short term"
    },
    "斷": {
        "zhuyin": "ㄉㄨㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "break"
    },
    "隊員": {
        "zhuyin": "ㄉㄨㄟˋ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "team member"
    },
    "對待": {
        "zhuyin": "ㄉㄨㄟˋ ㄉㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "treat"
    },
    "對方": {
        "zhuyin": "ㄉㄨㄟˋ ㄈㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "other party"
    },
    "對手": {
        "zhuyin": "ㄉㄨㄟˋ ㄕㄡˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "opponent"
    },
    "對象": {
        "zhuyin": "ㄉㄨㄟˋ ㄒㄧㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "object"
    },
    "頓": {
        "zhuyin": "ㄉㄨㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "meal"
    },
    "發表": {
        "zhuyin": "ㄈㄚ ㄅㄧㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "publish"
    },
    "發出": {
        "zhuyin": "ㄈㄚ ㄔㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "issue, send out, give off, emit"
    },
    "發達": {
        "zhuyin": "ㄈㄚ ㄉㄚˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "developed"
    },
    "發動": {
        "zhuyin": "ㄈㄚ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "launch"
    },
    "發明": {
        "zhuyin": "ㄈㄚ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "invention"
    },
    "發生": {
        "zhuyin": "ㄈㄚ ㄕㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "happen"
    },
    "發送": {
        "zhuyin": "ㄈㄚ ㄙㄨㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "send, transmit, dispatch, ship, forward"
    },
    "發言": {
        "zhuyin": "ㄈㄚ ㄧㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "speak"
    },
    "發展": {
        "zhuyin": "ㄈㄚ ㄓㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "development"
    },
    "反對": {
        "zhuyin": "ㄈㄢˇ ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "opposition"
    },
    "反覆": {
        "zhuyin": "ㄈㄢˇ ㄈㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "repeatedly"
    },
    "反應": {
        "zhuyin": "ㄈㄢˇ ㄧㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "reaction"
    },
    "反正": {
        "zhuyin": "ㄈㄢˇ ㄓㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "anyways"
    },
    "範圍": {
        "zhuyin": "ㄈㄢˋ ㄨㄟˊ ",
        "pinyin": "",
        "level": "HSK3",
        "english": "range"
    },
    "方式": {
        "zhuyin": "ㄈㄤ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "mode"
    },
    "防": {
        "zhuyin": "ㄈㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "guard against, defend"
    },
    "防止": {
        "zhuyin": "ㄈㄤˊ ㄓˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "prevent"
    },
    "房東": {
        "zhuyin": "ㄈㄤˊ ㄉㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "landlord"
    },
    "房屋": {
        "zhuyin": "ㄈㄤˊ ㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "houses, buildings"
    },
    "房租": {
        "zhuyin": "ㄈㄤˊ ㄗㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "rent"
    },
    "訪問": {
        "zhuyin": "ㄈㄤˇ ㄨㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "visit"
    },
    "放到": {
        "zhuyin": "ㄈㄤˋ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "put to, put into"
    },
    "飛行": {
        "zhuyin": "ㄈㄟ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "flight, flying"
    },
    "費": {
        "zhuyin": "ㄈㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fee, cost"
    },
    "費用": {
        "zhuyin": "ㄈㄟˋ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cost, expenses"
    },
    "分別": {
        "zhuyin": "ㄈㄣ ㄅㄧㄝˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "part"
    },
    "分配": {
        "zhuyin": "ㄈㄣ ㄆㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "distribution"
    },
    "分組": {
        "zhuyin": "ㄈㄣ ㄗㄨˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "grouping"
    },
    "豐富": {
        "zhuyin": "ㄈㄥ ㄈㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "rich"
    },
    "風險": {
        "zhuyin": "ㄈㄥ ㄒㄧㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "risk"
    },
    "否定": {
        "zhuyin": "ㄈㄡˇ ㄉㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "negative"
    },
    "否認": {
        "zhuyin": "ㄈㄡˇ ㄖㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "deny"
    },
    "服裝": {
        "zhuyin": "ㄈㄨˊ ㄓㄨㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "costume, dress"
    },
    "福": {
        "zhuyin": "ㄈㄨˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "blessing, good fortune"
    },
    "父母": {
        "zhuyin": "ㄈㄨˋ ㄇㄨˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "father and mother, parents"
    },
    "父親": {
        "zhuyin": "ㄈㄨˋ ㄑㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "father"
    },
    "付": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "pay, commit, hand over"
    },
    "負責": {
        "zhuyin": "ㄈㄨˋ ㄗㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "be responsible for"
    },
    "複印": {
        "zhuyin": "ㄈㄨˋ ㄧㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "to copy"
    },
    "複雜": {
        "zhuyin": "ㄈㄨˋ ㄗㄚˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "complex"
    },
    "富": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "rich"
    },
    "改進": {
        "zhuyin": "ㄍㄞˇ ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "improvement"
    },
    "改造": {
        "zhuyin": "ㄍㄞˇ ㄗㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "transform, reform"
    },
    "概念": {
        "zhuyin": "ㄍㄞˋ ㄋㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "concept"
    },
    "趕": {
        "zhuyin": "ㄍㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "catch up with"
    },
    "趕到": {
        "zhuyin": "ㄍㄢˇ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "arrived, get to"
    },
    "趕緊": {
        "zhuyin": "ㄍㄢˇ ㄐㄧㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "quickly"
    },
    "趕快": {
        "zhuyin": "ㄍㄢˇ ㄎㄨㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "come on"
    },
    "敢": {
        "zhuyin": "ㄍㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "dare"
    },
    "感冒": {
        "zhuyin": "ㄍㄢˇ ㄇㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cold"
    },
    "感情": {
        "zhuyin": "ㄍㄢˇ ㄑㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "feeling"
    },
    "感受": {
        "zhuyin": "ㄍㄢˇ ㄕㄡˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "feel"
    },
    "幹嗎": {
        "zhuyin": "ㄍㄢ ㄇㄚˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "why"
    },
    "高速": {
        "zhuyin": "ㄍㄠ ㄙㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "high speed"
    },
    "高速公路": {
        "zhuyin": "ㄍㄠ ㄙㄨˋ ㄍㄨㄥ ㄌㄨˋ ",
        "pinyin": "",
        "level": "HSK3",
        "english": "expressway"
    },
    "告別": {
        "zhuyin": "ㄍㄠˋ ㄅㄧㄝˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "farewell"
    },
    "歌迷": {
        "zhuyin": "ㄍㄜ ㄇㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fan"
    },
    "歌聲": {
        "zhuyin": "ㄍㄜ ㄕㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "singing"
    },
    "歌手": {
        "zhuyin": "ㄍㄜ ㄕㄡˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "singer, vocalist"
    },
    "個人": {
        "zhuyin": "ㄍㄜˋ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "personal"
    },
    "個性": {
        "zhuyin": "ㄍㄜˋ ㄒㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "personality"
    },
    "各": {
        "zhuyin": "ㄍㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "various"
    },
    "各地": {
        "zhuyin": "ㄍㄜˋ ㄉㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "various regions, everywhere"
    },
    "各位": {
        "zhuyin": "ㄍㄜˋ ㄨㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "everybody"
    },
    "各種": {
        "zhuyin": "ㄍㄜˋ ㄓㄨㄥˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "all kinds, various, every kind"
    },
    "各自": {
        "zhuyin": "ㄍㄜˋ ㄗˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "each"
    },
    "根本": {
        "zhuyin": "ㄍㄣ ㄅㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "at all"
    },
    "更加": {
        "zhuyin": "ㄍㄥ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK3",
        "english": "more, even more"
    },
    "工廠": {
        "zhuyin": "ㄍㄨㄥ ㄔㄤˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "factory"
    },
    "工程師": {
        "zhuyin": "ㄍㄨㄥ ㄔㄥˊ ㄕ",
        "pinyin": "",
        "level": "HSK3",
        "english": "engineer"
    },
    "工夫": {
        "zhuyin": "ㄍㄨㄥ ㄈㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "time"
    },
    "工具": {
        "zhuyin": "ㄍㄨㄥ ㄐㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "tool"
    },
    "工業": {
        "zhuyin": "ㄍㄨㄥ ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "industry"
    },
    "工資": {
        "zhuyin": "ㄍㄨㄥ ㄗ",
        "pinyin": "",
        "level": "HSK3",
        "english": "wages"
    },
    "公布": {
        "zhuyin": "ㄍㄨㄥ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "publish"
    },
    "公共": {
        "zhuyin": "ㄍㄨㄥ ㄍㄨㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "public, common, community"
    },
    "公開": {
        "zhuyin": "ㄍㄨㄥ ㄎㄞ",
        "pinyin": "",
        "level": "HSK3",
        "english": "open"
    },
    "公民": {
        "zhuyin": "ㄍㄨㄥ ㄇㄧㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "citizen"
    },
    "公務員": {
        "zhuyin": "ㄍㄨㄥ ㄨˋ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "civil servant, public functionary"
    },
    "功夫": {
        "zhuyin": "ㄍㄨㄥ ㄈㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "kungfu"
    },
    "功課": {
        "zhuyin": "ㄍㄨㄥ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "homework, schoolwork, classwork"
    },
    "功能": {
        "zhuyin": "ㄍㄨㄥ ㄋㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "function"
    },
    "共同": {
        "zhuyin": "ㄍㄨㄥˋ ㄊㄨㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "common"
    },
    "共有": {
        "zhuyin": "ㄍㄨㄥˋ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "have altogether, share, owned by all"
    },
    "姑娘": {
        "zhuyin": "ㄍㄨ ㄋㄧㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "girl"
    },
    "古": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ancient, old"
    },
    "古代": {
        "zhuyin": "ㄍㄨˇ ㄉㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ancient"
    },
    "故鄉": {
        "zhuyin": "ㄍㄨˋ ㄒㄧㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "hometown"
    },
    "掛": {
        "zhuyin": "ㄍㄨㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "hang"
    },
    "關係": {
        "zhuyin": "ㄍㄨㄢ ㄒㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "relationship"
    },
    "關注": {
        "zhuyin": "ㄍㄨㄢ ㄓㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "attention, follow w/ interest, pay close attention"
    },
    "觀察": {
        "zhuyin": "ㄍㄨㄢ ㄔㄚˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "observation"
    },
    "觀看": {
        "zhuyin": "ㄍㄨㄢ ㄎㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "watch, view"
    },
    "觀念": {
        "zhuyin": "ㄍㄨㄢ ㄋㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "concept"
    },
    "觀眾": {
        "zhuyin": "ㄍㄨㄢ ㄓㄨㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "audience"
    },
    "管": {
        "zhuyin": "ㄍㄨㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "control, be in charge of, manage, run"
    },
    "管理": {
        "zhuyin": "ㄍㄨㄢˇ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "administration"
    },
    "光": {
        "zhuyin": "ㄍㄨㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "light"
    },
    "光明": {
        "zhuyin": "ㄍㄨㄤ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "light"
    },
    "廣播": {
        "zhuyin": "ㄍㄨㄤˇ ㄅㄛ",
        "pinyin": "",
        "level": "HSK3",
        "english": "radio broadcast"
    },
    "廣大": {
        "zhuyin": "ㄍㄨㄤˇ ㄉㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "vast"
    },
    "規定": {
        "zhuyin": "ㄍㄨㄟ ㄉㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "regulations"
    },
    "規範": {
        "zhuyin": "ㄍㄨㄟ ㄈㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "rule, criterion"
    },
    "國內": {
        "zhuyin": "ㄍㄨㄛˊ ㄋㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "domestic, internal"
    },
    "國慶": {
        "zhuyin": "ㄍㄨㄛˊ ㄑㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "national day"
    },
    "果然": {
        "zhuyin": "ㄍㄨㄛˇ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sure enough"
    },
    "果汁": {
        "zhuyin": "ㄍㄨㄛˇ ㄓ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fruit juice"
    },
    "過程": {
        "zhuyin": "ㄍㄨㄛˋ ㄔㄥˊ ",
        "pinyin": "",
        "level": "HSK3",
        "english": "process"
    },
    "過去": {
        "zhuyin": "ㄍㄨㄛˋ ㄑㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "past, old, foretime"
    },
    "哈哈": {
        "zhuyin": "ㄏㄚ ㄏㄚ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ha ha"
    },
    "海關": {
        "zhuyin": "ㄏㄞˇ ㄍㄨㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "customs"
    },
    "害怕": {
        "zhuyin": "ㄏㄞˋ ㄆㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fear"
    },
    "行": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "that's ok"
    },
    "好好": {
        "zhuyin": " ㄏㄠˇ ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "really good, really nice"
    },
    "好奇": {
        "zhuyin": "ㄏㄠˇ ㄑㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "be curious"
    },
    "合": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "close, shut, be equal to, add up to, join"
    },
    "合法": {
        "zhuyin": "ㄏㄜˊ ㄈㄚˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "legitimate"
    },
    "合格": {
        "zhuyin": "ㄏㄜˊ ㄍㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "qualified"
    },
    "合理": {
        "zhuyin": "ㄏㄜˊ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "reasonable"
    },
    "合作": {
        "zhuyin": " ㄏㄜˊ ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cooperation"
    },
    "和平": {
        "zhuyin": "ㄏㄜˊ ㄆㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "peace"
    },
    "紅茶": {
        "zhuyin": "ㄏㄨㄥˊ ㄔㄚˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "black tea"
    },
    "紅酒": {
        "zhuyin": "ㄏㄨㄥˊ ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "red wine"
    },
    "後果": {
        "zhuyin": "ㄏㄡˋ ㄍㄨㄛˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "consequence"
    },
    "後面": {
        "zhuyin": "ㄏㄡˋ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "behind"
    },
    "後年": {
        "zhuyin": "ㄏㄡˋ ㄋㄧㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "the year after next"
    },
    "互聯網": {
        "zhuyin": "ㄏㄨˋ ㄌㄧㄢˊ ㄨㄤˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "internet"
    },
    "互相": {
        "zhuyin": "ㄏㄨˋ ㄒㄧㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "each other"
    },
    "划船": {
        "zhuyin": "ㄏㄨㄚˊ ㄔㄨㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "row, paddle a boat, go boating"
    },
    "華人": {
        "zhuyin": "ㄏㄨㄚˊ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ethnic chinese"
    },
    // 300/973 done
    "化": {
        "zhuyin": "ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "suffix(like in 現代化: modernize)"
    },
    "話劇": {
        "zhuyin": "ㄏㄨㄚˋ ㄐㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "drama"
    },
    "話題": {
        "zhuyin": "ㄏㄨㄚˋ ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "topic of conversation"
    },
    "歡樂": {
        "zhuyin": "ㄏㄨㄢ ㄌㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "happy"
    },
    "環": {
        "zhuyin": "ㄏㄨㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ring, loop, link"
    },
    "環保": {
        "zhuyin": "ㄏㄨㄢˊ ㄅㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "environment"
    },
    "環境": {
        "zhuyin": "ㄏㄨㄢˊ ㄐㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "Environment"
    },
    "會議": {
        "zhuyin": "ㄏㄨㄟˋ ㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "meeting"
    },
    "會員": {
        "zhuyin": "ㄏㄨㄟˋ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "membership"
    },
    "活": {
        "zhuyin": "ㄏㄨㄛˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "life, save, work, living, alive"
    },
    "火": {
        "zhuyin": "ㄏㄨㄛˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fire, anger, temper"
    },
    "機器": {
        "zhuyin": "ㄐㄧ ㄑㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "machine"
    },
    "積極": {
        "zhuyin": "ㄐㄧ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "positive"
    },
    "基本": {
        "zhuyin": "ㄐㄧ ㄅㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "basic"
    },
    "基本上": {
        "zhuyin": "ㄐㄧ ㄅㄣˇ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "basically"
    },
    "基礎": {
        "zhuyin": "ㄐㄧ ㄔㄨˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "basics"
    },
    "及時": {
        "zhuyin": "ㄐㄧˊ ㄕˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "timely"
    },
    "...極了": {
        "zhuyin": " ...ㄐㄧˊ ㄌㄧㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "extremely, exceedingly"
    },
    "集體": {
        "zhuyin": "ㄐㄧˊ ㄊㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "collective"
    },
    "集中": {
        "zhuyin": "ㄐㄧˊ ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "focus"
    },
    "計算": {
        "zhuyin": "ㄐㄧˋ ㄙㄨㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "calculation"
    },
    "記錄": {
        "zhuyin": "ㄐㄧˋ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "record"
    },
    "記者": {
        "zhuyin": "ㄐㄧˋ ㄓㄜˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "reporter"
    },
    "紀錄": {
        "zhuyin": "ㄐㄧˋ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "record"
    },
    "紀念": {
        "zhuyin": "ㄐㄧˋ ㄋㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "anniversary"
    },
    "技術": {
        "zhuyin": "ㄐㄧˋ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "technology"
    },
    "繼續": {
        "zhuyin": "ㄐㄧˋ ㄒㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "continue"
    },
    "加工": {
        "zhuyin": "ㄐㄧㄚ ㄍㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "machining"
    },
    "加快": {
        "zhuyin": "ㄐㄧㄚ ㄎㄨㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "speed up, accelerate"
    },
    "加強": {
        "zhuyin": "ㄐㄧㄚ ㄑㄧㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "strengthen, reinforce"
    },
    "傢具": {
        "zhuyin": "ㄐㄧㄚ ㄐㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "furniture"
    },
    "家屬": {
        "zhuyin": "ㄐㄧㄚ ㄕㄨˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "family members"
    },
    "家鄉": {
        "zhuyin": "ㄐㄧㄚ ㄒㄧㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "hometown"
    },
    "價格": {
        "zhuyin": "ㄐㄧㄚˋ ㄍㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "Price"
    },
    "價錢": {
        "zhuyin": "ㄐㄧㄚˋ ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "price"
    },
    "價值": {
        "zhuyin": "ㄐㄧㄚˋ ㄓˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "value"
    },
    "架": {
        "zhuyin": "ㄐㄧㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "frame, rack, shelf, stand"
    },
    "堅持": {
        "zhuyin": "ㄐㄧㄢ ㄔˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "insist"
    },
    "堅決": {
        "zhuyin": "ㄐㄧㄢ ㄐㄩㄝˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "frim"
    },
    "堅強": {
        "zhuyin": "ㄐㄧㄢ ㄑㄧㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "firm"
    },
    "簡單": {
        "zhuyin": "ㄐㄧㄢˇ ㄉㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "simple"
    },
    "簡直": {
        "zhuyin": "ㄐㄧㄢˇ ㄓˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "simply"
    },
    "建": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "build, construct, erect, establish, set up"
    },
    "建成": {
        "zhuyin": "ㄐㄧㄢˋ ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "built up"
    },
    "建立": {
        "zhuyin": "ㄐㄧㄢˋ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "establish"
    },
    "建設": {
        "zhuyin": "ㄐㄧㄢˋ ㄕㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "build"
    },
    "建議": {
        "zhuyin": "ㄐㄧㄢˋ ㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "propposal"
    },
    "將近": {
        "zhuyin": "ㄐㄧㄤ ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "nearly"
    },
    "將來": {
        "zhuyin": "ㄐㄧㄤ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "future"
    },
    "交費": {
        "zhuyin": "ㄐㄧㄠ ㄈㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "pay"
    },
    "交警": {
        "zhuyin": "ㄐㄧㄠ ㄐㄧㄥˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "traffic police"
    },
    "交流": {
        "zhuyin": "ㄐㄧㄠ ㄌㄧㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "communication"
    },
    "交往": {
        "zhuyin": "ㄐㄧㄠ ㄨㄤˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "affiliate with"
    },
    "交易": {
        "zhuyin": "ㄐㄧㄠ ㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "transaction"
    },
    "叫": {
        "zhuyin": "ㄐㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "(preposition)"
    },
    "較": {
        "zhuyin": "ㄐㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "compare, comparitively, relatively, fairly, quite rather"
    },
    "教材": {
        "zhuyin": "ㄐㄧㄠˋ ㄘㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "teaching material"
    },
    "教練": {
        "zhuyin": "ㄐㄧㄠˋ ㄌㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "coach"
    },
    "結實": {
        "zhuyin": "ㄐㄧㄝˊ ㄕˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "strong"
    },
    "接待": {
        "zhuyin": "ㄐㄧㄝ ㄉㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "reception"
    },
    "接近": {
        "zhuyin": "ㄐㄧㄝ ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "near"
    },
    "節約": {
        "zhuyin": "ㄐㄧㄝˊ ㄩㄝ",
        "pinyin": "",
        "level": "HSK3",
        "english": "save"
    },
    "結合": {
        "zhuyin": "ㄐㄧㄝˊ ㄏㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "combination"
    },
    "結婚": {
        "zhuyin": "ㄐㄧㄝˊ ㄏㄨㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "marry"
    },
    "結束": {
        "zhuyin": "ㄐㄧㄝˊ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "end"
    },
    "解決": {
        "zhuyin": "ㄐㄧㄝˇ ㄐㄩㄝˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "solve"
    },
    "解開": {
        "zhuyin": "ㄐㄧㄝˇ ㄎㄞ",
        "pinyin": "",
        "level": "HSK3",
        "english": "undo, untie, unfasten, unbutton"
    },
    "金": {
        "zhuyin": "ㄐㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "gold"
    },
    "金牌": {
        "zhuyin": "ㄐㄧㄣ ㄆㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "gold metal"
    },
    "僅": {
        "zhuyin": "ㄐㄧㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "only, merely, barely"
    },
    "僅僅": {
        "zhuyin": "ㄐㄧㄣˇ ㄐㄧㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "only, merely, barely"
    },
    "盡量": {
        "zhuyin": "ㄐㄧㄣˋ ㄌㄧㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "as far as possible"
    },
    "緊": {
        "zhuyin": "ㄐㄧㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "tight, close, strict, urgent"
    },
    "緊急": {
        "zhuyin": "ㄐㄧㄣˇ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "urgent"
    },
    "緊張": {
        "zhuyin": "ㄐㄧㄣˇ ㄓㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "nervous"
    },
    "進步": {
        "zhuyin": "ㄐㄧㄣˋ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "progress"
    },
    "進一步": {
        "zhuyin": "ㄐㄧㄣˋ ㄧ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "go a step further"
    },
    "進展": {
        "zhuyin": "ㄐㄧㄣˋ ㄓㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "evolve, get along"
    },
    "近期": {
        "zhuyin": "ㄐㄧㄣˋ ㄑㄧ",
        "pinyin": "",
        "level": "HSK3",
        "english": "recent"
    },
    "京劇": {
        "zhuyin": "ㄐㄧㄥ ㄐㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "beijing opera"
    },
    "經濟": {
        "zhuyin": "ㄐㄧㄥ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "economics"
    },
    "經歷": {
        "zhuyin": "ㄐㄧㄥ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "experience"
    },
    "經驗": {
        "zhuyin": "ㄐㄧㄥ ㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "experience"
    },
    "經營": {
        "zhuyin": "ㄐㄧㄥ ㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "management"
    },
    "精彩": {
        "zhuyin": "ㄐㄧㄥ ㄘㄞˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "marvellous"
    },
    "精神": {
        "zhuyin": "ㄐㄧㄥ ㄕㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "spirit, mind"
    },
    "精神": {
        "zhuyin": "ㄐㄧㄥ ㄕㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "lively, vigour"
    },
    "景色": {
        "zhuyin": "ㄐㄧㄥˇ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "scenery"
    },
    "警察": {
        "zhuyin": "ㄐㄧㄥˇ ㄔㄚˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "police"
    },
    "靜": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "silent, calm, quiet"
    },
    "久": {
        "zhuyin": "ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "long"
    },
    "舊": {
        "zhuyin": "ㄐㄧㄡˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "used"
    },
    "救": {
        "zhuyin": "ㄐㄧㄡˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "save"
    },
    "就是": {
        "zhuyin": "ㄐㄧㄡˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "precisely, exactly"
    },
    "就業": {
        "zhuyin": "ㄐㄧㄡˋ ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "take up an occupation"
    },
    "舉辦": {
        "zhuyin": "ㄐㄩˇ ㄅㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "hold"
    },
    "具體": {
        "zhuyin": "ㄐㄩˋ ㄊㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "specific"
    },
    "具有": {
        "zhuyin": "ㄐㄩˋ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "possess, have, be provided with"
    },
    "劇場": {
        "zhuyin": "ㄐㄩˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "theater"
    },
    "據說": {
        "zhuyin": "ㄐㄩˋ ㄕㄨㄛ",
        "pinyin": "",
        "level": "HSK3",
        "english": "allegedly"
    },
    // 400/973 done
    "決定": {
        "zhuyin": "ㄐㄩㄝˊ ㄉㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "decision"
    },
    "決賽": {
        "zhuyin": "ㄐㄩㄝˊ ㄙㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "finals"
    },
    "決心": {
        "zhuyin": "ㄐㄩㄝˊ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "determination"
    },
    "絕對": {
        "zhuyin": "ㄐㄩㄝˊ ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "absolutely"
    },
    "咖啡": {
        "zhuyin": "ㄎㄚ ㄈㄟ",
        "pinyin": "",
        "level": "HSK3",
        "english": "coffee"
    },
    "開發": {
        "zhuyin": "ㄎㄞ ㄈㄚ",
        "pinyin": "",
        "level": "HSK3",
        "english": "development"
    },
    "開放": {
        "zhuyin": "ㄎㄞ ㄈㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "to open up"
    },
    "開始": {
        "zhuyin": "ㄎㄞ ㄕˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "start"
    },
    "開業": {
        "zhuyin": "ㄎㄞ ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "start a buisness"
    },
    "開展": {
        "zhuyin": "ㄎㄞ ㄓㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "develop"
    },
    "看起來": {
        "zhuyin": "ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "look like"
    },
    "看上去": {
        "zhuyin": "ㄎㄢˋ ㄕㄤˋ ㄑㄩ",
        "pinyin": "",
        "level": "HSK3",
        "english": "seem"
    },
    "考驗": {
        "zhuyin": "ㄎㄠˇ ㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "test"
    },
    "科技": {
        "zhuyin": "ㄎㄜ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "science and technology"
    },
    "可靠": {
        "zhuyin": "ㄎㄜˇ ㄎㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "reliable"
    },
    "可樂": {
        "zhuyin": "ㄎㄜˇ ㄌㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cola"
    },
    "克服": {
        "zhuyin": "ㄎㄜˋ ㄈㄨˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "overcome"
    },
    "客觀": {
        "zhuyin": "ㄎㄜˋ ㄍㄨㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "objective"
    },
    "課程": {
        "zhuyin": "ㄎㄜˋ ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "curriculum"
    },
    "空": {
        "zhuyin": "ㄎㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "empty"
    },
    "空調": {
        "zhuyin": "ㄎㄨㄥ ㄉㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "air conditioner"
    },
    "恐怕": {
        "zhuyin": "ㄎㄨㄥˇ ㄆㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "I'm afraid"
    },
    "空兒": {
        "zhuyin": "ㄎㄨㄥ ㄦˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "free time"
    },
    "褲子": {
        "zhuyin": "ㄎㄨˋ ㄗˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "trousers"
    },
    "快速": {
        "zhuyin": "ㄎㄨㄞˋ ㄙㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fast, high-speed"
    },
    "困": {
        "zhuyin": "ㄎㄨㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sleepy"
    },
    "困難": {
        "zhuyin": "ㄎㄨㄣˋ ㄋㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "difficulty"
    },
    "浪費": {
        "zhuyin": "ㄌㄤˋ ㄈㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "Waste"
    },
    "老百姓": {
        "zhuyin": "ㄌㄠˇ ㄅㄞˇ ㄒㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ordinary people"
    },
    "老闆": {
        "zhuyin": "ㄌㄠˇ ㄅㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "boss"
    },
    "老太太": {
        "zhuyin": "ㄌㄠˇ ㄊㄞˋ ㄊㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "old lady"
    },
    "老頭兒": {
        "zhuyin": "ㄌㄠˇ ㄊㄡˊ ㄦˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "old man"
    },
    "樂": {
        "zhuyin": "ㄌㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "happy, cheerful, laugh"
    },
    "樂觀": {
        "zhuyin": "ㄌㄜˋ ㄍㄨㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "optimistic"
    },
    "類": {
        "zhuyin": "ㄌㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "class, category, kind, type"
    },
    "類似": {
        "zhuyin": "ㄌㄟˋ ㄙˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "similar"
    },
    "離婚": {
        "zhuyin": "ㄌㄧˊ ㄏㄨㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "divorce"
    },
    "裡面": {
        "zhuyin": "ㄌㄧˇ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "inside, interior"
    },
    "理髮": {
        "zhuyin": "ㄌㄧˇ ㄈㄚ",
        "pinyin": "",
        "level": "HSK3",
        "english": "haircut"
    },
    "理解": {
        "zhuyin": "ㄌㄧˇ ㄐㄧㄝˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "understand"
    },
    "理論": {
        "zhuyin": "ㄌㄧˇ ㄌㄨㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "theory"
    },
    "理由": {
        "zhuyin": "ㄌㄧˇ ㄧㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "reason"
    },
    "力": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "power, force"
    },
    "力量": {
        "zhuyin": "ㄌㄧˋ ㄌㄧㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "power"
    },
    "立刻": {
        "zhuyin": "ㄌㄧˋ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "immediately"
    },
    "利用": {
        "zhuyin": "ㄌㄧˋ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "utilize"
    },
    "連": {
        "zhuyin": "ㄌㄧㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "even"
    },
    "連忙": {
        "zhuyin": "ㄌㄧㄢˊ ㄇㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "hurriedly"
    },
    "連續": {
        "zhuyin": "ㄌㄧㄢˊ ㄒㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "serial"
    },
    "連續劇": {
        "zhuyin": "ㄌㄧㄢˊ ㄒㄩˋ ㄐㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "series, soap opera"
    },
    "聯合": {
        "zhuyin": "ㄌㄧㄢˊ ㄏㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "union"
    },
    "聯合國": {
        "zhuyin": "ㄌㄧㄢˊ ㄏㄜˊ ㄍㄨㄛˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "United Nations"
    },
    "聯繫": {
        "zhuyin": "ㄌㄧㄢˊ ㄒㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "contact"
    },
    "涼水": {
        "zhuyin": "ㄌㄧㄤˊ ㄕㄨㄟˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cold water, unboiled water"
    },
    "領": {
        "zhuyin": "ㄌㄧㄥˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "lead, recieve, get, understand"
    },
    "領導": {
        "zhuyin": "ㄌㄧㄥˇ ㄉㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "leader"
    },
    "領先": {
        "zhuyin": "ㄌㄧㄥˇ ㄒㄧㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "keep ahead"
    },
    "另外": {
        "zhuyin": "ㄌㄧㄥˋ ㄨㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "in addition"
    },
    "另一方面": {
        "zhuyin": "ㄌㄧㄥˋ ㄧ ㄈㄤ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "on the other hand"
    },
    "留學": {
        "zhuyin": "ㄌㄧㄡˊ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "overseas study"
    },
    "龍": {
        "zhuyin": "ㄌㄨㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "dragon"
    },
    "錄": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "record, write down, copy"
    },
    "錄音": {
        "zhuyin": "ㄌㄨˋ ㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sound recording"
    },
    "路線": {
        "zhuyin": "ㄌㄨˋ ㄒㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "path, route, way, line"
    },
    "旅館": {
        "zhuyin": "ㄌㄩˇ ㄍㄨㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "hotal"
    },
    "旅行社": {
        "zhuyin": "ㄌㄩˇ ㄒㄧㄥˊ ㄕㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "travel agency"
    },
    "綠茶": {
        "zhuyin": "ㄌㄩ ㄔㄚˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "green tea"
    },
    "亂": {
        "zhuyin": "ㄌㄨㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "chaos"
    },
    "落後": {
        "zhuyin": "ㄌㄨㄛˋ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "backward"
    },
    "麻煩": {
        "zhuyin": "ㄇㄚˊ ㄈㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "trouble"
    },
    "滿足": {
        "zhuyin": "ㄇㄢˇ ㄗㄨˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "satisfy"
    },
    "慢慢": {
        "zhuyin": "ㄇㄢˋ ㄇㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "slowly"
    },
    "毛": {
        "zhuyin": "ㄇㄠˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "hair, fur, chinese dime, (name char)"
    },
    "毛病": {
        "zhuyin": "ㄇㄠˊ ㄅㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "trouble"
    },
    "沒用": {
        "zhuyin": "ㄇㄟˊ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "useless"
    },
    "媒體": {
        "zhuyin": "ㄇㄟˊ ㄊㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "media"
    },
    "每": {
        "zhuyin": "ㄇㄟˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "each"
    },
    "美": {
        "zhuyin": "ㄇㄟˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "pretty"
    },
    "美好": {
        "zhuyin": "ㄇㄟˇ ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fine, happy, glorious"
    },
    "美麗": {
        "zhuyin": "ㄇㄟˇ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "beautiful"
    },
    "美食": {
        "zhuyin": "ㄇㄟˇ ㄕˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "delicious food, gourmet"
    },
    "美術": {
        "zhuyin": "ㄇㄟˇ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fine arts"
    },
    "美元": {
        "zhuyin": "ㄇㄟˇ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "US dollar"
    },
    "迷": {
        "zhuyin": "ㄇㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fan, confused, be crazy about"
    },
    "米": {
        "zhuyin": "ㄇㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "meter, rice"
    },
    "面對": {
        "zhuyin": "ㄇㄧㄢˋ ㄉㄨㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "face"
    },
    "面積": {
        "zhuyin": "ㄇㄧㄢˋ ㄐㄧ",
        "pinyin": "",
        "level": "HSK3",
        "english": "the measure of area"
    },
    "民間": {
        "zhuyin": "ㄇㄧㄣˊ ㄐㄧㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "nongovernmental"
    },
    "民族": {
        "zhuyin": "ㄇㄧㄣˊ ㄗㄨˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "nation"
    },
    "明確": {
        "zhuyin": "ㄇㄧㄥˊ ㄑㄩㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "to make clear"
    },
    "明顯": {
        "zhuyin": "ㄇㄧㄥˊ ㄒㄧㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "obvious"
    },
    "命運": {
        "zhuyin": "ㄇㄧㄥˋ ㄩㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fate"
    },
    "某": {
        "zhuyin": "ㄇㄡˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "some"
    },
    "母親": {
        "zhuyin": "ㄇㄨˇ ㄑㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "mother"
    },
    "木頭": {
        "zhuyin": "ㄇㄨˋ ㄊㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "wood"
    },
    "目標": {
        "zhuyin": "ㄇㄨˋ ㄅㄧㄠ",
        "pinyin": "",
        "level": "HSK3",
        "english": "target"
    },
    "目前": {
        "zhuyin": "ㄇㄨˋ ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "at present"
    },
    "奶茶": {
        "zhuyin": "ㄋㄞˇ ㄔㄚˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "milk tea"
    },
    // 500/973 done
    "男子": {
        "zhuyin": "ㄋㄢˊ ㄗˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "man, male"
    },
    "南部": {
        "zhuyin": "ㄋㄢˊ ㄅㄨˋ ",
        "pinyin": "",
        "level": "HSK3",
        "english": "south"
    },
    "難道": {
        "zhuyin": "ㄋㄢˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "could it be that..."
    },
    "難度": {
        "zhuyin": "ㄋㄢˊ ㄉㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "difficulty"
    },
    "內": {
        "zhuyin": "ㄋㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "within"
    },
    "內容": {
        "zhuyin": "ㄋㄟˋ ㄖㄨㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "content"
    },
    "內心": {
        "zhuyin": "ㄋㄟˋ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "heart, inner centre"
    },
    "能不能": {
        "zhuyin": "ㄋㄥˊ ㄅㄨˋ ㄋㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "can or can not"
    },
    "能力": {
        "zhuyin": "ㄋㄥˊ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ability"
    },
    "年初": {
        "zhuyin": "ㄋㄧㄢˊ ㄔㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "beginning of the year"
    },
    "年代": {
        "zhuyin": "ㄋㄧㄢˊ ㄉㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "years"
    },
    "年底": {
        "zhuyin": "ㄋㄧㄢˊ ㄉㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "end of the year"
    },
    "年紀": {
        "zhuyin": "ㄋㄧㄢˊ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "age"
    },
    "念": {
        "zhuyin": "ㄋㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "read"
    },
    "牛": {
        "zhuyin": "ㄋㄧㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cattle, ox, cow"
    },
    "農村": {
        "zhuyin": "ㄋㄨㄥˊ ㄘㄨㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "countryside"
    },
    "農民": {
        "zhuyin": "ㄋㄨㄥˊ ㄇㄧㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "farmer"
    },
    "農業": {
        "zhuyin": "ㄋㄨㄥˊ ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "agriculture"
    },
    "女子": {
        "zhuyin": "ㄋㄩˇ ㄗˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "woman, female"
    },
    "暖和": {
        "zhuyin": "ㄋㄨㄢˇ ㄏㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "warm"
    },
    "怕": {
        "zhuyin": "ㄆㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "perhaps, afraid"
    },
    "拍": {
        "zhuyin": "ㄆㄞ",
        "pinyin": "",
        "level": "HSK3",
        "english": "beat"
    },
    "排": {
        "zhuyin": "ㄆㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "arrange, put in order, exclude, rehearse"
    },
    "排名": {
        "zhuyin": "ㄆㄞˊ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "rank"
    },
    "牌子": {
        "zhuyin": "ㄆㄞˊ ㄗˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "brand, trademark, plate, sign"
    },
    "派": {
        "zhuyin": "ㄆㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "send"
    },
    "判斷": {
        "zhuyin": "ㄆㄢˋ ㄉㄨㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "judge"
    },
    "胖": {
        "zhuyin": "ㄆㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fat"
    },
    "跑步": {
        "zhuyin": "ㄆㄠˇ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "run"
    },
    "配": {
        "zhuyin": "ㄆㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "match, mix, join, fit"
    },
    "配合": {
        "zhuyin": "ㄆㄟˋ ㄏㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "coordination"
    },
    "批評": {
        "zhuyin": "ㄆㄧ ㄆㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "criticism"
    },
    "批准": {
        "zhuyin": "ㄆㄧ ㄓㄨㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "approval"
    },
    "皮": {
        "zhuyin": "ㄆㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "skin, leather, fur, cover, sheet"
    },
    "皮包": {
        "zhuyin": "ㄆㄧˊ ㄅㄠ",
        "pinyin": "",
        "level": "HSK3",
        "english": "purse, breifcase, leather bag"
    },
    "啤酒": {
        "zhuyin": "ㄆㄧˊ ㄐㄧㄡˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "beer"
    },
    "票價": {
        "zhuyin": "ㄆㄧㄠˋ ㄐㄧㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ticket price, fare"
    },
    "評價": {
        "zhuyin": "ㄆㄧㄥˊ ㄐㄧㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "evaluation"
    },
    "蘋果": {
        "zhuyin": "ㄆㄧㄥˊ ㄍㄨㄛˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "apple"
    },
    "破": {
        "zhuyin": "ㄆㄛˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "broken"
    },
    "破壞": {
        "zhuyin": "ㄆㄛˋ ㄏㄨㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "destruction"
    },
    "普遍": {
        "zhuyin": "ㄆㄨˇ ㄅㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "universal"
    },
    "普及": {
        "zhuyin": "ㄆㄨˇ ㄐㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "Universal"
    },
    "期": {
        "zhuyin": "ㄑㄧ",
        "pinyin": "",
        "level": "HSK3",
        "english": "period, time, term, expect"
    },
    "齊": {
        "zhuyin": "ㄑㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "together, uniform, neat, be level with"
    },
    "其次": {
        "zhuyin": "ㄑㄧˊ ㄘˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "secondly"
    },
    "其實": {
        "zhuyin": "ㄑㄧˊ ㄕˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "actually"
    },
    "奇怪": {
        "zhuyin": "ㄑㄧˊ ㄍㄨㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "strange"
    },
    "氣候": {
        "zhuyin": "ㄑㄧˋ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "climate"
    },
    "千萬": {
        "zhuyin": "ㄑㄧㄢ ㄨㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "must"
    },
    // 550/973 done
    "前後": {
        "zhuyin": "ㄑㄧㄢˊ ㄏㄡˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "front and back, from start to finish, around"
    },
    "前進": {
        "zhuyin": "ㄑㄧㄢˊ ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "advance, go forward"
    },
    "前面": {
        "zhuyin": "ㄑㄧㄢˊ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "front"
    },
    "前往": {
        "zhuyin": "ㄑㄧㄢˊ ㄨㄤˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "go to, leave for, proceed"
    },
    "強": {
        "zhuyin": "ㄑㄧㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "strong, powerful, better"
    },
    "強大": {
        "zhuyin": "ㄑㄧㄤˊ ㄉㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "powerful, formidable, strong"
    },
    "強調": {
        "zhuyin": "ㄑㄧㄤˊ ㄉㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "emphasize"
    },
    "強烈": {
        "zhuyin": "ㄑㄧㄤˊ ㄌㄧㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "strong"
    },
    "橋": {
        "zhuyin": "ㄑㄧㄠˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "bridge"
    },
    "巧": {
        "zhuyin": "ㄑㄧㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "opportunely, skillful, deceitful"
    },
    "親": {
        "zhuyin": "ㄑㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "dear, close, intimate, relative"
    },
    "親切": {
        "zhuyin": "ㄑㄧㄣ ㄑㄧㄝ",
        "pinyin": "",
        "level": "HSK3",
        "english": "kind"
    },
    "親人": {
        "zhuyin": "ㄑㄧㄣ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "relative"
    },
    "親自": {
        "zhuyin": "ㄑㄧㄣ ㄗˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "personally"
    },
    "情感": {
        "zhuyin": "ㄑㄧㄥˊ ㄍㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "feeling, emotion"
    },
    "情況": {
        "zhuyin": "ㄑㄧㄥˊ ㄎㄨㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "situation"
    },
    "請教": {
        "zhuyin": "ㄑㄧㄥˇ ㄐㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "consult"
    },
    "慶祝": {
        "zhuyin": "ㄑㄧㄥˋ ㄓㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "celebrate"
    },
    "球迷": {
        "zhuyin": "ㄑㄧㄡˊ ㄇㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "(ball game) fans"
    },
    "區": {
        "zhuyin": "ㄑㄩ",
        "pinyin": "",
        "level": "HSK3",
        "english": "area, district, region"
    },
    "區別": {
        "zhuyin": "ㄑㄩ ㄅㄧㄝˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "difference"
    },
    "取消": {
        "zhuyin": "ㄑㄩˇ ㄒㄧㄠ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cancel"
    },
    "去世": {
        "zhuyin": "ㄑㄩˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "death"
    },
    "全面": {
        "zhuyin": "ㄑㄩㄢˊ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "comprehensive"
    },
    "全球": {
        "zhuyin": "ㄑㄩㄢˊ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "global, the whole world"
    },
    "缺": {
        "zhuyin": "ㄑㄩㄝ",
        "pinyin": "",
        "level": "HSK3",
        "english": "be short of, lack"
    },
    "缺點": {
        "zhuyin": "ㄑㄩㄝ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "shortcoming"
    },
    "缺少": {
        "zhuyin": "ㄑㄩㄝ ㄕㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "lack"
    },
    "確保": {
        "zhuyin": "ㄑㄩㄝˋ ㄅㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ensure"
    },
    "確定": {
        "zhuyin": "ㄑㄩㄝˋ ㄉㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "determine"
    },
    "確實": {
        "zhuyin": "ㄑㄩㄝˋ ㄕˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "exactly"
    },
    "裙子": {
        "zhuyin": "ㄑㄩㄣˊ ㄗˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "skirt"
    },
    "群": {
        "zhuyin": "ㄑㄩㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "group"
    },
    "熱愛": {
        "zhuyin": "ㄖㄜˋ ㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ardently love"
    },
    "熱烈": {
        "zhuyin": "ㄖㄜˋ ㄌㄧㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "warm"
    },
    "人才": {
        "zhuyin": "ㄖㄣˊ ㄘㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "talented person"
    },
    "人工": {
        "zhuyin": "ㄖㄣˊ ㄍㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "artificial"
    },
    "人類": {
        "zhuyin": "ㄖㄣˊ ㄌㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "human beings"
    },
    "人民": {
        "zhuyin": "ㄖㄣˊ ㄇㄧㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "people"
    },
    "人民幣": {
        "zhuyin": "ㄖㄣˊ ㄇㄧㄣˊ ㄅㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "RMB, the people's currency"
    },
    "人群": {
        "zhuyin": "ㄖㄣˊ ㄑㄩㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "crowd, throng"
    },
    "人生": {
        "zhuyin": "ㄖㄣˊ ㄕㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "life"
    },
    "人員": {
        "zhuyin": "ㄖㄣˊ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "personnel"
    },
    "認出": {
        "zhuyin": "ㄖㄣˋ ㄔㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "recognize, identify, make out"
    },
    "認得": {
        "zhuyin": "ㄖㄣˋ ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "know, recognize"
    },
    "認可": {
        "zhuyin": "ㄖㄣˋ ㄎㄜˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "certificate, ratify"
    },
    "任": {
        "zhuyin": "ㄖㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "appoint, assign"
    },
    "任": {
        "zhuyin": "ㄖㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "no matter (how, what)"
    },
    "任何": {
        "zhuyin": "ㄖㄣˋ ㄏㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "whatever, any"
    },
    "任務": {
        "zhuyin": "ㄖㄣˋ ㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "task"
    },
    "仍": {
        "zhuyin": "ㄖㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "still, yet, remain"
    },
    "仍然": {
        "zhuyin": "ㄖㄥˊ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "still"
    },
    "日常": {
        "zhuyin": "ㄖˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "daily"
    },
    "容易": {
        "zhuyin": "ㄖㄨㄥˊ ㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "easily"
    },
    "如何": {
        "zhuyin": "ㄖㄨˊ ㄏㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "how"
    },
    "散步": {
        "zhuyin": "ㄙㄢˋ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "take a walk"
    },
    "沙發": {
        "zhuyin": "ㄕㄚ ㄈㄚ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sofa"
    },
    "沙子": {
        "zhuyin": "ㄕㄚ ㄗˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sand, grit"
    },
    "傷": {
        "zhuyin": "ㄕㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "hurt, be harmful, be distressed, get sick of"
    },
    "傷心": {
        "zhuyin": "ㄕㄤ ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sad"
    },
    "商品": {
        "zhuyin": "ㄕㄤ ㄆㄧㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "commodity"
    },
    "商業": {
        "zhuyin": "ㄕㄤ ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "business"
    },
    "上來": {
        "zhuyin": "ㄕㄤˋ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "come up"
    },
    "上面": {
        "zhuyin": "ㄕㄤˋ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "above, on top of"
    },
    "上去": {
        "zhuyin": "ㄕㄤˋ ㄑㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "go up"
    },
    "上升": {
        "zhuyin": "ㄕㄤˋ ㄕㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "rise, go up"
    },
    "上衣": {
        "zhuyin": "ㄕㄤˋ ㄧ",
        "pinyin": "",
        "level": "HSK3",
        "english": "jacket, coat, upper outer garment"
    },
    "設備": {
        "zhuyin": "ㄕㄜˋ ㄅㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "equipment"
    },
    "設計": {
        "zhuyin": "ㄕㄜˋ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "design"
    },
    "設立": {
        "zhuyin": "ㄕㄜˋ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "establish"
    },
    "社會": {
        "zhuyin": "ㄕㄜˋ ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "society"
    },
    "身份證": {
        "zhuyin": "ㄕㄣ ㄈㄣˋ ㄓㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "ID card"
    },
    "深": {
        "zhuyin": "ㄕㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "deep"
    },
    "深刻": {
        "zhuyin": "ㄕㄣ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "profound"
    },
    "深入": {
        "zhuyin": "ㄕㄣ ㄖㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "go deep into, thorough"
    },
    "升": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "rise"
    },
    "生": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "unripe, green, living, raw, unfamilliar"
    },
    "生產": {
        "zhuyin": "ㄕㄥ ㄔㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "production"
    },
    "生存": {
        "zhuyin": "ㄕㄥ ㄘㄨㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "existence"
    },
    "生動": {
        "zhuyin": "ㄕㄥ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "vivid"
    },
    "生命": {
        "zhuyin": "ㄕㄥ ㄇㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "life"
    },
    "生意": {
        "zhuyin": "ㄕㄥ ㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "business"
    },
    "生長": {
        "zhuyin": "ㄕㄥ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "grow"
    },
    "聲明": {
        "zhuyin": "ㄕㄥ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "statement"
    },
    "勝": {
        "zhuyin": "ㄕㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "win, defeat, beat, can bear, be superior"
    },
    "勝利": {
        "zhuyin": "ㄕㄥˋ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "victory"
    },
    "失去": {
        "zhuyin": "ㄕ ㄑㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "lose"
    },
    "石頭": {
        "zhuyin": "ㄕˊ ㄊㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "stone"
    },
    "石油": {
        "zhuyin": "ㄕˊ ㄧㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "petroleum"
    },
    "時": {
        "zhuyin": "ㄕˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "time, times, hour, season, tense"
    },
    "時代": {
        "zhuyin": "ㄕˊ ㄉㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "times"
    },
    "時刻": {
        "zhuyin": "ㄕˊ ㄎㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "time"
    },
    "實際上": {
        "zhuyin": "ㄕˊ ㄐㄧˋ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "actually"
    },
    "實力": {
        "zhuyin": "ㄕˊ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "strength"
    },
    "實行": {
        "zhuyin": "ㄕˊ ㄒㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "implement"
    },
    "實驗": {
        "zhuyin": "ㄕˊ ㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "experiment"
    },
    "實驗室": {
        "zhuyin": "ㄕˊ ㄧㄢˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "laboratory"
    },
    "食品": {
        "zhuyin": "ㄕˊ ㄆㄧㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "food, foodstuffs"
    },
    "使": {
        "zhuyin": "ㄕˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "make"
    },
    "始終": {
        "zhuyin": "ㄕˇ ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "throughout"
    },
    "世紀": {
        "zhuyin": "ㄕˋ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "century"
    },
    "世界": {
        "zhuyin": "ㄕˋ ㄐㄧㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "world"
    },
    "世界盃": {
        "zhuyin": "ㄕˋ ㄐㄧㄝˋ ㄅㄟ",
        "pinyin": "",
        "level": "HSK3",
        "english": "world cup"
    },
    "市場": {
        "zhuyin": "ㄕˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "market"
    },
    "事故": {
        "zhuyin": "ㄕˋ ㄍㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "accident"
    },
    "事件": {
        "zhuyin": "ㄕˋ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "event"
    },
    "事實": {
        "zhuyin": "ㄕˋ ㄕˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fact"
    },
    "事實上": {
        "zhuyin": "ㄕˋ ㄕˊ ㄕㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "in fact, actually"
    },
    "事業": {
        "zhuyin": "ㄕˋ ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "career"
    },
    "試題": {
        "zhuyin": "ㄕˋ ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "test questions"
    },
    "試驗": {
        "zhuyin": "ㄕˋ ㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "test"
    },
    "適合": {
        "zhuyin": "ㄕˋ ㄏㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fit"
    },
    "適應": {
        "zhuyin": "ㄕˋ ㄧㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "adapt"
    },
    "適用": {
        "zhuyin": "ㄕˋ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "be applicable, be suitable"
    },
    "室": {
        "zhuyin": "ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "room"
    },
    //666/972 done
    "收費": {
        "zhuyin": "ㄕㄡ ㄈㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "collect fees, charge"
    },
    "收看": {
        "zhuyin": "ㄕㄡ ㄎㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "watch"
    },
    "收聽": {
        "zhuyin": "ㄕㄡ ㄊㄧㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "listen to, listen in"
    },
    "收音機": {
        "zhuyin": "ㄕㄡ ㄧㄣ ㄐㄧ",
        "pinyin": "",
        "level": "HSK3",
        "english": "radio"
    },
    "手續": {
        "zhuyin": "ㄕㄡˇ ㄒㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "procedures"
    },
    "手指": {
        "zhuyin": "ㄕㄡˇ ㄓˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "finger"
    },
    "首都": {
        "zhuyin": "ㄕㄡˇ ㄉㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "capital"
    },
    "首先": {
        "zhuyin": "ㄕㄡˇ ㄒㄧㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "first"
    },
    "受": {
        "zhuyin": "ㄕㄡˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "be subjective, suffer, receive, accept"
    },
    "受傷": {
        "zhuyin": "ㄕㄡˋ ㄕㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "injured"
    },
    "書架": {
        "zhuyin": "ㄕㄨ ㄐㄧㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "bookshelf"
    },
    "輸": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "lose"
    },
    "輸入": {
        "zhuyin": "ㄕㄨ ㄖㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "import, input"
    },
    "熟人": {
        "zhuyin": "ㄕㄨˊ ㄖㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "acquaintance"
    },
    "屬": {
        "zhuyin": "ㄕㄨˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "belong, be born in the year of(one of the 12 animals)"
    },
    "屬於": {
        "zhuyin": "ㄕㄨˇ ㄩˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "belong to"
    },
    "束": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "beam"
    },
    "數量": {
        "zhuyin": "ㄕㄨˋ ㄌㄧㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "quantity"
    },
    "雙": {
        "zhuyin": "ㄕㄨㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "double"
    },
    "雙方": {
        "zhuyin": "ㄕㄨㄤ ㄈㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "both sides"
    },
    "思想": {
        "zhuyin": "ㄙ ㄒㄧㄤˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "thought"
    },
    "死": {
        "zhuyin": "ㄙˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "die"
    },
    "速度": {
        "zhuyin": "ㄙㄨˋ ㄉㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "speed"
    },
    "隨": {
        "zhuyin": "ㄙㄨㄟˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "follow, comply with, adapt"
    },
    "所": {
        "zhuyin": "ㄙㄨㄛˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "place, office, spot"
    },
    "所長": {
        "zhuyin": "ㄙㄨㄛˇ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "superintendent"
    },
    "台": {
        "zhuyin": "ㄊㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "platform"
    },
    "談": {
        "zhuyin": "ㄊㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "talk"
    },
    "談話": {
        "zhuyin": "ㄊㄢˊ ㄏㄨㄚˋ ",
        "pinyin": "",
        "level": "HSK3",
        "english": "conversation, talk, chat"
    },
    "談判": {
        "zhuyin": "ㄊㄢˊ ㄆㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "negotiation"
    },
    "湯": {
        "zhuyin": "ㄊㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "soup"
    },
    "糖": {
        "zhuyin": "ㄊㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sugar"
    },
    "特色": {
        "zhuyin": "ㄊㄜˋ ㄙㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "characteristic"
    },
    "提前": {
        "zhuyin": "ㄊㄧˊ ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "advance"
    },
    "提問": {
        "zhuyin": "ㄊㄧˊ ㄨㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "put questions to, raise questions"
    },
    "題目": {
        "zhuyin": "ㄊㄧˊ ㄇㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "subject"
    },
    "體會": {
        "zhuyin": "ㄊㄧˇ ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "experience"
    },
    "體現": {
        "zhuyin": "ㄊㄧˇ ㄒㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "reflect"
    },
    "體驗": {
        "zhuyin": "ㄊㄧˇ ㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "experience, taste"
    },
    //705/970 done
    "天空": {
        "zhuyin": "ㄊㄧㄢ ㄎㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sky"
    },
    "甜": {
        "zhuyin": "ㄊㄧㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sweet"
    },
    "調": {
        "zhuyin": "ㄊㄧㄠˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "suit well, mix, adjust, fit in"
    },
    "調整": {
        "zhuyin": "ㄊㄧㄠˊ ㄓㄥˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "adjustment"
    },
    "跳": {
        "zhuyin": "ㄊㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "jump, leap, skip, bounce"
    },
    "跳高": {
        "zhuyin": "ㄊㄧㄠˋ ㄍㄠ",
        "pinyin": "",
        "level": "HSK3",
        "english": "high jump"
    },
    "跳舞": {
        "zhuyin": "ㄊㄧㄠˋ ㄨˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "dance"
    },
    "跳遠": {
        "zhuyin": "ㄊㄧㄠˋ ㄩㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "long jump, broad jump"
    },
    "鐵": {
        "zhuyin": "ㄊㄧㄝˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "iron"
    },
    "鐵路": {
        "zhuyin": "ㄊㄧㄝˇ ㄌㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "railway, railroad"
    },
    "聽力": {
        "zhuyin": "ㄊㄧㄥ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "hearing, aural comprehension"
    },
    "聽眾": {
        "zhuyin": "ㄊㄧㄥ ㄓㄨㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "audience, listeners"
    },
    "停止": {
        "zhuyin": "ㄊㄧㄥˊ ㄓˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "stop, cease, suspend, call off, halt"
    },
    "通常": {
        "zhuyin": "ㄊㄨㄥ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "usually"
    },
    "通信": {
        "zhuyin": "ㄊㄨㄥ ㄒㄧㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "communicate, correspond"
    },
    "同意": {
        "zhuyin": "ㄊㄨㄥˊ ㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "agree"
    },
    "痛": {
        "zhuyin": "ㄊㄨㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sore, painful, sad"
    },
    "痛苦": {
        "zhuyin": "ㄊㄨㄥˋ ㄎㄨˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "pain"
    },
    "頭": {
        "zhuyin": "ㄊㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "lead, head"
    },
    "頭腦": {
        "zhuyin": "ㄊㄡˊ ㄋㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "mind, brain"
    },
    "突出": {
        "zhuyin": "ㄊㄨ ㄔㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "prominent"
    },
    "突然": {
        "zhuyin": "ㄊㄨ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "suddenly"
    },
    "圖": {
        "zhuyin": "ㄊㄨˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "picture, drawing, chart, scheme"
    },
    "圖畫": {
        "zhuyin": "ㄊㄨˊ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "drawing, picture, painting"
    },
    "土": {
        "zhuyin": "ㄊㄨˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "soil, earth, land, ground"
    },
    "團": {
        "zhuyin": "ㄊㄨㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "group"
    },
    "團結": {
        "zhuyin": "ㄊㄨㄢˊ ㄐㄧㄝˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "unite"
    },
    "團體": {
        "zhuyin": "ㄊㄨㄢˊ ㄊㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "group"
    },
    "推動": {
        "zhuyin": "ㄊㄨㄟ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "promote, push forward"
    },
    "推廣": {
        "zhuyin": "ㄊㄨㄟ ㄍㄨㄤˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "extension"
    },
    "推進": {
        "zhuyin": "ㄊㄨㄟ ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "advance, carry forward, push on"
    },
    "推開": {
        "zhuyin": "ㄊㄨㄟ ㄎㄞ",
        "pinyin": "",
        "level": "HSK3",
        "english": "push away"
    },
    "退": {
        "zhuyin": "ㄊㄨㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "retreat"
    },
    "退出": {
        "zhuyin": "ㄊㄨㄟˋ ㄔㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "drop out, quit, withdraw"
    },
    "退休": {
        "zhuyin": "ㄊㄨㄟˋ ㄒㄧㄡ",
        "pinyin": "",
        "level": "HSK3",
        "english": "retire"
    },
    "外交": {
        "zhuyin": "ㄨㄞˋ ㄐㄧㄠ",
        "pinyin": "",
        "level": "HSK3",
        "english": "diplomacy"
    },
    "外面": {
        "zhuyin": "ㄨㄞˋ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "outside, outdoors, outward appearance"
    },
    "外文": {
        "zhuyin": "ㄨㄞˋ ㄨㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "foreign language"
    },
    "完美": {
        "zhuyin": "ㄨㄢˊ ㄇㄟˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "perfect"
    },
    "完善": {
        "zhuyin": "ㄨㄢˊ ㄕㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "perfect, consummate"
    },
    "完整": {
        "zhuyin": "ㄨㄢˊ ㄓㄥˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "complete"
    },
    "玩具": {
        "zhuyin": "ㄨㄢˊ ㄐㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "toys"
    },
    "往往": {
        "zhuyin": "ㄨㄤˇ ㄨㄤˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "often"
    },
    "危害": {
        "zhuyin": "ㄨㄟ ㄏㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "harm"
    },
    "危險": {
        "zhuyin": "ㄨㄟ ㄒㄧㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "danger"
    },
    "為": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "act as, become, be"
    },
    "為": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "(preposition)"
    },
    "圍": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "enclose, surround, circle"
    },
    "偉大": {
        "zhuyin": "ㄨㄟˇ ㄉㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "great"
    },
    "衛生": {
        "zhuyin": "ㄨㄟˋ ㄕㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "hygiene, health, sanitation"
    },
    "衛生間": {
        "zhuyin": "ㄨㄟˋ ㄕㄥ ㄐㄧㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "toilet"
    },
    "為了": {
        "zhuyin": "ㄨㄟˊ ㄌㄜ",
        "pinyin": "",
        "level": "HSK3",
        "english": "in order to"
    },
    "溫暖": {
        "zhuyin": "ㄨㄣ ㄋㄨㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "warm"
    },
    "文化": {
        "zhuyin": "ㄨㄣˊ ㄏㄨㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "culture"
    },
    "文件": {
        "zhuyin": "ㄨㄣˊ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "file"
    },
    "文明": {
        "zhuyin": "ㄨㄣˊ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "civilization"
    },
    "文學": {
        "zhuyin": "ㄨㄣˊ ㄒㄩㄝˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "literature"
    },
    "文章": {
        "zhuyin": "ㄨㄣˊ ㄓㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "article"
    },
    "文字": {
        "zhuyin": "ㄨㄣˊ ㄗˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "writing, character"
    },
    "握手": {
        "zhuyin": "ㄨㄛˋ ㄕㄡˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "handshake"
    },
    "屋子": {
        "zhuyin": "ㄨ ㄗˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "house"
    },
    "武器": {
        "zhuyin": "ㄨˇ ㄑㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "arms"
    },
    "武術": {
        "zhuyin": "ㄨˇ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "a martial art"
    },
    "舞台": {
        "zhuyin": "ㄨˇ ㄊㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "stage, arena"
    },
    "西部": {
        "zhuyin": "ㄒㄧ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "west"
    },
    "希望": {
        "zhuyin": "ㄒㄧ ㄨㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "hope"
    },
    "系": {
        "zhuyin": "ㄒㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "department"
    },
    "下來": {
        "zhuyin": "ㄒㄧㄚˋ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "come down, get down"
    },
    "下面": {
        "zhuyin": "ㄒㄧㄚˋ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "below, under, next"
    },
    "下去": {
        "zhuyin": "ㄒㄧㄚˋ ㄑㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "go down, descend, go on, continue"
    },
    "先進": {
        "zhuyin": "ㄒㄧㄢ ㄐㄧㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "advanced"
    },
    "顯得": {
        "zhuyin": "ㄒㄧㄢˇ ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "appear"
    },
    "顯然": {
        "zhuyin": "ㄒㄧㄢˇ ㄖㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "obviously"
    },
    "顯示": {
        "zhuyin": "ㄒㄧㄢˇ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "display"
    },
    "現場": {
        "zhuyin": "ㄒㄧㄢˋ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "scene"
    },
    "現代": {
        "zhuyin": "ㄒㄧㄢˋ ㄉㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "modern"
    },
    "現金": {
        "zhuyin": "ㄒㄧㄢˋ ㄐㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cash"
    },
    "現實": {
        "zhuyin": "ㄒㄧㄢˋ ㄕˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "reality"
    },
    "現象": {
        "zhuyin": "ㄒㄧㄢˋ ㄒㄧㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "phenomenon"
    },
    "線": {
        "zhuyin": "ㄒㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "thread, string, wire, line, route"
    },
    "相比": {
        "zhuyin": "ㄒㄧㄤ ㄅㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "compare, compare to"
    },
    "相當": {
        "zhuyin": "ㄒㄧㄤ ㄉㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "quite"
    },
    "相關": {
        "zhuyin": "ㄒㄧㄤ ㄍㄨㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "correlate"
    },
    "相互": {
        "zhuyin": "ㄒㄧㄤ ㄏㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "mutual, reciprocal, each other"
    },
    "相似": {
        "zhuyin": "ㄒㄧㄤ ㄙˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "be similar"
    },
    // 790/973 done
    "香": {
        "zhuyin": "ㄒㄧㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "fragrant"
    },
    "香蕉": {
        "zhuyin": "ㄒㄧㄤ ㄐㄧㄠ",
        "pinyin": "",
        "level": "HSK3",
        "english": "banana"
    },
    "消費": {
        "zhuyin": "ㄒㄧㄠ ㄈㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "consumption"
    },
    "消失": {
        "zhuyin": "ㄒㄧㄠ ㄕ",
        "pinyin": "",
        "level": "HSK3",
        "english": "disappear"
    },
    "消息": {
        "zhuyin": "ㄒㄧㄠ ㄒㄧ",
        "pinyin": "",
        "level": "HSK3",
        "english": "message"
    },
    "效果": {
        "zhuyin": "ㄒㄧㄠˋ ㄍㄨㄛˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "effect"
    },
    "寫作": {
        "zhuyin": "ㄒㄧㄝˇ ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "writing"
    },
    "血": {
        "zhuyin": "ㄒㄩㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "blood"
    },
    "心": {
        "zhuyin": "ㄒㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "heart, feeling, center, core"
    },
    "信": {
        "zhuyin": "ㄒㄧㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "believe, trust"
    },
    "信封": {
        "zhuyin": "ㄒㄧㄣˋ ㄈㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "envelope"
    },
    "信任": {
        "zhuyin": "ㄒㄧㄣˋ ㄖㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "trust"
    },
    "行李": {
        "zhuyin": "ㄒㄧㄥˊ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "luggage, baggage"
    },
    "形成": {
        "zhuyin": "ㄒㄧㄥˊ ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "formation"
    },
    "形式": {
        "zhuyin": "ㄒㄧㄥˊ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "form"
    },
    "形象": {
        "zhuyin": "ㄒㄧㄥˊ ㄒㄧㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "image"
    },
    "形狀": {
        "zhuyin": "ㄒㄧㄥˊ ㄓㄨㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "shape"
    },
    "幸福": {
        "zhuyin": "ㄒㄧㄥˋ ㄈㄨˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "happiness"
    },
    "幸運": {
        "zhuyin": "ㄒㄧㄥˋ ㄩㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "lucky"
    },
    "性": {
        "zhuyin": "ㄒㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "as a suffix(积极性 positivity)"
    },
    "性別": {
        "zhuyin": "ㄒㄧㄥˋ ㄅㄧㄝˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "gender"
    },
    "性格": {
        "zhuyin": "ㄒㄧㄥˋ ㄍㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "character"
    },
    "修": {
        "zhuyin": "ㄒㄧㄡ",
        "pinyin": "",
        "level": "HSK3",
        "english": "repair, build, embellish, study"
    },
    "修改": {
        "zhuyin": "ㄒㄧㄡ ㄍㄞˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "modify"
    },
    "需求": {
        "zhuyin": "ㄒㄩ ㄑㄧㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "demand"
    },
    "需要": {
        "zhuyin": "ㄒㄩ ㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "need"
    },
    "宣布": {
        "zhuyin": "ㄒㄩㄢ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "announce"
    },
    "宣傳": {
        "zhuyin": "ㄒㄩㄢ ㄔㄨㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "propaganda"
    },
    "選手": {
        "zhuyin": "ㄒㄩㄢˇ ㄕㄡˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "player"
    },
    "學費": {
        "zhuyin": "ㄒㄩㄝˊ ㄈㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "tuition fee, school fee"
    },
    "訓練": {
        "zhuyin": "ㄒㄩㄣˋ ㄌㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "train"
    },
    "壓": {
        "zhuyin": "ㄧㄚ",
        "pinyin": "",
        "level": "HSK3",
        "english": "press, push, keep under control, bear down"
    },
    "壓力": {
        "zhuyin": "ㄧㄚ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "pressure"
    },
    "煙": {
        "zhuyin": "ㄧㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "smoke, tobacco, be irritated by smoke"
    },
    "眼前": {
        "zhuyin": "ㄧㄢˇ ㄑㄧㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "now, at the moment, before one's eyes"
    },
    "演": {
        "zhuyin": "ㄧㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "play, act, perform"
    },
    "演唱": {
        "zhuyin": "ㄧㄢˇ ㄔㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sing"
    },
    "演唱會": {
        "zhuyin": "ㄧㄢˇ ㄔㄤˋ ㄏㄨㄟˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "concert"
    },
    "演出": {
        "zhuyin": "ㄧㄢˇ ㄔㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "show"
    },
    "演員": {
        "zhuyin": "ㄧㄢˇ ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "performer, actor"
    },
    "羊": {
        "zhuyin": "ㄧㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sheep"
    },
    "陽光": {
        "zhuyin": "ㄧㄤˊ ㄍㄨㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "sunshine"
    },
    "要是": {
        "zhuyin": "ㄧㄠˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "if"
    },
    "衣架": {
        "zhuyin": "ㄧ ㄐㄧㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "hanger, clothes stand"
    },
    "一切": {
        "zhuyin": "ㄧ ㄑㄧㄝ",
        "pinyin": "",
        "level": "HSK3",
        "english": "everything"
    },
    "已": {
        "zhuyin": "ㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "already, afterwards"
    },
    "以來": {
        "zhuyin": "ㄧˇ ㄌㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "since"
    },
    "一方面": {
        "zhuyin": "ㄧ ㄈㄤ ㄇㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "on the one hand"
    },
    "藝術": {
        "zhuyin": "ㄧˋ ㄕㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "art"
    },
    "意外": {
        "zhuyin": "ㄧˋ ㄨㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "accident"
    },
    "意義": {
        "zhuyin": "ㄧˋ ㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "significance"
    },
    "因此": {
        "zhuyin": "ㄧㄣ ㄘˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "therefore"
    },
    "銀": {
        "zhuyin": "ㄧㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "silver"
    },
    "銀牌": {
        "zhuyin": "ㄧㄣˊ ㄆㄞˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "silver medal"
    },
    "印象": {
        "zhuyin": "ㄧㄣˋ ㄒㄧㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "impression"
    },
    "應當": {
        "zhuyin": "ㄧㄥ ㄉㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "should, ought to"
    },
    "迎接": {
        "zhuyin": "ㄧㄥˊ ㄐㄧㄝ",
        "pinyin": "",
        "level": "HSK3",
        "english": "meet, pick, welcome"
    },
    "營養": {
        "zhuyin": "ㄧㄥˊ ㄧㄤˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "nutrition"
    },
    "贏": {
        "zhuyin": "ㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "win"
    },
    "影視": {
        "zhuyin": "ㄧㄥˇ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "film and television"
    },
    "應用": {
        "zhuyin": "ㄧㄥ ㄩㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "application"
    },
    "優點": {
        "zhuyin": "ㄧㄡ ㄉㄧㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "advantage"
    },
    "優勢": {
        "zhuyin": "ㄧㄡ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "advantage"
    },
    "由": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "from"
    },
    "由於": {
        "zhuyin": "ㄧㄡˊ ㄩˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "because"
    },
    "郵件": {
        "zhuyin": "ㄧㄡˊ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "mail, post"
    },
    "郵票": {
        "zhuyin": "ㄧㄡˊ ㄆㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "postage stamp, stamp"
    },
    "郵箱": {
        "zhuyin": "ㄧㄡˊ ㄒㄧㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "postbox, mailbox"
    },
    "游": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "swim, wander, travel, tour"
    },
    "遊戲": {
        "zhuyin": "ㄧㄡˊ ㄒㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "game"
    },
    "游泳": {
        "zhuyin": "ㄧㄡˊ ㄩㄥˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "swimming"
    },
    "有的是": {
        "zhuyin": "ㄧㄡˇ ㄉㄜ˙ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "have plenty of, no lack of"
    },
    "有利": {
        "zhuyin": "ㄧㄡˇ ㄌㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "favorable, beneficial"
    },
    "有效": {
        "zhuyin": "ㄧㄡˇ ㄒㄧㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "effective, valid"
    },
    "預報": {
        "zhuyin": "ㄩˋ ㄅㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "prediction"
    },
    "預防": {
        "zhuyin": "ㄩˋ ㄈㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "prevention"
    },
    "預計": {
        "zhuyin": "ㄩˋ ㄐㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "expected, estimate"
    },
    "預習": {
        "zhuyin": "ㄩˋ ㄒㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "preview"
    },
    "員": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "a person engaged in some field of activity (waiter; waitress; server)"
    },
    "員工": {
        "zhuyin": "ㄩㄢˊ ㄍㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "employee"
    },
    "願望": {
        "zhuyin": "ㄩㄢˋ ㄨㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "desire"
    },
    "約": {
        "zhuyin": "ㄩㄝ",
        "pinyin": "",
        "level": "HSK3",
        "english": "appointment, agreement, arrange, restrict"
    },
    "樂隊": {
        "zhuyin": "ㄌㄜˋ ㄉㄨㄟˋ ",
        "pinyin": "",
        "level": "HSK3",
        "english": "orchestra, band"
    },
    "運輸": {
        "zhuyin": "ㄩㄣˋ ㄕㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "transport"
    },
    "雜誌": {
        "zhuyin": "ㄗㄚˊ ㄓˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "magazine"
    },
    "早已": {
        "zhuyin": "ㄗㄠˇ ㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "long ago, for a long time"
    },
    "造": {
        "zhuyin": "ㄗㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "make, build, create, produce"
    },
    "造成": {
        "zhuyin": "ㄗㄠˋ ㄔㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "cause"
    },
    "責任": {
        "zhuyin": "ㄗㄜˊ ㄖㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "responsibility"
    },
    "增加": {
        "zhuyin": "ㄗㄥ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK3",
        "english": "increase"
    },
    // 880/973 done
    "增長": {
        "zhuyin": "ㄗㄥ ㄔㄤˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "increase, grow"
    },
    "展開": {
        "zhuyin": "ㄓㄢˇ ㄎㄞ",
        "pinyin": "",
        "level": "HSK3",
        "english": "open"
    },
    "張": {
        "zhuyin": "ㄓㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "Zhang"
    },
    "照": {
        "zhuyin": "ㄓㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "reflect"
    },
    "者": {
        "zhuyin": "ㄓㄜˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "suffix (志愿者- volunteer)"
    },
    "真實": {
        "zhuyin": "ㄓㄣ ㄕˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "real"
    },
    "爭": {
        "zhuyin": "ㄓㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "contend, dispute, fight, strive"
    },
    "爭取": {
        "zhuyin": "ㄓㄥ ㄑㄩˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "strive for"
    },
    "整": {
        "zhuyin": "ㄓㄥˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "whole, all, complete"
    },
    "整個": {
        "zhuyin": "ㄓㄥˇ ㄍㄜˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "whole"
    },
    "整理": {
        "zhuyin": "ㄓㄥˇ ㄌㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "arrangement"
    },
    "整齊": {
        "zhuyin": "ㄓㄥˇ ㄑㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "neat"
    },
    "整體": {
        "zhuyin": "ㄓㄥˇ ㄊㄧˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "whole"
    },
    "整天": {
        "zhuyin": "ㄓㄥˇ ㄊㄧㄢ",
        "pinyin": "",
        "level": "HSK3",
        "english": "all day long"
    },
    "整整": {
        "zhuyin": "ㄓㄥˇ ㄓㄥˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "whole, full"
    },
    "正": {
        "zhuyin": "ㄓㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "straight, upright, positive, correct"
    },
    "正式": {
        "zhuyin": "ㄓㄥˋ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "formal"
    },
    "證": {
        "zhuyin": "ㄓㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "certificate, proof"
    },
    "證件": {
        "zhuyin": "ㄓㄥˋ ㄐㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "certificates"
    },
    "證據": {
        "zhuyin": "ㄓㄥˋ ㄐㄩˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "evidence"
    },
    "證明": {
        "zhuyin": "ㄓㄥˋ ㄇㄧㄥˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "prove"
    },
    "支": {
        "zhuyin": "ㄓ",
        "pinyin": "",
        "level": "HSK3",
        "english": "(measure word)"
    },
    "支持": {
        "zhuyin": "ㄓ ㄔˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "support"
    },
    "支付": {
        "zhuyin": "ㄓ ㄈㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "pay money"
    },
    "只": {
        "zhuyin": "ㄓ",
        "pinyin": "",
        "level": "HSK3",
        "english": "single, lonely"
    },
    "直": {
        "zhuyin": "ㄓˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "straight"
    },
    "直播": {
        "zhuyin": "ㄓˊ ㄅㄛ",
        "pinyin": "",
        "level": "HSK3",
        "english": "on live"
    },
    "直到": {
        "zhuyin": "ㄓˊ ㄉㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "until"
    },
    "值": {
        "zhuyin": "ㄓˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "value, be worth"
    },
    "值得": {
        "zhuyin": "ㄓˊ ㄉㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "worth"
    },
    "職工": {
        "zhuyin": "ㄓˊ ㄍㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "staff, worker"
    },
    "職業": {
        "zhuyin": "ㄓˊ ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "occupation"
    },
    "只好": {
        "zhuyin": "ㄓ ㄏㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "have to"
    },
    "只是": {
        "zhuyin": "ㄓ ㄕˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "merely, only, just"
    },
    "只有": {
        "zhuyin": "ㄓ ㄧㄡˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "only"
    },
    "指": {
        "zhuyin": "ㄓˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "finger"
    },
    "指出": {
        "zhuyin": "ㄓˇ ㄔㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "point out, indicate"
    },
    "指導": {
        "zhuyin": "ㄓˇ ㄉㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "guidance"
    },
    "至今": {
        "zhuyin": "ㄓˋ ㄐㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "so far"
    },
    "至少": {
        "zhuyin": "ㄓˋ ㄕㄠˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "at least"
    },
    "志願": {
        "zhuyin": "ㄓˋ ㄩㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "volunteer, aspiration, wish"
    },
    "志願者": {
        "zhuyin": "ㄓˋ ㄩㄢˋ ㄓㄜˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "volunteer"
    },
    "制定": {
        "zhuyin": "ㄓˋ ㄉㄧㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "formulate"
    },
    "制度": {
        "zhuyin": "ㄓˋ ㄉㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "system"
    },
    "製造": {
        "zhuyin": "ㄓˋ ㄗㄠˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "manufacture"
    },
    "製作": {
        "zhuyin": "ㄓˋ ㄗㄨㄛˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "make"
    },
    "中部": {
        "zhuyin": "ㄓㄨㄥ ㄅㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "central section, middle part"
    },
    "中華民族": {
        "zhuyin": "ㄓㄨㄥ ㄏㄨㄚˊ ㄇㄧㄣˊ ㄗㄨˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "chinese nation"
    },
    "終於": {
        "zhuyin": "ㄓㄨㄥ ㄩˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "finally"
    },
    "鍾": {
        "zhuyin": "ㄓㄨㄥ",
        "pinyin": "",
        "level": "HSK3",
        "english": "bell, clock, call bell, time"
    },
    "種": {
        "zhuyin": "ㄓㄨㄥˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "species"
    },
    "種子": {
        "zhuyin": "ㄓㄨㄥˇ ㄗˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "seed"
    },
    "重大": {
        "zhuyin": "ㄓㄨㄥˋ ㄉㄚˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "significant"
    },
    "周圍": {
        "zhuyin": "ㄓㄡ ㄨㄟˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "around"
    },
    "豬": {
        "zhuyin": "ㄓㄨ",
        "pinyin": "",
        "level": "HSK3",
        "english": "pig"
    },
    "主持": {
        "zhuyin": "ㄓㄨˇ ㄔˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "host"
    },
    "主動": {
        "zhuyin": "ㄓㄨˇ ㄉㄨㄥˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "active"
    },
    "主任": {
        "zhuyin": "ㄓㄨˇ ㄖㄣˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "headmaster"
    },
    "主意": {
        "zhuyin": "ㄓㄨˇ ㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "idea"
    },
    "主張": {
        "zhuyin": "ㄓㄨˇ ㄓㄤ",
        "pinyin": "",
        "level": "HSK3",
        "english": "opinion"
    },
    "注意": {
        "zhuyin": "ㄓㄨˋ ㄧˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "be careful"
    },
    "祝": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "express good wishes, wish"
    },
    "抓": {
        "zhuyin": "ㄓㄨㄚ",
        "pinyin": "",
        "level": "HSK3",
        "english": "grab"
    },
    "抓住": {
        "zhuyin": "ㄓㄨㄚ ㄓㄨˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "catch, catch hold of, grip"
    },
    "專家": {
        "zhuyin": "ㄓㄨㄢ ㄐㄧㄚ",
        "pinyin": "",
        "level": "HSK3",
        "english": "expert"
    },
    "專門": {
        "zhuyin": "ㄓㄨㄢ ㄇㄣˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "specialized"
    },
    "專題": {
        "zhuyin": "ㄓㄨㄢ ㄊㄧˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "special collection"
    },
    "專業": {
        "zhuyin": "ㄓㄨㄢ ㄧㄝˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "major"
    },
    "轉": {
        "zhuyin": "ㄓㄨㄢˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "turn"
    },
    "轉變": {
        "zhuyin": "ㄓㄨㄢˇ ㄅㄧㄢˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "change"
    },
    "狀況": {
        "zhuyin": "ㄓㄨㄤˋ ㄎㄨㄤˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "status"
    },
    "狀態": {
        "zhuyin": "ㄓㄨㄤˋ ㄊㄞˋ",
        "pinyin": "",
        "level": "HSK3",
        "english": "state"
    },
    "追": {
        "zhuyin": "ㄓㄨㄟ",
        "pinyin": "",
        "level": "HSK3",
        "english": "run after"
    },
    "准": {
        "zhuyin": "ㄓㄨㄣˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "follow, permit, allow"
    },
    "資格": {
        "zhuyin": "ㄗ ㄍㄜˊ",
        "pinyin": "",
        "level": "HSK3",
        "english": "qualifications"
    },
    "資金": {
        "zhuyin": "ㄗ ㄐㄧㄣ",
        "pinyin": "",
        "level": "HSK3",
        "english": "capital"
    },
    "子女": {
        "zhuyin": "ㄗˇ ㄋㄩˇ",
        "pinyin": "",
        "level": "HSK3",
        "english": "child, sons and daughters"
    },
    "自從": {
        "zhuyin": "ㄗˋ ㄘㄨㄥˊ",
        "pinyin": "zìcóng",
        "level": "HSK3",
        "english": "since"
    },
    "自動": {
        "zhuyin": "ㄗˋ ㄉㄨㄥˋ",
        "pinyin": "zìdòng",
        "level": "HSK3",
        "english": "automatic"
    },
    "自覺": {
        "zhuyin": "ㄗˋ ㄐㄩㄝˊ",
        "pinyin": "zìjué",
        "level": "HSK3",
        "english": "be conscious/aware"
    },
    "自然": {
        "zhuyin": "ㄗˋ ㄖㄢˊ",
        "pinyin": "zìrán",
        "level": "HSK3",
        "english": "natural world"
    },
    "自身": {
        "zhuyin": "ㄗˋ ㄕㄣ",
        "pinyin": "zìshēn",
        "level": "HSK3",
        "english": "self, oneself"
    },
    "自主": {
        "zhuyin": "ㄗˋ ㄓㄨˇ",
        "pinyin": "zìzhǔ",
        "level": "HSK3",
        "english": "be one's own master, take initiative"
    },
    "總": {
        "zhuyin": "ㄗㄨㄥˇ",
        "pinyin": "zǒng",
        "level": "HSK3",
        "english": "always, invariably, anyway, after all, inevitably, sooner or later"
    },
    "總結": {
        "zhuyin": "ㄗㄨㄥˇ ㄐㄧㄝˊ",
        "pinyin": "zǒng jié",
        "level": "HSK3",
        "english": "to sum up, to conclude, summary, résumé"
    },
    "總是": {
        "zhuyin": "ㄗㄨㄥˇ ㄕˋ",
        "pinyin": "zǒngshì",
        "level": "HSK3",
        "english": "always"
    },
    "足夠": {
        "zhuyin": "ㄗㄨˊ ㄍㄡˋ",
        "pinyin": "zúgòu",
        "level": "HSK3",
        "english": "fully, enough, last, amply, suffice, sufficiently"
    },
    "足球": {
        "zhuyin": "ㄗㄨˊ ㄑㄧㄡˊ",
        "pinyin": "zúqiú",
        "level": "HSK3",
        "english": "soccer, football"
    },
    "組合": {
        "zhuyin": "ㄗㄨˇ ㄏㄜˊ",
        "pinyin": "zǔhé",
        "level": "HSK3",
        "english": "make up, compose, unite"
    },
    "左右": {
        "zhuyin": "ㄗㄨㄛˇ ㄧㄡˋ",
        "pinyin": "zuǒyòu",
        "level": "HSK3",
        "english": "left and right"
    },
    "作品": {
        "zhuyin": "ㄗㄨㄛˋ ㄆㄧㄣˇ",
        "pinyin": "zuòpǐn",
        "level": "HSK3",
        "english": "writing, musical composition, product, creation, works of literature/art, workpiece, output, art, opus, whole shebang, production, piece, workmanship"
    },
    "作者": {
        "zhuyin": "ㄗㄨㄛˋ ㄓㄜˇ",
        "pinyin": "zuòzhě",
        "level": "HSK3",
        "english": "composer, author, writer, wright, paragrapher, auteur, paternity"
    },
    "做客": {
        "zhuyin": "ㄗㄨㄛˋ ㄎㄜˋ",
        "pinyin": "zuò kè",
        "level": "HSK3",
        "english": "to be a guest or visitor"
    }
};
const HSK4words = {
    "延續": {
        "zhuyin": "ㄧㄢˊ ㄒㄩˋ",
        "pinyin": "yánxù",
        "level": "HSK4",
        "english": "continue"
    },
    "購物": {
        "zhuyin": "ㄍㄡˋ ㄨˋ",
        "pinyin": "gòuwù",
        "level": "HSK4",
        "english": "Shopping"
    },
    "戶": {
        "zhuyin": "ㄏㄨˋ",
        "pinyin": "hù",
        "level": "HSK4",
        "english": "household; family; door"
    },
    "療養": {
        "zhuyin": "ㄌㄧㄠˊ ㄧㄤˇ",
        "pinyin": "liáo yǎng",
        "level": "HSK4",
        "english": "recuperate; convalesce"
    },
    "此外": {
        "zhuyin": "ㄘˇ ㄨㄞˋ",
        "pinyin": "cǐwài",
        "level": "HSK4",
        "english": "in addition"
    },
    "辦事": {
        "zhuyin": "ㄅㄢˋ ㄕˋ",
        "pinyin": "bàn shì",
        "level": "HSK4",
        "english": "handle affairs; work"
    },
    "童話": {
        "zhuyin": "ㄊㄨㄥˊ ㄏㄨㄚˋ",
        "pinyin": "tónghuà",
        "level": "HSK4",
        "english": "fairy tale"
    },
    "怪": {
        "zhuyin": "ㄍㄨㄞˋ",
        "pinyin": "guài",
        "level": "HSK4",
        "english": "strange; odd; bewildering; very; quite; rather"
    },
    "純凈水": {
        "zhuyin": "ㄔㄨㄣˊ ㄐㄧㄥˋ ㄕㄨㄟˇ",
        "pinyin": "chún jìng shuǐ",
        "level": "HSK4",
        "english": "pure water"
    },
    "英勇": {
        "zhuyin": "ㄧㄥ ㄩㄥˇ",
        "pinyin": "yīngyǒng",
        "level": "HSK4",
        "english": "heroic"
    },
    "智能": {
        "zhuyin": "ㄓˋ ㄋㄥˊ",
        "pinyin": "zhìnéng",
        "level": "HSK4",
        "english": "Intelligence"
    },
    "倒閉": {
        "zhuyin": "ㄉㄠˇ ㄅㄧˋ",
        "pinyin": "dǎobì",
        "level": "HSK4",
        "english": "Collapse"
    },
    "戰勝": {
        "zhuyin": "ㄓㄢˋ ㄕㄥˋ",
        "pinyin": "zhàn shèng",
        "level": "HSK4",
        "english": "defeat; conquer"
    },
    "聚會": {
        "zhuyin": "ㄐㄩˋ ㄏㄨㄟˋ",
        "pinyin": "jùhuì",
        "level": "HSK4",
        "english": "Party"
    },
    "擴大": {
        "zhuyin": "ㄎㄨㄛˋ ㄉㄚˋ",
        "pinyin": "kuòdà",
        "level": "HSK4",
        "english": "Expand"
    },
    "抽獎": {
        "zhuyin": "ㄔㄡ ㄐㄧㄤˇ",
        "pinyin": "chōu jiǎng",
        "level": "HSK4",
        "english": "lottery; lottery draw"
    },
    "緩解": {
        "zhuyin": "ㄏㄨㄢˇ ㄐㄧㄝˇ",
        "pinyin": "huǎnjiě",
        "level": "HSK4",
        "english": "relieve"
    },
    "批": {
        "zhuyin": "ㄆㄧ",
        "pinyin": "pī",
        "level": "HSK4",
        "english": "criticize; batch"
    },
    "陽台": {
        "zhuyin": "ㄧㄤˊ ㄊㄞˊ",
        "pinyin": "yángtái",
        "level": "HSK4",
        "english": "balcony"
    },
    "胸部": {
        "zhuyin": "ㄒㄩㄥ ㄅㄨˋ",
        "pinyin": "xiōng bù",
        "level": "HSK4",
        "english": "chest; thorax; breast"
    },
    "暗示": {
        "zhuyin": "ㄢˋ ㄕˋ",
        "pinyin": "ànshì",
        "level": "HSK4",
        "english": "suggest secretly"
    },
    // "按时": {
    //     "zhuyin": "",
    //     "pinyin": "ànshí",
    //     "level": "HSK4",
    //     "english": "on time"
    // },
    // "大众": {
    //     "zhuyin": "",
    //     "pinyin": "dà zhòng",
    //     "level": "HSK4",
    //     "english": "public; the masses; people"
    // },
    // "发挥": {
    //     "zhuyin": "",
    //     "pinyin": "fāhuī",
    //     "level": "HSK4",
    //     "english": "Develop"
    // },
    // "充分": {
    //     "zhuyin": "",
    //     "pinyin": "chōngfèn",
    //     "level": "HSK4",
    //     "english": "To the full"
    // },
    // "其余": {
    //     "zhuyin": "",
    //     "pinyin": "qíyú",
    //     "level": "HSK4",
    //     "english": "Rest"
    // },
    // "列为": {
    //     "zhuyin": "",
    //     "pinyin": "liè wéi",
    //     "level": "HSK4",
    //     "english": "be classified as; listed as"
    // },
    // "骨头": {
    //     "zhuyin": "",
    //     "pinyin": "gǔtou",
    //     "level": "HSK4",
    //     "english": "Bone"
    // },
    // "考虑": {
    //     "zhuyin": "",
    //     "pinyin": "kǎolǜ",
    //     "level": "HSK4",
    //     "english": "Consider"
    // },
    // "人家": {
    //     "zhuyin": "",
    //     "pinyin": "rénjiā",
    //     "level": "HSK4",
    //     "english": "family"
    // },
    // "轮子": {
    //     "zhuyin": "",
    //     "pinyin": "lún zi",
    //     "level": "HSK4",
    //     "english": "wheel"
    // },
    // "批": {
    //     "zhuyin": "",
    //     "pinyin": "pī",
    //     "level": "HSK4",
    //     "english": "(measure word)"
    // },
    // "无": {
    //     "zhuyin": "",
    //     "pinyin": "wú",
    //     "level": "HSK4",
    //     "english": "nothing"
    // },
    // "梦见": {
    //     "zhuyin": "",
    //     "pinyin": "mèng jiàn",
    //     "level": "HSK4",
    //     "english": "see in a dream; dream about; dream"
    // },
    // "学术": {
    //     "zhuyin": "",
    //     "pinyin": "xuéshù",
    //     "level": "HSK4",
    //     "english": "learning"
    // },
    // "导致": {
    //     "zhuyin": "",
    //     "pinyin": "dǎozhì",
    //     "level": "HSK4",
    //     "english": "cause"
    // },
    // "吸": {
    //     "zhuyin": "",
    //     "pinyin": "xī",
    //     "level": "HSK4",
    //     "english": "inhale; breathe; absorb; suck in"
    // },
    // "江": {
    //     "zhuyin": "",
    //     "pinyin": "jiāng",
    //     "level": "HSK4",
    //     "english": "river"
    // },
    // "似乎": {
    //     "zhuyin": "",
    //     "pinyin": "sìhū",
    //     "level": "HSK4",
    //     "english": "It seems that"
    // },
    // "毛衣": {
    //     "zhuyin": "",
    //     "pinyin": "máo yī",
    //     "level": "HSK4",
    //     "english": "sweater; wool sweater"
    // },
    // "诚实": {
    //     "zhuyin": "",
    //     "pinyin": "chéngshí",
    //     "level": "HSK4",
    //     "english": "honest"
    // },
    // "汇报": {
    //     "zhuyin": "",
    //     "pinyin": "huìbào",
    //     "level": "HSK4",
    //     "english": "report"
    // },
    // "风景": {
    //     "zhuyin": "",
    //     "pinyin": "fēngjǐng",
    //     "level": "HSK4",
    //     "english": "Scenery"
    // },
    // "新鲜": {
    //     "zhuyin": "",
    //     "pinyin": "xīnxiān",
    //     "level": "HSK4",
    //     "english": "fresh"
    // },
    // "本科": {
    //     "zhuyin": "",
    //     "pinyin": "běnkē",
    //     "level": "HSK4",
    //     "english": "Undergraduate"
    // },
    // "针对": {
    //     "zhuyin": "",
    //     "pinyin": "zhēnduì",
    //     "level": "HSK4",
    //     "english": "In the light of"
    // },
    // "高铁": {
    //     "zhuyin": "",
    //     "pinyin": "gāo tiě",
    //     "level": "HSK4",
    //     "english": "high-speed train; high-speed rail"
    // },
    // "教授": {
    //     "zhuyin": "",
    //     "pinyin": "jiàoshòu",
    //     "level": "HSK4",
    //     "english": "professor"
    // },
    // "打折": {
    //     "zhuyin": "",
    //     "pinyin": "dǎzhé",
    //     "level": "HSK4",
    //     "english": "Discount"
    // },
    // "一律": {
    //     "zhuyin": "",
    //     "pinyin": "yílǜ",
    //     "level": "HSK4",
    //     "english": "all and singular"
    // },
    // "沉重": {
    //     "zhuyin": "",
    //     "pinyin": "chénzhòng",
    //     "level": "HSK4",
    //     "english": "heavy"
    // },
    // "瓜": {
    //     "zhuyin": "",
    //     "pinyin": "guā",
    //     "level": "HSK4",
    //     "english": "melon"
    // },
    // "着火": {
    //     "zhuyin": "",
    //     "pinyin": "zháohuǒ",
    //     "level": "HSK4",
    //     "english": "on fire"
    // },
    // "顶": {
    //     "zhuyin": "",
    //     "pinyin": "dǐng",
    //     "level": "HSK4",
    //     "english": "top"
    // },
    // "表扬": {
    //     "zhuyin": "",
    //     "pinyin": "biǎoyáng",
    //     "level": "HSK4",
    //     "english": "Praise"
    // },
    // "居民": {
    //     "zhuyin": "",
    //     "pinyin": "jūmín",
    //     "level": "HSK4",
    //     "english": "residents"
    // },
    // "结": {
    //     "zhuyin": "",
    //     "pinyin": "jié",
    //     "level": "HSK4",
    //     "english": "bear; form; knit; knot"
    // },
    // "包含": {
    //     "zhuyin": "",
    //     "pinyin": "bāohán",
    //     "level": "HSK4",
    //     "english": "Contain"
    // },
    // "熟练": {
    //     "zhuyin": "",
    //     "pinyin": "shúliàn",
    //     "level": "HSK4",
    //     "english": "skilled"
    // },
    // "窗台": {
    //     "zhuyin": "",
    //     "pinyin": "chuāng tái",
    //     "level": "HSK4",
    //     "english": "windowsill; sill"
    // },
    // "型": {
    //     "zhuyin": "",
    //     "pinyin": "xíng",
    //     "level": "HSK4",
    //     "english": "mould; model; type; pattern"
    // },
    // "棵": {
    //     "zhuyin": "",
    //     "pinyin": "kē",
    //     "level": "HSK4",
    //     "english": "Tree (measure word)"
    // },
    // "摆": {
    //     "zhuyin": "",
    //     "pinyin": "bǎi",
    //     "level": "HSK4",
    //     "english": "pendulum"
    // },
    // "型号": {
    //     "zhuyin": "",
    //     "pinyin": "xíng hào",
    //     "level": "HSK4",
    //     "english": "model; type; pattern"
    // },
    // "而": {
    //     "zhuyin": "",
    //     "pinyin": "ér",
    //     "level": "HSK4",
    //     "english": "and"
    // },
    // "勇气": {
    //     "zhuyin": "",
    //     "pinyin": "yǒngqì",
    //     "level": "HSK4",
    //     "english": "courage"
    // },
    // "规模": {
    //     "zhuyin": "",
    //     "pinyin": "guīmó",
    //     "level": "HSK4",
    //     "english": "scale"
    // },
    // "发票": {
    //     "zhuyin": "",
    //     "pinyin": "fāpiào",
    //     "level": "HSK4",
    //     "english": "invoice"
    // },
    // "单纯": {
    //     "zhuyin": "",
    //     "pinyin": "dānchún",
    //     "level": "HSK4",
    //     "english": "Simple"
    // },
    // "孙子": {
    //     "zhuyin": "",
    //     "pinyin": "sūnzi",
    //     "level": "HSK4",
    //     "english": "Grandson"
    // },
    // "主席": {
    //     "zhuyin": "",
    //     "pinyin": "zhǔxí",
    //     "level": "HSK4",
    //     "english": "Chairman"
    // },
    // "参考": {
    //     "zhuyin": "",
    //     "pinyin": "cānkǎo",
    //     "level": "HSK4",
    //     "english": "Reference resources"
    // },
    // "纷纷": {
    //     "zhuyin": "",
    //     "pinyin": "fēnfēn",
    //     "level": "HSK4",
    //     "english": "one after another"
    // },
    // "浓": {
    //     "zhuyin": "",
    //     "pinyin": "nóng",
    //     "level": "HSK4",
    //     "english": "strong"
    // },
    // "台阶": {
    //     "zhuyin": "",
    //     "pinyin": "táijiē",
    //     "level": "HSK4",
    //     "english": "Steps"
    // },
    // "几乎": {
    //     "zhuyin": "",
    //     "pinyin": "jīhū",
    //     "level": "HSK4",
    //     "english": "almost"
    // },
    // "扩展": {
    //     "zhuyin": "",
    //     "pinyin": "kuò zhǎn",
    //     "level": "HSK4",
    //     "english": "expand; extend; spread; develop"
    // },
    // "避免": {
    //     "zhuyin": "",
    //     "pinyin": "bìmiǎn",
    //     "level": "HSK4",
    //     "english": "avoid"
    // },
    // "含量": {
    //     "zhuyin": "",
    //     "pinyin": "hán liàng",
    //     "level": "HSK4",
    //     "english": "content"
    // },
    // "战斗": {
    //     "zhuyin": "",
    //     "pinyin": "zhàndòu",
    //     "level": "HSK4",
    //     "english": "Battle"
    // },
    // "果实": {
    //     "zhuyin": "",
    //     "pinyin": "guǒshí",
    //     "level": "HSK4",
    //     "english": "fruit"
    // },
    // "纪律": {
    //     "zhuyin": "",
    //     "pinyin": "jìlǜ",
    //     "level": "HSK4",
    //     "english": "discipline"
    // },
    // "模特儿": {
    //     "zhuyin": "",
    //     "pinyin": "mó tèr",
    //     "level": "HSK4",
    //     "english": "model"
    // },
    // "学问": {
    //     "zhuyin": "",
    //     "pinyin": "xuéwen",
    //     "level": "HSK4",
    //     "english": "knowledge"
    // },
    // "厘米": {
    //     "zhuyin": "",
    //     "pinyin": "límǐ",
    //     "level": "HSK4",
    //     "english": "centimeter"
    // },
    // "复制": {
    //     "zhuyin": "",
    //     "pinyin": "fùzhì",
    //     "level": "HSK4",
    //     "english": "copy"
    // },
    // "怀念": {
    //     "zhuyin": "",
    //     "pinyin": "huáiniàn",
    //     "level": "HSK4",
    //     "english": "Miss"
    // },
    // "法律": {
    //     "zhuyin": "",
    //     "pinyin": "fǎlǜ",
    //     "level": "HSK4",
    //     "english": "Law"
    // },
    // "预测": {
    //     "zhuyin": "",
    //     "pinyin": "yù cè",
    //     "level": "HSK4",
    //     "english": "forecast; prognosis"
    // },
    // "片面": {
    //     "zhuyin": "",
    //     "pinyin": "piànmiàn",
    //     "level": "HSK4",
    //     "english": "one-sided"
    // },
    // "医学": {
    //     "zhuyin": "",
    //     "pinyin": "yī xué",
    //     "level": "HSK4",
    //     "english": "medical science; medicine"
    // },
    // "趋势": {
    //     "zhuyin": "",
    //     "pinyin": "qūshì",
    //     "level": "HSK4",
    //     "english": "trend"
    // },
    // "了解": {
    //     "zhuyin": "",
    //     "pinyin": "liǎojiě",
    //     "level": "HSK4",
    //     "english": "understand"
    // },
    // "相处": {
    //     "zhuyin": "",
    //     "pinyin": "xiāngchǔ",
    //     "level": "HSK4",
    //     "english": "Get along with"
    // },
    // "尺子": {
    //     "zhuyin": "",
    //     "pinyin": "chǐzi",
    //     "level": "HSK4",
    //     "english": "Ruler"
    // },
    // "收益": {
    //     "zhuyin": "",
    //     "pinyin": "shōuyì",
    //     "level": "HSK4",
    //     "english": "income; profit"
    // },
    // "尽快": {
    //     "zhuyin": "",
    //     "pinyin": "jǐnkuài",
    //     "level": "HSK4",
    //     "english": "as soon as possible"
    // },
    // "减": {
    //     "zhuyin": "",
    //     "pinyin": "jiǎn",
    //     "level": "HSK4",
    //     "english": "subtract; reduce; decrease; cut; minus"
    // },
    // "却": {
    //     "zhuyin": "",
    //     "pinyin": "què",
    //     "level": "HSK4",
    //     "english": "but"
    // },
    // "含": {
    //     "zhuyin": "",
    //     "pinyin": "hán",
    //     "level": "HSK4",
    //     "english": "contain; cherish; nurse; keep"
    // },
    // "灯光": {
    //     "zhuyin": "",
    //     "pinyin": "dēng guāng",
    //     "level": "HSK4",
    //     "english": "light; stage lighting"
    // },
    // "黄金": {
    //     "zhuyin": "",
    //     "pinyin": "huángjīn",
    //     "level": "HSK4",
    //     "english": "gold"
    // },
    // "财富": {
    //     "zhuyin": "",
    //     "pinyin": "cáifù",
    //     "level": "HSK4",
    //     "english": "wealth"
    // },
    // "议论": {
    //     "zhuyin": "",
    //     "pinyin": "yìlùn",
    //     "level": "HSK4",
    //     "english": "Discussion"
    // },
    // "登山": {
    //     "zhuyin": "",
    //     "pinyin": "dēng shān",
    //     "level": "HSK4",
    //     "english": "mountaineer; mountain-climbing"
    // },
    // "腰": {
    //     "zhuyin": "",
    //     "pinyin": "yāo",
    //     "level": "HSK4",
    //     "english": "waist"
    // },
    // "承担": {
    //     "zhuyin": "",
    //     "pinyin": "chéngdān",
    //     "level": "HSK4",
    //     "english": "bear"
    // },
    // "苦": {
    //     "zhuyin": "",
    //     "pinyin": "kǔ",
    //     "level": "HSK4",
    //     "english": "bitter"
    // },
    // "操场": {
    //     "zhuyin": "",
    //     "pinyin": "cāochǎng",
    //     "level": "HSK4",
    //     "english": "Playground"
    // },
    // "ǎi": {
    //     "zhuyin": "矮",
    //     "pinyin": "short",
    //     "level": "HSK4",
    //     "english": ""
    // },
    // "业余": {
    //     "zhuyin": "",
    //     "pinyin": "yèyú",
    //     "level": "HSK4",
    //     "english": "amateur"
    // },
    // "程序": {
    //     "zhuyin": "",
    //     "pinyin": "chéngxù",
    //     "level": "HSK4",
    //     "english": "program"
    // },
    // "土地": {
    //     "zhuyin": "",
    //     "pinyin": "tǔdì",
    //     "level": "HSK4",
    //     "english": "land"
    // },
    // "失败": {
    //     "zhuyin": "",
    //     "pinyin": "shībài",
    //     "level": "HSK4",
    //     "english": "fail"
    // },
    // "冷静": {
    //     "zhuyin": "",
    //     "pinyin": "lěngjìng",
    //     "level": "HSK4",
    //     "english": "calm down"
    // },
    // "独自": {
    //     "zhuyin": "",
    //     "pinyin": "dú zì",
    //     "level": "HSK4",
    //     "english": "alone; by oneself; one’s own"
    // },
    // "手套": {
    //     "zhuyin": "",
    //     "pinyin": "shǒutào",
    //     "level": "HSK4",
    //     "english": "glove"
    // },
    // "会计": {
    //     "zhuyin": "",
    //     "pinyin": "kuàijì",
    //     "level": "HSK4",
    //     "english": "accountant"
    // },
    // "激动": {
    //     "zhuyin": "",
    //     "pinyin": "jīdòng",
    //     "level": "HSK4",
    //     "english": "Excited"
    // },
    // "法官": {
    //     "zhuyin": "",
    //     "pinyin": "fǎ guān",
    //     "level": "HSK4",
    //     "english": "judge"
    // },
    // "假如": {
    //     "zhuyin": "",
    //     "pinyin": "jiǎrú",
    //     "level": "HSK4",
    //     "english": "If"
    // },
    // "玉米": {
    //     "zhuyin": "",
    //     "pinyin": "yùmǐ",
    //     "level": "HSK4",
    //     "english": "Corn"
    // },
    // "缩小": {
    //     "zhuyin": "",
    //     "pinyin": "suō xiǎo",
    //     "level": "HSK4",
    //     "english": "reduce; lessen; narrow; shrink; zoom out"
    // },
    // "阿姨": {
    //     "zhuyin": "",
    //     "pinyin": "āyí",
    //     "level": "HSK4",
    //     "english": "aunt"
    // },
    // "敌人": {
    //     "zhuyin": "",
    //     "pinyin": "dírén",
    //     "level": "HSK4",
    //     "english": "Enemy"
    // },
    // "禁止": {
    //     "zhuyin": "",
    //     "pinyin": "jìnzhǐ",
    //     "level": "HSK4",
    //     "english": "prohibit"
    // },
    // "轻松": {
    //     "zhuyin": "",
    //     "pinyin": "qīngsōng",
    //     "level": "HSK4",
    //     "english": "Relaxed"
    // },
    // "法": {
    //     "zhuyin": "",
    //     "pinyin": "fǎ",
    //     "level": "HSK4",
    //     "english": "law; way; method; example; rule"
    // },
    // "疑问": {
    //     "zhuyin": "",
    //     "pinyin": "yíwèn",
    //     "level": "HSK4",
    //     "english": "Doubt"
    // },
    // "喂": {
    //     "zhuyin": "",
    //     "pinyin": "wèi",
    //     "level": "HSK4",
    //     "english": "feed"
    // },
    // "转动": {
    //     "zhuyin": "",
    //     "pinyin": "zhuǎn dòng",
    //     "level": "HSK4",
    //     "english": "turn; move; turn round"
    // },
    // "促使": {
    //     "zhuyin": "",
    //     "pinyin": "cùshǐ",
    //     "level": "HSK4",
    //     "english": "Urge"
    // },
    // "大巴": {
    //     "zhuyin": "",
    //     "pinyin": "dà bā",
    //     "level": "HSK4",
    //     "english": "bus"
    // },
    // "没想到": {
    //     "zhuyin": "",
    //     "pinyin": "méi xiǎng dào",
    //     "level": "HSK4",
    //     "english": "didn’t expect"
    // },
    // "窗户": {
    //     "zhuyin": "",
    //     "pinyin": "chuānghu",
    //     "level": "HSK4",
    //     "english": "Window"
    // },
    // "引导": {
    //     "zhuyin": "",
    //     "pinyin": "yǐndǎo",
    //     "level": "HSK4",
    //     "english": "guide"
    // },
    // "统计": {
    //     "zhuyin": "",
    //     "pinyin": "tǒngjì",
    //     "level": "HSK4",
    //     "english": "Statistics"
    // },
    // "秘书": {
    //     "zhuyin": "",
    //     "pinyin": "mìshū",
    //     "level": "HSK4",
    //     "english": "secretary"
    // },
    // "口袋": {
    //     "zhuyin": "",
    //     "pinyin": "kǒu dài",
    //     "level": "HSK4",
    //     "english": "pocket"
    // },
    // "收回": {
    //     "zhuyin": "",
    //     "pinyin": "shōu huí",
    //     "level": "HSK4",
    //     "english": "withdraw; regain; call in; countermand"
    // },
    // "出售": {
    //     "zhuyin": "",
    //     "pinyin": "chū shòu",
    //     "level": "HSK4",
    //     "english": "offer for sale; sell"
    // },
    // "量": {
    //     "zhuyin": "",
    //     "pinyin": "liáng",
    //     "level": "HSK4",
    //     "english": "measure; estimate; amount"
    // },
    // "政治": {
    //     "zhuyin": "",
    //     "pinyin": "zhèngzhì",
    //     "level": "HSK4",
    //     "english": "Politics"
    // },
    // "提供": {
    //     "zhuyin": "",
    //     "pinyin": "tígōng",
    //     "level": "HSK4",
    //     "english": "provide"
    // },
    // "打针": {
    //     "zhuyin": "",
    //     "pinyin": "dǎzhēn",
    //     "level": "HSK4",
    //     "english": "To make an injection"
    // },
    // "列车": {
    //     "zhuyin": "",
    //     "pinyin": "lièchē",
    //     "level": "HSK4",
    //     "english": "train"
    // },
    // "躺": {
    //     "zhuyin": "",
    //     "pinyin": "tǎng",
    //     "level": "HSK4",
    //     "english": "lie"
    // },
    // "期间": {
    //     "zhuyin": "",
    //     "pinyin": "qījiān",
    //     "level": "HSK4",
    //     "english": "Period"
    // },
    // "海水": {
    //     "zhuyin": "",
    //     "pinyin": "hǎi shuǐ",
    //     "level": "HSK4",
    //     "english": "seawater; brine; sea"
    // },
    // "效率": {
    //     "zhuyin": "",
    //     "pinyin": "xiàolǜ",
    //     "level": "HSK4",
    //     "english": "efficiency"
    // },
    // "刺": {
    //     "zhuyin": "",
    //     "pinyin": "cì",
    //     "level": "HSK4",
    //     "english": "thorn"
    // },
    // "密切": {
    //     "zhuyin": "",
    //     "pinyin": "mìqiè",
    //     "level": "HSK4",
    //     "english": "close"
    // },
    // "符号": {
    //     "zhuyin": "",
    //     "pinyin": "fúhào",
    //     "level": "HSK4",
    //     "english": "Symbol"
    // },
    // "切": {
    //     "zhuyin": "",
    //     "pinyin": "qiē",
    //     "level": "HSK4",
    //     "english": "cut"
    // },
    // "茶叶": {
    //     "zhuyin": "",
    //     "pinyin": "chá yè",
    //     "level": "HSK4",
    //     "english": "tea; tea-leaves"
    // },
    // "士兵": {
    //     "zhuyin": "",
    //     "pinyin": "shìbīng",
    //     "level": "HSK4",
    //     "english": "soldiers"
    // },
    // "bì": {
    //     "zhuyin": "避",
    //     "pinyin": "avoid; evade; dodge; keep away; repel",
    //     "level": "HSK4",
    //     "english": ""
    // },
    // "运用": {
    //     "zhuyin": "",
    //     "pinyin": "yùnyòng",
    //     "level": "HSK4",
    //     "english": "Application"
    // },
    // "操作": {
    //     "zhuyin": "",
    //     "pinyin": "cāozuò",
    //     "level": "HSK4",
    //     "english": "operation"
    // },
    // "逐步": {
    //     "zhuyin": "",
    //     "pinyin": "zhúbù",
    //     "level": "HSK4",
    //     "english": "gradually"
    // },
    // "维持": {
    //     "zhuyin": "",
    //     "pinyin": "wéichí",
    //     "level": "HSK4",
    //     "english": "maintain"
    // },
    // "资源": {
    //     "zhuyin": "",
    //     "pinyin": "zīyuán",
    //     "level": "HSK4",
    //     "english": "Resources"
    // },
    // "可见": {
    //     "zhuyin": "",
    //     "pinyin": "kějiàn",
    //     "level": "HSK4",
    //     "english": "So"
    // },
    // "采访": {
    //     "zhuyin": "",
    //     "pinyin": "cǎifǎng",
    //     "level": "HSK4",
    //     "english": "interview"
    // },
    // "分散": {
    //     "zhuyin": "",
    //     "pinyin": "fēnsàn",
    //     "level": "HSK4",
    //     "english": "Dispersed"
    // },
    // "统一": {
    //     "zhuyin": "",
    //     "pinyin": "tǒngyī",
    //     "level": "HSK4",
    //     "english": "Unified"
    // },
    // "多年": {
    //     "zhuyin": "",
    //     "pinyin": "duō nián",
    //     "level": "HSK4",
    //     "english": "many years"
    // },
    // "手术": {
    //     "zhuyin": "",
    //     "pinyin": "shǒushù",
    //     "level": "HSK4",
    //     "english": "Operation"
    // },
    // "安置": {
    //     "zhuyin": "",
    //     "pinyin": "ānzhì",
    //     "level": "HSK4",
    //     "english": "put; arrange for"
    // },
    // "婚礼": {
    //     "zhuyin": "",
    //     "pinyin": "hūnlǐ",
    //     "level": "HSK4",
    //     "english": "wedding"
    // },
    // "耳机": {
    //     "zhuyin": "",
    //     "pinyin": "ěr jī",
    //     "level": "HSK4",
    //     "english": "earphone; headphone; headset"
    // },
    // "否则": {
    //     "zhuyin": "",
    //     "pinyin": "fǒuzé",
    //     "level": "HSK4",
    //     "english": "otherwise"
    // },
    // "箱": {
    //     "zhuyin": "",
    //     "pinyin": "xiāng",
    //     "level": "HSK4",
    //     "english": "chest; box; case; trunk"
    // },
    // "遇到": {
    //     "zhuyin": "",
    //     "pinyin": "yùdào",
    //     "level": "HSK4",
    //     "english": "encounter"
    // },
    // "迫切": {
    //     "zhuyin": "",
    //     "pinyin": "pòqiè",
    //     "level": "HSK4",
    //     "english": "urgent"
    // },
    // "两边": {
    //     "zhuyin": "",
    //     "pinyin": "liǎng biān",
    //     "level": "HSK4",
    //     "english": "both sides"
    // },
    // "堵": {
    //     "zhuyin": "",
    //     "pinyin": "dǔ",
    //     "level": "HSK4",
    //     "english": "stop up; block up; stifled; suffocated; oppressed"
    // },
    // "下楼": {
    //     "zhuyin": "",
    //     "pinyin": "xià lóu",
    //     "level": "HSK4",
    //     "english": "go downstairs; come downstairs"
    // },
    // "曾": {
    //     "zhuyin": "",
    //     "pinyin": "céng",
    //     "level": "HSK4",
    //     "english": "once; already; at some time in the past"
    // },
    // "以及": {
    //     "zhuyin": "",
    //     "pinyin": "yǐjí",
    //     "level": "HSK4",
    //     "english": "as well as"
    // },
    // "唱片": {
    //     "zhuyin": "",
    //     "pinyin": "chàng piàn",
    //     "level": "HSK4",
    //     "english": "record; disc; phonogram"
    // },
    // "弱": {
    //     "zhuyin": "",
    //     "pinyin": "ruò",
    //     "level": "HSK4",
    //     "english": "weak"
    // },
    // "塑料": {
    //     "zhuyin": "",
    //     "pinyin": "sù liào",
    //     "level": "HSK4",
    //     "english": "plastic"
    // },
    // "一般来说": {
    //     "zhuyin": "",
    //     "pinyin": "yì bān lái shuō",
    //     "level": "HSK4",
    //     "english": "generally speaking"
    // },
    // "及格": {
    //     "zhuyin": "",
    //     "pinyin": "jígé",
    //     "level": "HSK4",
    //     "english": "pass"
    // },
    // "名人": {
    //     "zhuyin": "",
    //     "pinyin": "míng rén",
    //     "level": "HSK4",
    //     "english": "celebrity; famous person"
    // },
    // "从此": {
    //     "zhuyin": "",
    //     "pinyin": "cóngcǐ",
    //     "level": "HSK4",
    //     "english": "from then on"
    // },
    // "位置": {
    //     "zhuyin": "",
    //     "pinyin": "wèizhì",
    //     "level": "HSK4",
    //     "english": "position"
    // },
    // "渐渐": {
    //     "zhuyin": "",
    //     "pinyin": "jiàn jiàn",
    //     "level": "HSK4",
    //     "english": "gradually; step by step"
    // },
    // "近代": {
    //     "zhuyin": "",
    //     "pinyin": "jìndài",
    //     "level": "HSK4",
    //     "english": "Modern"
    // },
    // "进口": {
    //     "zhuyin": "",
    //     "pinyin": "jìnkǒu",
    //     "level": "HSK4",
    //     "english": "Imported"
    // },
    // "寒假": {
    //     "zhuyin": "",
    //     "pinyin": "hánjià",
    //     "level": "HSK4",
    //     "english": "The winter vacation"
    // },
    // "冰雪": {
    //     "zhuyin": "",
    //     "pinyin": "bīng xuě",
    //     "level": "HSK4",
    //     "english": "ice and snow"
    // },
    // "圆": {
    //     "zhuyin": "",
    //     "pinyin": "yuán",
    //     "level": "HSK4",
    //     "english": "circular"
    // },
    // "修理": {
    //     "zhuyin": "",
    //     "pinyin": "xiūlǐ",
    //     "level": "HSK4",
    //     "english": "repair"
    // },
    // "模型": {
    //     "zhuyin": "",
    //     "pinyin": "móxíng",
    //     "level": "HSK4",
    //     "english": "Model"
    // },
    // "夫人": {
    //     "zhuyin": "",
    //     "pinyin": "fūrén",
    //     "level": "HSK4",
    //     "english": "Madam"
    // },
    // "镜头": {
    //     "zhuyin": "",
    //     "pinyin": "jìngtóu",
    //     "level": "HSK4",
    //     "english": "Camera lens"
    // },
    // "倒车": {
    //     "zhuyin": "",
    //     "pinyin": "dǎo chē",
    //     "level": "HSK4",
    //     "english": "change trains or buses"
    // },
    // "护士": {
    //     "zhuyin": "",
    //     "pinyin": "hùshi",
    //     "level": "HSK4",
    //     "english": "Nurse"
    // },
    // "美金": {
    //     "zhuyin": "",
    //     "pinyin": "měi jīn",
    //     "level": "HSK4",
    //     "english": "USD; dollar"
    // },
    // "重量": {
    //     "zhuyin": "",
    //     "pinyin": "zhòngliàng",
    //     "level": "HSK4",
    //     "english": "weight"
    // },
    // "梦想": {
    //     "zhuyin": "",
    //     "pinyin": "mèngxiǎng",
    //     "level": "HSK4",
    //     "english": "Dream"
    // },
    // "选择": {
    //     "zhuyin": "",
    //     "pinyin": "xuǎnzé",
    //     "level": "HSK4",
    //     "english": "Choice"
    // },
    // "良好": {
    //     "zhuyin": "",
    //     "pinyin": "liánghǎo",
    //     "level": "HSK4",
    //     "english": "good"
    // },
    // "获": {
    //     "zhuyin": "",
    //     "pinyin": "huò",
    //     "level": "HSK4",
    //     "english": "obtain; win; reap; capture; catch"
    // },
    // "松树": {
    //     "zhuyin": "",
    //     "pinyin": "sōng shù",
    //     "level": "HSK4",
    //     "english": "pine tree; pine"
    // },
    // "度过": {
    //     "zhuyin": "",
    //     "pinyin": "dùguò",
    //     "level": "HSK4",
    //     "english": "Spend"
    // },
    // "总之": {
    //     "zhuyin": "",
    //     "pinyin": "zǒngzhī",
    //     "level": "HSK4",
    //     "english": "in short"
    // },
    // "之一": {
    //     "zhuyin": "",
    //     "pinyin": "zhī yī",
    //     "level": "HSK4",
    //     "english": "one of"
    // },
    // "遗产": {
    //     "zhuyin": "",
    //     "pinyin": "yíchǎn",
    //     "level": "HSK4",
    //     "english": "heritage"
    // },
    // "替代": {
    //     "zhuyin": "",
    //     "pinyin": "tì dài",
    //     "level": "HSK4",
    //     "english": "replace; substitute"
    // },
    // "舒适": {
    //     "zhuyin": "",
    //     "pinyin": "shūshì",
    //     "level": "HSK4",
    //     "english": "Comfortable"
    // },
    // "湿": {
    //     "zhuyin": "",
    //     "pinyin": "shī",
    //     "level": "HSK4",
    //     "english": "wet; damp; humid"
    // },
    // "医疗": {
    //     "zhuyin": "",
    //     "pinyin": "yī liáo",
    //     "level": "HSK4",
    //     "english": "medical treatment"
    // },
    // "奋斗": {
    //     "zhuyin": "",
    //     "pinyin": "fèndòu",
    //     "level": "HSK4",
    //     "english": "Struggle"
    // },
    // "特价": {
    //     "zhuyin": "",
    //     "pinyin": "tè jià",
    //     "level": "HSK4",
    //     "english": "special offer; bargain price"
    // },
    // "财产": {
    //     "zhuyin": "",
    //     "pinyin": "cáichǎn",
    //     "level": "HSK4",
    //     "english": "property"
    // },
    // "大爷": {
    //     "zhuyin": "",
    //     "pinyin": "dà ye",
    //     "level": "HSK4",
    //     "english": "uncle; father’s elder brother"
    // },
    // "含义": {
    //     "zhuyin": "",
    //     "pinyin": "hányì",
    //     "level": "HSK4",
    //     "english": "signification; meanings"
    // },
    // "着": {
    //     "zhuyin": "",
    //     "pinyin": "zhe",
    //     "level": "HSK4",
    //     "english": "in process of"
    // },
    // "电梯": {
    //     "zhuyin": "",
    //     "pinyin": "diàntī",
    //     "level": "HSK4",
    //     "english": "Elevator."
    // },
    // "测试": {
    //     "zhuyin": "",
    //     "pinyin": "cè shì",
    //     "level": "HSK4",
    //     "english": "test; examination"
    // },
    // "清醒": {
    //     "zhuyin": "",
    //     "pinyin": "qīngxǐng",
    //     "level": "HSK4",
    //     "english": "Sober"
    // },
    // "专心": {
    //     "zhuyin": "",
    //     "pinyin": "zhuānxīn",
    //     "level": "HSK4",
    //     "english": "Attentively"
    // },
    // "获奖": {
    //     "zhuyin": "",
    //     "pinyin": "huò jiǎng",
    //     "level": "HSK4",
    //     "english": "win a prize; receive an award"
    // },
    // "即将": {
    //     "zhuyin": "",
    //     "pinyin": "jíjiāng",
    //     "level": "HSK4",
    //     "english": "soon"
    // },
    // "单调": {
    //     "zhuyin": "",
    //     "pinyin": "dāndiào",
    //     "level": "HSK4",
    //     "english": "monotonous"
    // },
    // "拉开": {
    //     "zhuyin": "",
    //     "pinyin": "lā kāi",
    //     "level": "HSK4",
    //     "english": "pull open; undraw; zip"
    // },
    // "遇": {
    //     "zhuyin": "",
    //     "pinyin": "yù",
    //     "level": "HSK4",
    //     "english": "meet; encounter"
    // },
    // "减肥": {
    //     "zhuyin": "",
    //     "pinyin": "jiǎnféi",
    //     "level": "HSK4",
    //     "english": "Reduce weight"
    // },
    // "位于": {
    //     "zhuyin": "",
    //     "pinyin": "wèiyú",
    //     "level": "HSK4",
    //     "english": "Be located"
    // },
    // "布置": {
    //     "zhuyin": "",
    //     "pinyin": "bùzhì",
    //     "level": "HSK4",
    //     "english": "Arrangement"
    // },
    // "情景": {
    //     "zhuyin": "",
    //     "pinyin": "qíngjǐng",
    //     "level": "HSK4",
    //     "english": "scene"
    // },
    // "对付": {
    //     "zhuyin": "",
    //     "pinyin": "duìfu",
    //     "level": "HSK4",
    //     "english": "deal with"
    // },
    // "交换": {
    //     "zhuyin": "",
    //     "pinyin": "jiāohuàn",
    //     "level": "HSK4",
    //     "english": "exchange"
    // },
    // "顺序": {
    //     "zhuyin": "",
    //     "pinyin": "shùnxù",
    //     "level": "HSK4",
    //     "english": "order"
    // },
    // "冲": {
    //     "zhuyin": "",
    //     "pinyin": "chōng",
    //     "level": "HSK4",
    //     "english": "punching"
    // },
    // "大哥": {
    //     "zhuyin": "",
    //     "pinyin": "dà gē",
    //     "level": "HSK4",
    //     "english": "big brother; elder brother"
    // },
    // "格外": {
    //     "zhuyin": "",
    //     "pinyin": "géwài",
    //     "level": "HSK4",
    //     "english": "especially"
    // },
    // "安": {
    //     "zhuyin": "",
    //     "pinyin": "ān",
    //     "level": "HSK4",
    //     "english": "quiet; safe; secure; install; fix; fit"
    // },
    // "维护": {
    //     "zhuyin": "",
    //     "pinyin": "wéihù",
    //     "level": "HSK4",
    //     "english": "protect"
    // },
    // "记载": {
    //     "zhuyin": "",
    //     "pinyin": "jìzǎi",
    //     "level": "HSK4",
    //     "english": "Record"
    // },
    // "彻底": {
    //     "zhuyin": "",
    //     "pinyin": "chèdǐ",
    //     "level": "HSK4",
    //     "english": "thorough"
    // },
    // "成人": {
    //     "zhuyin": "",
    //     "pinyin": "chéngrén",
    //     "level": "HSK4",
    //     "english": "adult"
    // },
    // "收获": {
    //     "zhuyin": "",
    //     "pinyin": "shōuhuò",
    //     "level": "HSK4",
    //     "english": "Harvest"
    // },
    // "投入": {
    //     "zhuyin": "",
    //     "pinyin": "tóurù",
    //     "level": "HSK4",
    //     "english": "put into"
    // },
    // "大方": {
    //     "zhuyin": "",
    //     "pinyin": "dàfang",
    //     "level": "HSK4",
    //     "english": "generous"
    // },
    // "事物": {
    //     "zhuyin": "",
    //     "pinyin": "shìwù",
    //     "level": "HSK4",
    //     "english": "Thing"
    // },
    // "下载": {
    //     "zhuyin": "",
    //     "pinyin": "xiàzài",
    //     "level": "HSK4",
    //     "english": "download"
    // },
    // "登录": {
    //     "zhuyin": "",
    //     "pinyin": "dēnglù",
    //     "level": "HSK4",
    //     "english": "Sign in"
    // },
    // "归": {
    //     "zhuyin": "",
    //     "pinyin": "guī",
    //     "level": "HSK4",
    //     "english": "return; go back"
    // },
    // "治": {
    //     "zhuyin": "",
    //     "pinyin": "zhì",
    //     "level": "HSK4",
    //     "english": "rule; govern; manage; cure; treatment"
    // },
    // "常识": {
    //     "zhuyin": "",
    //     "pinyin": "chángshí",
    //     "level": "HSK4",
    //     "english": "common sense"
    // },
    // "风格": {
    //     "zhuyin": "",
    //     "pinyin": "fēnggé",
    //     "level": "HSK4",
    //     "english": "style"
    // },
    // "包裹": {
    //     "zhuyin": "",
    //     "pinyin": "bāoguǒ",
    //     "level": "HSK4",
    //     "english": "package"
    // },
    // "沉默": {
    //     "zhuyin": "",
    //     "pinyin": "chénmò",
    //     "level": "HSK4",
    //     "english": "silent"
    // },
    // "密": {
    //     "zhuyin": "",
    //     "pinyin": "mì",
    //     "level": "HSK4",
    //     "english": "thick; secret; close; dense"
    // },
    // "哪": {
    //     "zhuyin": "",
    //     "pinyin": "nǎ",
    //     "level": "HSK4",
    //     "english": "which"
    // },
    // "研制": {
    //     "zhuyin": "",
    //     "pinyin": "yán zhì",
    //     "level": "HSK4",
    //     "english": "prepare; manufacture; develop"
    // },
    // "打": {
    //     "zhuyin": "",
    //     "pinyin": "dǎ",
    //     "level": "HSK4",
    //     "english": "strike; hit; break; fight; build; beat"
    // },
    // "被迫": {
    //     "zhuyin": "",
    //     "pinyin": "bèi pò",
    //     "level": "HSK4",
    //     "english": "be compelled; be forced; be constrained"
    // },
    // "中介": {
    //     "zhuyin": "",
    //     "pinyin": "zhōngjiè",
    //     "level": "HSK4",
    //     "english": "intermediary"
    // },
    // "战争": {
    //     "zhuyin": "",
    //     "pinyin": "zhànzhēng",
    //     "level": "HSK4",
    //     "english": "War"
    // },
    // "吸引": {
    //     "zhuyin": "",
    //     "pinyin": "xīyǐn",
    //     "level": "HSK4",
    //     "english": "Attract"
    // },
    // "迟到": {
    //     "zhuyin": "",
    //     "pinyin": "chídào",
    //     "level": "HSK4",
    //     "english": "Late"
    // },
    // "女士": {
    //     "zhuyin": "",
    //     "pinyin": "nǚshì",
    //     "level": "HSK4",
    //     "english": "Ma’am"
    // },
    // "秋季": {
    //     "zhuyin": "",
    //     "pinyin": "qiū jì",
    //     "level": "HSK4",
    //     "english": "autumn; fall"
    // },
    // "提醒": {
    //     "zhuyin": "",
    //     "pinyin": "tíxǐng",
    //     "level": "HSK4",
    //     "english": "remind"
    // },
    // "权利": {
    //     "zhuyin": "",
    //     "pinyin": "quánlì",
    //     "level": "HSK4",
    //     "english": "Right"
    // },
    // "矿泉水": {
    //     "zhuyin": "",
    //     "pinyin": "kuàngquánshuǐ",
    //     "level": "HSK4",
    //     "english": "Mineral water"
    // },
    // "原则": {
    //     "zhuyin": "",
    //     "pinyin": "yuánzé",
    //     "level": "HSK4",
    //     "english": "Principle"
    // },
    // "咸": {
    //     "zhuyin": "",
    //     "pinyin": "xián",
    //     "level": "HSK4",
    //     "english": "salty"
    // },
    // "浅": {
    //     "zhuyin": "",
    //     "pinyin": "qiǎn",
    //     "level": "HSK4",
    //     "english": "shallow"
    // },
    // "流传": {
    //     "zhuyin": "",
    //     "pinyin": "liúchuán",
    //     "level": "HSK4",
    //     "english": "spread"
    // },
    // "新郎": {
    //     "zhuyin": "",
    //     "pinyin": "xīnláng",
    //     "level": "HSK4",
    //     "english": "Groom"
    // },
    // "健身": {
    //     "zhuyin": "",
    //     "pinyin": "jiànshēn",
    //     "level": "HSK4",
    //     "english": "workout"
    // },
    // "测": {
    //     "zhuyin": "",
    //     "pinyin": "cè",
    //     "level": "HSK4",
    //     "english": "survey; fathom; measure; conjecture; infer"
    // },
    // "冰箱": {
    //     "zhuyin": "",
    //     "pinyin": "bīngxiāng",
    //     "level": "HSK4",
    //     "english": "Refrigerator"
    // },
    // "促进": {
    //     "zhuyin": "",
    //     "pinyin": "cùjìn",
    //     "level": "HSK4",
    //     "english": "Promote"
    // },
    // "加班": {
    //     "zhuyin": "",
    //     "pinyin": "jiābān",
    //     "level": "HSK4",
    //     "english": "overtime work"
    // },
    // "学时": {
    //     "zhuyin": "",
    //     "pinyin": "xué shí",
    //     "level": "HSK4",
    //     "english": "class hour; period"
    // },
    // "论文": {
    //     "zhuyin": "",
    //     "pinyin": "lùnwén",
    //     "level": "HSK4",
    //     "english": "paper"
    // },
    // "才": {
    //     "zhuyin": "",
    //     "pinyin": "cái",
    //     "level": "HSK4",
    //     "english": "ability; talent; gift; endowment"
    // },
    // "抽": {
    //     "zhuyin": "",
    //     "pinyin": "chōu",
    //     "level": "HSK4",
    //     "english": "pump; take out; shrink; pick out"
    // },
    // "分手": {
    //     "zhuyin": "",
    //     "pinyin": "fēnshǒu",
    //     "level": "HSK4",
    //     "english": "Break up"
    // },
    // "应": {
    //     "zhuyin": "",
    //     "pinyin": "yīng",
    //     "level": "HSK4",
    //     "english": "should; ought to; answer; respond; promise"
    // },
    // "结构": {
    //     "zhuyin": "",
    //     "pinyin": "jiégòu",
    //     "level": "HSK4",
    //     "english": "structure"
    // },
    // "减少": {
    //     "zhuyin": "",
    //     "pinyin": "jiǎnshǎo",
    //     "level": "HSK4",
    //     "english": "reduce"
    // },
    // "空间": {
    //     "zhuyin": "",
    //     "pinyin": "kōngjiān",
    //     "level": "HSK4",
    //     "english": "space"
    // },
    // "伞": {
    //     "zhuyin": "",
    //     "pinyin": "sǎn",
    //     "level": "HSK4",
    //     "english": "umbrella"
    // },
    // "预订": {
    //     "zhuyin": "",
    //     "pinyin": "yùdìng",
    //     "level": "HSK4",
    //     "english": "book; subscribe for"
    // },
    // "约会": {
    //     "zhuyin": "",
    //     "pinyin": "yuēhuì",
    //     "level": "HSK4",
    //     "english": "Date"
    // },
    // "同情": {
    //     "zhuyin": "",
    //     "pinyin": "tóngqíng",
    //     "level": "HSK4",
    //     "english": "Sympathy"
    // },
    // "企业": {
    //     "zhuyin": "",
    //     "pinyin": "qǐyè",
    //     "level": "HSK4",
    //     "english": "enterprise"
    // },
    // "立即": {
    //     "zhuyin": "",
    //     "pinyin": "lìjí",
    //     "level": "HSK4",
    //     "english": "immediately"
    // },
    // "严重": {
    //     "zhuyin": "",
    //     "pinyin": "yánzhòng",
    //     "level": "HSK4",
    //     "english": "serious"
    // },
    // "宝贵": {
    //     "zhuyin": "",
    //     "pinyin": "bǎoguì",
    //     "level": "HSK4",
    //     "english": "valuable"
    // },
    // "口语": {
    //     "zhuyin": "",
    //     "pinyin": "kǒu yǔ",
    //     "level": "HSK4",
    //     "english": "spoken language"
    // },
    // "平方": {
    //     "zhuyin": "",
    //     "pinyin": "píngfāng",
    //     "level": "HSK4",
    //     "english": "square"
    // },
    // "多样": {
    //     "zhuyin": "",
    //     "pinyin": "duō yàng",
    //     "level": "HSK4",
    //     "english": "diversity"
    // },
    // "付出": {
    //     "zhuyin": "",
    //     "pinyin": "fù chū",
    //     "level": "HSK4",
    //     "english": "pay out"
    // },
    // "航班": {
    //     "zhuyin": "",
    //     "pinyin": "hángbān",
    //     "level": "HSK4",
    //     "english": "flight"
    // },
    // "毫米": {
    //     "zhuyin": "",
    //     "pinyin": "háomǐ",
    //     "level": "HSK4",
    //     "english": "millimeter"
    // },
    // "闪": {
    //     "zhuyin": "",
    //     "pinyin": "shǎn",
    //     "level": "HSK4",
    //     "english": "dodge; get out of the way; sprain; flash; sparkle; shine; lightning"
    // },
    // "末": {
    //     "zhuyin": "",
    //     "pinyin": "mò",
    //     "level": "HSK4",
    //     "english": "end; last; final stage"
    // },
    // "改善": {
    //     "zhuyin": "",
    //     "pinyin": "gǎishàn",
    //     "level": "HSK4",
    //     "english": "Improve"
    // },
    // "老家": {
    //     "zhuyin": "",
    //     "pinyin": "lǎo jiā",
    //     "level": "HSK4",
    //     "english": "hometown; home state"
    // },
    // "抄写": {
    //     "zhuyin": "",
    //     "pinyin": "chāo xiě",
    //     "level": "HSK4",
    //     "english": "copy; transcribe"
    // },
    // "形势": {
    //     "zhuyin": "",
    //     "pinyin": "xíngshì",
    //     "level": "HSK4",
    //     "english": "situation"
    // },
    // "期待": {
    //     "zhuyin": "",
    //     "pinyin": "qīdài",
    //     "level": "HSK4",
    //     "english": "expect; look forward to"
    // },
    // "移": {
    //     "zhuyin": "",
    //     "pinyin": "yí",
    //     "level": "HSK4",
    //     "english": "move; remove; shift; change; alter"
    // },
    // "闪电": {
    //     "zhuyin": "",
    //     "pinyin": "shǎndiàn",
    //     "level": "HSK4",
    //     "english": "lightning"
    // },
    // "酒吧": {
    //     "zhuyin": "",
    //     "pinyin": "jiǔbā",
    //     "level": "HSK4",
    //     "english": "Bar"
    // },
    // "身高": {
    //     "zhuyin": "",
    //     "pinyin": "shēn gāo",
    //     "level": "HSK4",
    //     "english": "height"
    // },
    // "老公": {
    //     "zhuyin": "",
    //     "pinyin": "lǎo gōng",
    //     "level": "HSK4",
    //     "english": "husband"
    // },
    // "鲜花": {
    //     "zhuyin": "",
    //     "pinyin": "xiān huā",
    //     "level": "HSK4",
    //     "english": "fresh flower"
    // },
    // "受不了": {
    //     "zhuyin": "",
    //     "pinyin": "shòubuliǎo",
    //     "level": "HSK4",
    //     "english": "Cannot bear sth"
    // },
    // "行业": {
    //     "zhuyin": "",
    //     "pinyin": "hángyè",
    //     "level": "HSK4",
    //     "english": "industry"
    // },
    // "外汇": {
    //     "zhuyin": "",
    //     "pinyin": "wài huì",
    //     "level": "HSK4",
    //     "english": "foreign exchange; foreign currency"
    // },
    // "追求": {
    //     "zhuyin": "",
    //     "pinyin": "zhuīqiú",
    //     "level": "HSK4",
    //     "english": "Pursuit"
    // },
    // "小吃": {
    //     "zhuyin": "",
    //     "pinyin": "xiǎochī",
    //     "level": "HSK4",
    //     "english": "snack"
    // },
    // "上门": {
    //     "zhuyin": "",
    //     "pinyin": "shàng mén",
    //     "level": "HSK4",
    //     "english": "drop in; visit"
    // },
    // "透明": {
    //     "zhuyin": "",
    //     "pinyin": "tòumíng",
    //     "level": "HSK4",
    //     "english": "transparent"
    // },
    // "寒冷": {
    //     "zhuyin": "",
    //     "pinyin": "hán lěng",
    //     "level": "HSK4",
    //     "english": "cold; frigid; chill; frigidity"
    // },
    // "之前": {
    //     "zhuyin": "",
    //     "pinyin": "zhī qián",
    //     "level": "HSK4",
    //     "english": "before; prior to"
    // },
    // "发烧": {
    //     "zhuyin": "",
    //     "pinyin": "fāshāo",
    //     "level": "HSK4",
    //     "english": "Have a fever"
    // },
    // "夏季": {
    //     "zhuyin": "",
    //     "pinyin": "xià jì",
    //     "level": "HSK4",
    //     "english": "summer"
    // },
    // "胖子": {
    //     "zhuyin": "",
    //     "pinyin": "pàng zi",
    //     "level": "HSK4",
    //     "english": "fat person; fatty"
    // },
    // "反映": {
    //     "zhuyin": "",
    //     "pinyin": "fǎnyìng",
    //     "level": "HSK4",
    //     "english": "reflect"
    // },
    // "天真": {
    //     "zhuyin": "",
    //     "pinyin": "tiānzhēn",
    //     "level": "HSK4",
    //     "english": "naive"
    // },
    // "再三": {
    //     "zhuyin": "",
    //     "pinyin": "zàisān",
    //     "level": "HSK4",
    //     "english": "repeatedly"
    // },
    // "利益": {
    //     "zhuyin": "",
    //     "pinyin": "lìyì",
    //     "level": "HSK4",
    //     "english": "interest"
    // },
    // "一再": {
    //     "zhuyin": "",
    //     "pinyin": "yízài",
    //     "level": "HSK4",
    //     "english": "repeatedly"
    // },
    // "在于": {
    //     "zhuyin": "",
    //     "pinyin": "zàiyú",
    //     "level": "HSK4",
    //     "english": "rest with"
    // },
    // "盖": {
    //     "zhuyin": "",
    //     "pinyin": "gài",
    //     "level": "HSK4",
    //     "english": "cover"
    // },
    // "加油站": {
    //     "zhuyin": "",
    //     "pinyin": "jiāyóuzhàn",
    //     "level": "HSK4",
    //     "english": "Gas station"
    // },
    // "塑料袋": {
    //     "zhuyin": "",
    //     "pinyin": "sùliàodài",
    //     "level": "HSK4",
    //     "english": "Plastic bag"
    // },
    // "没错": {
    //     "zhuyin": "",
    //     "pinyin": "méi cuò",
    //     "level": "HSK4",
    //     "english": "that’s right"
    // },
    // "大规模": {
    //     "zhuyin": "",
    //     "pinyin": "dà guī mó",
    //     "level": "HSK4",
    //     "english": "large-scale; extensive"
    // },
    // "材料": {
    //     "zhuyin": "",
    //     "pinyin": "cáiliào",
    //     "level": "HSK4",
    //     "english": "Materials"
    // },
    // "摆脱": {
    //     "zhuyin": "",
    //     "pinyin": "bǎituō",
    //     "level": "HSK4",
    //     "english": "cast off"
    // },
    // "构造": {
    //     "zhuyin": "",
    //     "pinyin": "gòu zào",
    //     "level": "HSK4",
    //     "english": "structure; construction"
    // },
    // "松": {
    //     "zhuyin": "",
    //     "pinyin": "sōng",
    //     "level": "HSK4",
    //     "english": "pine; loose; slack; loosen; relax; slacken"
    // },
    // "依然": {
    //     "zhuyin": "",
    //     "pinyin": "yīrán",
    //     "level": "HSK4",
    //     "english": "still"
    // },
    // "列入": {
    //     "zhuyin": "",
    //     "pinyin": "liè rù",
    //     "level": "HSK4",
    //     "english": "included in"
    // },
    // "促销": {
    //     "zhuyin": "",
    //     "pinyin": "cù xiāo",
    //     "level": "HSK4",
    //     "english": "promotion"
    // },
    // "保守": {
    //     "zhuyin": "",
    //     "pinyin": "bǎoshǒu",
    //     "level": "HSK4",
    //     "english": "Conservative"
    // },
    // "乐趣": {
    //     "zhuyin": "",
    //     "pinyin": "lèqù",
    //     "level": "HSK4",
    //     "english": "pleasure"
    // },
    // "亲密": {
    //     "zhuyin": "",
    //     "pinyin": "qīnmì",
    //     "level": "HSK4",
    //     "english": "close"
    // },
    // "深厚": {
    //     "zhuyin": "",
    //     "pinyin": "shēn hòu",
    //     "level": "HSK4",
    //     "english": "deep; profound; solid; deep-seated"
    // },
    // "相反": {
    //     "zhuyin": "",
    //     "pinyin": "xiāngfǎn",
    //     "level": "HSK4",
    //     "english": "Contrary"
    // },
    // "出口": {
    //     "zhuyin": "",
    //     "pinyin": "chūkǒu",
    //     "level": "HSK4",
    //     "english": "Exit"
    // },
    // "善于": {
    //     "zhuyin": "",
    //     "pinyin": "shànyú",
    //     "level": "HSK4",
    //     "english": "be good at"
    // },
    // "检测": {
    //     "zhuyin": "",
    //     "pinyin": "jiǎn cè",
    //     "level": "HSK4",
    //     "english": "detect; test"
    // },
    // "思考": {
    //     "zhuyin": "",
    //     "pinyin": "sīkǎo",
    //     "level": "HSK4",
    //     "english": "Reflection"
    // },
    // "想象": {
    //     "zhuyin": "",
    //     "pinyin": "xiǎngxiàng",
    //     "level": "HSK4",
    //     "english": "imagine"
    // },
    // "根": {
    //     "zhuyin": "",
    //     "pinyin": "gēn",
    //     "level": "HSK4",
    //     "english": "root"
    // },
    // "卷": {
    //     "zhuyin": "",
    //     "pinyin": "juàn",
    //     "level": "HSK4",
    //     "english": "volume; file"
    // },
    // "折": {
    //     "zhuyin": "",
    //     "pinyin": "zhé",
    //     "level": "HSK4",
    //     "english": "fracture"
    // },
    // "征求": {
    //     "zhuyin": "",
    //     "pinyin": "zhēngqiú",
    //     "level": "HSK4",
    //     "english": "seek, ask for"
    // },
    // "反而": {
    //     "zhuyin": "",
    //     "pinyin": "fǎn’ér",
    //     "level": "HSK4",
    //     "english": "Instead"
    // },
    // "研究生": {
    //     "zhuyin": "",
    //     "pinyin": "yán jiū shēng",
    //     "level": "HSK4",
    //     "english": "postgraduate; graduate student"
    // },
    // "季节": {
    //     "zhuyin": "",
    //     "pinyin": "jìjié",
    //     "level": "HSK4",
    //     "english": "Season"
    // },
    // "睡着": {
    //     "zhuyin": "",
    //     "pinyin": "shuì zháo",
    //     "level": "HSK4",
    //     "english": "sleep; fall asleep"
    // },
    // "肥": {
    //     "zhuyin": "",
    //     "pinyin": "féi",
    //     "level": "HSK4",
    //     "english": "fat; fertile"
    // },
    // "勇敢": {
    //     "zhuyin": "",
    //     "pinyin": "yǒnggǎn",
    //     "level": "HSK4",
    //     "english": "Brave"
    // },
    // "小型": {
    //     "zhuyin": "",
    //     "pinyin": "xiǎo xíng",
    //     "level": "HSK4",
    //     "english": "small-size; small-scale"
    // },
    // "姐妹": {
    //     "zhuyin": "",
    //     "pinyin": "jiě mèi",
    //     "level": "HSK4",
    //     "english": "sisters"
    // },
    // "品质": {
    //     "zhuyin": "",
    //     "pinyin": "pǐnzhì",
    //     "level": "HSK4",
    //     "english": "quality"
    // },
    // "项目": {
    //     "zhuyin": "",
    //     "pinyin": "xiàngmù",
    //     "level": "HSK4",
    //     "english": "project"
    // },
    // "热闹": {
    //     "zhuyin": "",
    //     "pinyin": "rènao",
    //     "level": "HSK4",
    //     "english": "lively"
    // },
    // "外套": {
    //     "zhuyin": "",
    //     "pinyin": "wài tào",
    //     "level": "HSK4",
    //     "english": "coat"
    // },
    // "研究": {
    //     "zhuyin": "",
    //     "pinyin": "yánjiū",
    //     "level": "HSK4",
    //     "english": "research"
    // },
    // "薄": {
    //     "zhuyin": "",
    //     "pinyin": "báo",
    //     "level": "HSK4",
    //     "english": "thin"
    // },
    // "…分之…": {
    //     "zhuyin": "",
    //     "pinyin": "… fēn zhī …",
    //     "level": "HSK4",
    //     "english": "fractional number"
    // },
    // "积累": {
    //     "zhuyin": "",
    //     "pinyin": "jīlěi",
    //     "level": "HSK4",
    //     "english": "accumulation"
    // },
    // "眼镜": {
    //     "zhuyin": "",
    //     "pinyin": "yǎnjìng",
    //     "level": "HSK4",
    //     "english": "glasses"
    // },
    // "高价": {
    //     "zhuyin": "",
    //     "pinyin": "gāo jià",
    //     "level": "HSK4",
    //     "english": "high price"
    // },
    // "电灯": {
    //     "zhuyin": "",
    //     "pinyin": "diàn dēng",
    //     "level": "HSK4",
    //     "english": "electric light"
    // },
    // "了不起": {
    //     "zhuyin": "",
    //     "pinyin": "liǎobuqǐ",
    //     "level": "HSK4",
    //     "english": "Amazing"
    // },
    // "非": {
    //     "zhuyin": "",
    //     "pinyin": "fēi",
    //     "level": "HSK4",
    //     "english": "wrong"
    // },
    // "之间": {
    //     "zhuyin": "",
    //     "pinyin": "zhī jiān",
    //     "level": "HSK4",
    //     "english": "between; among"
    // },
    // "设置": {
    //     "zhuyin": "",
    //     "pinyin": "shèzhì",
    //     "level": "HSK4",
    //     "english": "Set up"
    // },
    // "合同": {
    //     "zhuyin": "",
    //     "pinyin": "hétong",
    //     "level": "HSK4",
    //     "english": "contract"
    // },
    // "养成": {
    //     "zhuyin": "",
    //     "pinyin": "yǎngchéng",
    //     "level": "HSK4",
    //     "english": "Cultivate"
    // },
    // "自": {
    //     "zhuyin": "",
    //     "pinyin": "zì",
    //     "level": "HSK4",
    //     "english": "from; since; self; oneself"
    // },
    // "测量": {
    //     "zhuyin": "",
    //     "pinyin": "cèliáng",
    //     "level": "HSK4",
    //     "english": "measure"
    // },
    // "精力": {
    //     "zhuyin": "",
    //     "pinyin": "jīnglì",
    //     "level": "HSK4",
    //     "english": "energy"
    // },
    // "名片": {
    //     "zhuyin": "",
    //     "pinyin": "míngpiàn",
    //     "level": "HSK4",
    //     "english": "business card"
    // },
    // "严": {
    //     "zhuyin": "",
    //     "pinyin": "yán",
    //     "level": "HSK4",
    //     "english": "strict; tight; severe; stern"
    // },
    // "引": {
    //     "zhuyin": "",
    //     "pinyin": "yǐn",
    //     "level": "HSK4",
    //     "english": "lead; guide; draw; stretch; lure; attract; cause"
    // },
    // "处": {
    //     "zhuyin": "",
    //     "pinyin": "chǔ",
    //     "level": "HSK4",
    //     "english": "dwell; live; be in a position of"
    // },
    // "看望": {
    //     "zhuyin": "",
    //     "pinyin": "kànwàng",
    //     "level": "HSK4",
    //     "english": "visit"
    // },
    // "亲爱": {
    //     "zhuyin": "",
    //     "pinyin": "qīn’ài",
    //     "level": "HSK4",
    //     "english": "Dear"
    // },
    // "销售": {
    //     "zhuyin": "",
    //     "pinyin": "xiāoshòu",
    //     "level": "HSK4",
    //     "english": "Sale"
    // },
    // "阶段": {
    //     "zhuyin": "",
    //     "pinyin": "jiēduàn",
    //     "level": "HSK4",
    //     "english": "stage"
    // },
    // "光盘": {
    //     "zhuyin": "",
    //     "pinyin": "guāngpán",
    //     "level": "HSK4",
    //     "english": "CD"
    // },
    // "各个": {
    //     "zhuyin": "",
    //     "pinyin": "gè gè",
    //     "level": "HSK4",
    //     "english": "each"
    // },
    // "摇": {
    //     "zhuyin": "",
    //     "pinyin": "yáo",
    //     "level": "HSK4",
    //     "english": "shake"
    // },
    // "赏": {
    //     "zhuyin": "",
    //     "pinyin": "shǎng",
    //     "level": "HSK4",
    //     "english": "award; appreciate; reward"
    // },
    // "毛巾": {
    //     "zhuyin": "",
    //     "pinyin": "máojīn",
    //     "level": "HSK4",
    //     "english": "Towel"
    // },
    // "赞赏": {
    //     "zhuyin": "",
    //     "pinyin": "zàn shǎng",
    //     "level": "HSK4",
    //     "english": "praise; panegyrize; eulogize; admiration"
    // },
    // "刷子": {
    //     "zhuyin": "",
    //     "pinyin": "shuā zi",
    //     "level": "HSK4",
    //     "english": "brush; scrub"
    // },
    // "老婆": {
    //     "zhuyin": "",
    //     "pinyin": "lǎopó",
    //     "level": "HSK4",
    //     "english": "wife"
    // },
    // "散": {
    //     "zhuyin": "",
    //     "pinyin": "sàn",
    //     "level": "HSK4",
    //     "english": "break up; disperse; distribute; disseminate; give out"
    // },
    // "优良": {
    //     "zhuyin": "",
    //     "pinyin": "yōu liáng",
    //     "level": "HSK4",
    //     "english": "fine; good; excellent"
    // },
    // "闹": {
    //     "zhuyin": "",
    //     "pinyin": "nào",
    //     "level": "HSK4",
    //     "english": "noisy; make a noise; suffer; be troubled"
    // },
    // "过分": {
    //     "zhuyin": "",
    //     "pinyin": "guòfèn",
    //     "level": "HSK4",
    //     "english": "excessive"
    // },
    // "毫升": {
    //     "zhuyin": "",
    //     "pinyin": "háo shēng",
    //     "level": "HSK4",
    //     "english": "milliliter"
    // },
    // "哪怕": {
    //     "zhuyin": "",
    //     "pinyin": "nǎpà",
    //     "level": "HSK4",
    //     "english": "even if"
    // },
    // "摸": {
    //     "zhuyin": "",
    //     "pinyin": "mō",
    //     "level": "HSK4",
    //     "english": "feel"
    // },
    // "作为": {
    //     "zhuyin": "",
    //     "pinyin": "zuòwéi",
    //     "level": "HSK4",
    //     "english": "As"
    // },
    // "圆满": {
    //     "zhuyin": "",
    //     "pinyin": "yuánmǎn",
    //     "level": "HSK4",
    //     "english": "Satisfactorily"
    // },
    // "问候": {
    //     "zhuyin": "",
    //     "pinyin": "wènhòu",
    //     "level": "HSK4",
    //     "english": "To greet"
    // },
    // "规律": {
    //     "zhuyin": "",
    //     "pinyin": "guīlǜ",
    //     "level": "HSK4",
    //     "english": "Law"
    // },
    // "亚运会": {
    //     "zhuyin": "",
    //     "pinyin": "yà yùn huì",
    //     "level": "HSK4",
    //     "english": "Asian Games"
    // },
    // "种": {
    //     "zhuyin": "",
    //     "pinyin": "zhǒng",
    //     "level": "HSK4",
    //     "english": "species"
    // },
    // "套餐": {
    //     "zhuyin": "",
    //     "pinyin": "tào cān",
    //     "level": "HSK4",
    //     "english": "set meal"
    // },
    // "暖气": {
    //     "zhuyin": "",
    //     "pinyin": "nuǎn qì",
    //     "level": "HSK4",
    //     "english": "central heating; heating; heater"
    // },
    // "标志": {
    //     "zhuyin": "",
    //     "pinyin": "biāozhì",
    //     "level": "HSK4",
    //     "english": "sign"
    // },
    // "随手": {
    //     "zhuyin": "",
    //     "pinyin": "suíshǒu",
    //     "level": "HSK4",
    //     "english": "Readily"
    // },
    // "热心": {
    //     "zhuyin": "",
    //     "pinyin": "rèxīn",
    //     "level": "HSK4",
    //     "english": "enthusiastic"
    // },
    // "儿童": {
    //     "zhuyin": "",
    //     "pinyin": "értóng",
    //     "level": "HSK4",
    //     "english": "children"
    // },
    // "得": {
    //     "zhuyin": "",
    //     "pinyin": "děi",
    //     "level": "HSK4",
    //     "english": "need; must; have to; be sure to"
    // },
    // "抄": {
    //     "zhuyin": "",
    //     "pinyin": "chāo",
    //     "level": "HSK4",
    //     "english": "copy"
    // },
    // "多种": {
    //     "zhuyin": "",
    //     "pinyin": "duō zhǒng",
    //     "level": "HSK4",
    //     "english": "multiple; various; diversified; manifold"
    // },
    // "在乎": {
    //     "zhuyin": "",
    //     "pinyin": "zàihu",
    //     "level": "HSK4",
    //     "english": "care about"
    // },
    // "移动": {
    //     "zhuyin": "",
    //     "pinyin": "yídòng",
    //     "level": "HSK4",
    //     "english": "move"
    // },
    // "尽力": {
    //     "zhuyin": "",
    //     "pinyin": "jìnlì",
    //     "level": "HSK4",
    //     "english": "Try the best"
    // },
    // "食堂": {
    //     "zhuyin": "",
    //     "pinyin": "shí táng",
    //     "level": "HSK4",
    //     "english": "dining room; mess hall; canteen"
    // },
    // "括号": {
    //     "zhuyin": "",
    //     "pinyin": "kuò hào",
    //     "level": "HSK4",
    //     "english": "brackets; parentheses"
    // },
    // "空": {
    //     "zhuyin": "",
    //     "pinyin": "kōng",
    //     "level": "HSK4",
    //     "english": "empty"
    // },
    // "能干": {
    //     "zhuyin": "",
    //     "pinyin": "nénggàn",
    //     "level": "HSK4",
    //     "english": "capable"
    // },
    // "叔叔": {
    //     "zhuyin": "",
    //     "pinyin": "shūshu",
    //     "level": "HSK4",
    //     "english": "uncle"
    // },
    // "结论": {
    //     "zhuyin": "",
    //     "pinyin": "jiélùn",
    //     "level": "HSK4",
    //     "english": "conclusion"
    // },
    // "居住": {
    //     "zhuyin": "",
    //     "pinyin": "jūzhù",
    //     "level": "HSK4",
    //     "english": "live"
    // },
    // "巴士": {
    //     "zhuyin": "",
    //     "pinyin": "bā shì",
    //     "level": "HSK4",
    //     "english": "bus"
    // },
    // "承受": {
    //     "zhuyin": "",
    //     "pinyin": "chéngshòu",
    //     "level": "HSK4",
    //     "english": "bear"
    // },
    // "药物": {
    //     "zhuyin": "",
    //     "pinyin": "yào wù",
    //     "level": "HSK4",
    //     "english": "drug; medicine"
    // },
    // "具备": {
    //     "zhuyin": "",
    //     "pinyin": "jùbèi",
    //     "level": "HSK4",
    //     "english": "Have, possess"
    // },
    // "百货": {
    //     "zhuyin": "",
    //     "pinyin": "bǎi huò",
    //     "level": "HSK4",
    //     "english": "department store; general merchandise"
    // },
    // "无论": {
    //     "zhuyin": "",
    //     "pinyin": "wúlùn",
    //     "level": "HSK4",
    //     "english": "no matter"
    // },
    // "稳": {
    //     "zhuyin": "",
    //     "pinyin": "wěn",
    //     "level": "HSK4",
    //     "english": "steady; stable; sure; certain"
    // },
    // "翻译": {
    //     "zhuyin": "",
    //     "pinyin": "fānyì",
    //     "level": "HSK4",
    //     "english": "translate"
    // },
    // "表情": {
    //     "zhuyin": "",
    //     "pinyin": "biǎoqíng",
    //     "level": "HSK4",
    //     "english": "Expression"
    // },
    // "风俗": {
    //     "zhuyin": "",
    //     "pinyin": "fēngsú",
    //     "level": "HSK4",
    //     "english": "Customs"
    // },
    // "脱": {
    //     "zhuyin": "",
    //     "pinyin": "tuō",
    //     "level": "HSK4",
    //     "english": "take off"
    // },
    // "规则": {
    //     "zhuyin": "",
    //     "pinyin": "guīzé",
    //     "level": "HSK4",
    //     "english": "rule"
    // },
    // "投": {
    //     "zhuyin": "",
    //     "pinyin": "tóu",
    //     "level": "HSK4",
    //     "english": "throw; fling; hurl; cast; drop; put in; send; go to"
    // },
    // "梦": {
    //     "zhuyin": "",
    //     "pinyin": "mèng",
    //     "level": "HSK4",
    //     "english": "dream"
    // },
    // "宝宝": {
    //     "zhuyin": "",
    //     "pinyin": "bǎo bao",
    //     "level": "HSK4",
    //     "english": "baby; darling"
    // },
    // "指挥": {
    //     "zhuyin": "",
    //     "pinyin": "zhǐhuī",
    //     "level": "HSK4",
    //     "english": "command"
    // },
    // "获取": {
    //     "zhuyin": "",
    //     "pinyin": "huò qǔ",
    //     "level": "HSK4",
    //     "english": "gain; obtain"
    // },
    // "中奖": {
    //     "zhuyin": "",
    //     "pinyin": "zhòng jiǎng",
    //     "level": "HSK4",
    //     "english": "win a lottery"
    // },
    // "描述": {
    //     "zhuyin": "",
    //     "pinyin": "miáo shù",
    //     "level": "HSK4",
    //     "english": "describe; depict; description"
    // },
    // "大楼": {
    //     "zhuyin": "",
    //     "pinyin": "dà lóu",
    //     "level": "HSK4",
    //     "english": "building; large building"
    // },
    // "不然": {
    //     "zhuyin": "",
    //     "pinyin": "bùrán",
    //     "level": "HSK4",
    //     "english": "otherwise"
    // },
    // "维修": {
    //     "zhuyin": "",
    //     "pinyin": "wéixiū",
    //     "level": "HSK4",
    //     "english": "Repair"
    // },
    // "暗": {
    //     "zhuyin": "",
    //     "pinyin": "àn",
    //     "level": "HSK4",
    //     "english": "dark"
    // },
    // "改正": {
    //     "zhuyin": "",
    //     "pinyin": "gǎizhèng",
    //     "level": "HSK4",
    //     "english": "correction"
    // },
    // "阻止": {
    //     "zhuyin": "",
    //     "pinyin": "zǔzhǐ",
    //     "level": "HSK4",
    //     "english": "prevent"
    // },
    // "忽视": {
    //     "zhuyin": "",
    //     "pinyin": "hūshì",
    //     "level": "HSK4",
    //     "english": "Ignore"
    // },
    // "邮局": {
    //     "zhuyin": "",
    //     "pinyin": "yóujú",
    //     "level": "HSK4",
    //     "english": "Post Office"
    // },
    // "货": {
    //     "zhuyin": "",
    //     "pinyin": "huò",
    //     "level": "HSK4",
    //     "english": "goods; commodity; money"
    // },
    // "关于": {
    //     "zhuyin": "",
    //     "pinyin": "guānyú",
    //     "level": "HSK4",
    //     "english": "about"
    // },
    // "总统": {
    //     "zhuyin": "",
    //     "pinyin": "zǒngtǒng",
    //     "level": "HSK4",
    //     "english": "President"
    // },
    // "上楼": {
    //     "zhuyin": "",
    //     "pinyin": "shàng lóu",
    //     "level": "HSK4",
    //     "english": "go upstairs"
    // },
    // "机构": {
    //     "zhuyin": "",
    //     "pinyin": "jīgòu",
    //     "level": "HSK4",
    //     "english": "mechanism"
    // },
    // "气球": {
    //     "zhuyin": "",
    //     "pinyin": "qì qiú",
    //     "level": "HSK4",
    //     "english": "balloon"
    // },
    // "划": {
    //     "zhuyin": "",
    //     "pinyin": "huá",
    //     "level": "HSK4",
    //     "english": "paddle, row"
    // },
    // "比分": {
    //     "zhuyin": "",
    //     "pinyin": "bǐ fēn",
    //     "level": "HSK4",
    //     "english": "score"
    // },
    // "手工": {
    //     "zhuyin": "",
    //     "pinyin": "shǒugōng",
    //     "level": "HSK4",
    //     "english": "manual"
    // },
    // "青春": {
    //     "zhuyin": "",
    //     "pinyin": "qīngchūn",
    //     "level": "HSK4",
    //     "english": "Youth"
    // },
    // "填空": {
    //     "zhuyin": "",
    //     "pinyin": "tiánkòng",
    //     "level": "HSK4",
    //     "english": "Fill in the blanks"
    // },
    // "神秘": {
    //     "zhuyin": "",
    //     "pinyin": "shénmì",
    //     "level": "HSK4",
    //     "english": "mysterious"
    // },
    // "眼里": {
    //     "zhuyin": "",
    //     "pinyin": "yǎn lǐ",
    //     "level": "HSK4",
    //     "english": "within one’s vision; in one’s eyes"
    // },
    // "引进": {
    //     "zhuyin": "",
    //     "pinyin": "yǐn jìn",
    //     "level": "HSK4",
    //     "english": "introduce from elsewhere; bring in; recommend"
    // },
    // "潮流": {
    //     "zhuyin": "",
    //     "pinyin": "cháoliú",
    //     "level": "HSK4",
    //     "english": "Trend"
    // },
    // "默默": {
    //     "zhuyin": "",
    //     "pinyin": "mòmò",
    //     "level": "HSK4",
    //     "english": "silently"
    // },
    // "玉": {
    //     "zhuyin": "",
    //     "pinyin": "yù",
    //     "level": "HSK4",
    //     "english": "jade"
    // },
    // "培训": {
    //     "zhuyin": "",
    //     "pinyin": "péixùn",
    //     "level": "HSK4",
    //     "english": "Train"
    // },
    // "无法": {
    //     "zhuyin": "",
    //     "pinyin": "wú fǎ",
    //     "level": "HSK4",
    //     "english": "unable; incapable"
    // },
    // "技巧": {
    //     "zhuyin": "",
    //     "pinyin": "jìqiǎo",
    //     "level": "HSK4",
    //     "english": "Skill"
    // },
    // "穿上": {
    //     "zhuyin": "",
    //     "pinyin": "chuān shàng",
    //     "level": "HSK4",
    //     "english": "put on"
    // },
    // "词汇": {
    //     "zhuyin": "",
    //     "pinyin": "cíhuì",
    //     "level": "HSK4",
    //     "english": "vocabulary"
    // },
    // "降价": {
    //     "zhuyin": "",
    //     "pinyin": "jiàng jià",
    //     "level": "HSK4",
    //     "english": "cut price; reduce price"
    // },
    // "辩论": {
    //     "zhuyin": "",
    //     "pinyin": "biànlùn",
    //     "level": "HSK4",
    //     "english": "Debate"
    // },
    // "下降": {
    //     "zhuyin": "",
    //     "pinyin": "xià jiàng",
    //     "level": "HSK4",
    //     "english": "decline; drop; decrease; fall; go down"
    // },
    // "以内": {
    //     "zhuyin": "",
    //     "pinyin": "yǐ nèi",
    //     "level": "HSK4",
    //     "english": "within"
    // },
    // "开花": {
    //     "zhuyin": "",
    //     "pinyin": "kāi huā",
    //     "level": "HSK4",
    //     "english": "flower; bloom; blossom"
    // },
    // "系": {
    //     "zhuyin": "",
    //     "pinyin": "xì",
    //     "level": "HSK4",
    //     "english": "department"
    // },
    // "地址": {
    //     "zhuyin": "",
    //     "pinyin": "dìzhǐ",
    //     "level": "HSK4",
    //     "english": "address"
    // },
    // "穷": {
    //     "zhuyin": "",
    //     "pinyin": "qióng",
    //     "level": "HSK4",
    //     "english": "poor"
    // },
    // "遇见": {
    //     "zhuyin": "",
    //     "pinyin": "yù jiàn",
    //     "level": "HSK4",
    //     "english": "meet; come across"
    // },
    // "冬季": {
    //     "zhuyin": "",
    //     "pinyin": "dōng jì",
    //     "level": "HSK4",
    //     "english": "winter"
    // },
    // "毕业生": {
    //     "zhuyin": "",
    //     "pinyin": "bì yè shēng",
    //     "level": "HSK4",
    //     "english": "graduate"
    // },
    // "长途": {
    //     "zhuyin": "",
    //     "pinyin": "chángtú",
    //     "level": "HSK4",
    //     "english": "Long-distance"
    // },
    // "转身": {
    //     "zhuyin": "",
    //     "pinyin": "zhuǎn shēn",
    //     "level": "HSK4",
    //     "english": "turn round; face about"
    // },
    // "大会": {
    //     "zhuyin": "",
    //     "pinyin": "dà huì",
    //     "level": "HSK4",
    //     "english": "convention; general meeting; General Assembly"
    // },
    // "植物": {
    //     "zhuyin": "",
    //     "pinyin": "zhíwù",
    //     "level": "HSK4",
    //     "english": "Botany"
    // },
    // "急忙": {
    //     "zhuyin": "",
    //     "pinyin": "jímáng",
    //     "level": "HSK4",
    //     "english": "Hastily"
    // },
    // "充电": {
    //     "zhuyin": "",
    //     "pinyin": "chōng diàn",
    //     "level": "HSK4",
    //     "english": "recharge; charge"
    // },
    // "败": {
    //     "zhuyin": "",
    //     "pinyin": "bài",
    //     "level": "HSK4",
    //     "english": "defeat; beat; fail; lose"
    // },
    // "男女": {
    //     "zhuyin": "",
    //     "pinyin": "nán nǚ",
    //     "level": "HSK4",
    //     "english": "men and women; male and female"
    // },
    // "下个月": {
    //     "zhuyin": "",
    //     "pinyin": "xià gè yuè",
    //     "level": "HSK4",
    //     "english": "next month"
    // },
    // "矮小": {
    //     "zhuyin": "",
    //     "pinyin": "ǎi xiǎo",
    //     "level": "HSK4",
    //     "english": "short and small; low and small; undersized"
    // },
    // "潮湿": {
    //     "zhuyin": "",
    //     "pinyin": "cháoshī",
    //     "level": "HSK4",
    //     "english": "damp"
    // },
    // "有限": {
    //     "zhuyin": "",
    //     "pinyin": "yǒu xiàn",
    //     "level": "HSK4",
    //     "english": "limited; finite"
    // },
    // "综合": {
    //     "zhuyin": "",
    //     "pinyin": "zōnghé",
    //     "level": "HSK4",
    //     "english": "comprehensive"
    // },
    // "街道": {
    //     "zhuyin": "",
    //     "pinyin": "jiēdào",
    //     "level": "HSK4",
    //     "english": "Street"
    // },
    // "演讲": {
    //     "zhuyin": "",
    //     "pinyin": "yǎnjiǎng",
    //     "level": "HSK4",
    //     "english": "speech"
    // },
    // "色彩": {
    //     "zhuyin": "",
    //     "pinyin": "sècǎi",
    //     "level": "HSK4",
    //     "english": "color"
    // },
    // "答案": {
    //     "zhuyin": "",
    //     "pinyin": "dá’àn",
    //     "level": "HSK4",
    //     "english": "Answer"
    // },
    // "培训班": {
    //     "zhuyin": "",
    //     "pinyin": "péi xùn bān",
    //     "level": "HSK4",
    //     "english": "training class"
    // },
    // "网址": {
    //     "zhuyin": "",
    //     "pinyin": "wǎng zhǐ",
    //     "level": "HSK4",
    //     "english": "Internet site; website; URL"
    // },
    // "吸烟": {
    //     "zhuyin": "",
    //     "pinyin": "xī yān",
    //     "level": "HSK4",
    //     "english": "smoke"
    // },
    // "试卷": {
    //     "zhuyin": "",
    //     "pinyin": "shìjuàn",
    //     "level": "HSK4",
    //     "english": "test paper"
    // },
    // "细": {
    //     "zhuyin": "",
    //     "pinyin": "xì",
    //     "level": "HSK4",
    //     "english": "thin; slender; delicate; careful; trifling"
    // },
    // "地面": {
    //     "zhuyin": "",
    //     "pinyin": "dì miàn",
    //     "level": "HSK4",
    //     "english": "ground; floor; surface"
    // },
    // "排列": {
    //     "zhuyin": "",
    //     "pinyin": "páiliè",
    //     "level": "HSK4",
    //     "english": "array"
    // },
    // "号码": {
    //     "zhuyin": "",
    //     "pinyin": "hàomǎ",
    //     "level": "HSK4",
    //     "english": "number"
    // },
    // "兄弟": {
    //     "zhuyin": "",
    //     "pinyin": "xiōngdì",
    //     "level": "HSK4",
    //     "english": "Brother"
    // },
    // "淡": {
    //     "zhuyin": "",
    //     "pinyin": "dàn",
    //     "level": "HSK4",
    //     "english": "light"
    // },
    // "迅速": {
    //     "zhuyin": "",
    //     "pinyin": "xùnsù",
    //     "level": "HSK4",
    //     "english": "rapid"
    // },
    // "工程": {
    //     "zhuyin": "",
    //     "pinyin": "gōng chéng",
    //     "level": "HSK4",
    //     "english": "engineering; project"
    // },
    // "降落": {
    //     "zhuyin": "",
    //     "pinyin": "jiàngluò",
    //     "level": "HSK4",
    //     "english": "land"
    // },
    // "极其": {
    //     "zhuyin": "",
    //     "pinyin": "jíqí",
    //     "level": "HSK4",
    //     "english": "extremely"
    // },
    // "体检": {
    //     "zhuyin": "",
    //     "pinyin": "tǐ jiǎn",
    //     "level": "HSK4",
    //     "english": "physical examination"
    // },
    // "系统": {
    //     "zhuyin": "",
    //     "pinyin": "xìtǒng",
    //     "level": "HSK4",
    //     "english": "system"
    // },
    // "贴": {
    //     "zhuyin": "",
    //     "pinyin": "tiē",
    //     "level": "HSK4",
    //     "english": "stick; paste; glue; nestle up to; keep close to"
    // },
    // "项": {
    //     "zhuyin": "",
    //     "pinyin": "xiàng",
    //     "level": "HSK4",
    //     "english": "term"
    // },
    // "味儿": {
    //     "zhuyin": "",
    //     "pinyin": "wèir",
    //     "level": "HSK4",
    //     "english": "flavor; taste"
    // },
    // "冰": {
    //     "zhuyin": "",
    //     "pinyin": "bīng",
    //     "level": "HSK4",
    //     "english": "ice"
    // },
    // "堵车": {
    //     "zhuyin": "",
    //     "pinyin": "dǔchē",
    //     "level": "HSK4",
    //     "english": "Traffic jam"
    // },
    // "刷牙": {
    //     "zhuyin": "",
    //     "pinyin": "shuāyá",
    //     "level": "HSK4",
    //     "english": "Brush one’s teeth"
    // },
    // "上个月": {
    //     "zhuyin": "",
    //     "pinyin": "shàng gè yuè",
    //     "level": "HSK4",
    //     "english": "last month"
    // },
    // "海鲜": {
    //     "zhuyin": "",
    //     "pinyin": "hǎixiān",
    //     "level": "HSK4",
    //     "english": "seafood"
    // },
    // "花": {
    //     "zhuyin": "",
    //     "pinyin": "huā",
    //     "level": "HSK4",
    //     "english": "multicoloured; coloured; flowery"
    // },
    // "机遇": {
    //     "zhuyin": "",
    //     "pinyin": "jīyù",
    //     "level": "HSK4",
    //     "english": "Opportunity"
    // },
    // "心理": {
    //     "zhuyin": "",
    //     "pinyin": "xīnlǐ",
    //     "level": "HSK4",
    //     "english": "Psychology"
    // },
    // "刺激": {
    //     "zhuyin": "",
    //     "pinyin": "cìjī",
    //     "level": "HSK4",
    //     "english": "stimulate"
    // },
    // "来得及": {
    //     "zhuyin": "",
    //     "pinyin": "láidejí",
    //     "level": "HSK4",
    //     "english": "In time"
    // },
    // "针": {
    //     "zhuyin": "",
    //     "pinyin": "zhēn",
    //     "level": "HSK4",
    //     "english": "needle; injection"
    // },
    // "投资": {
    //     "zhuyin": "",
    //     "pinyin": "tóuzī",
    //     "level": "HSK4",
    //     "english": "Investment"
    // },
    // "考察": {
    //     "zhuyin": "",
    //     "pinyin": "kǎochá",
    //     "level": "HSK4",
    //     "english": "Investigate"
    // },
    // "酸奶": {
    //     "zhuyin": "",
    //     "pinyin": "suān nǎi",
    //     "level": "HSK4",
    //     "english": "yogurt"
    // },
    // "眼泪": {
    //     "zhuyin": "",
    //     "pinyin": "yǎn lèi",
    //     "level": "HSK4",
    //     "english": "tear; eyedrop"
    // },
    // "零食": {
    //     "zhuyin": "",
    //     "pinyin": "língshí",
    //     "level": "HSK4",
    //     "english": "snacks"
    // },
    // "面临": {
    //     "zhuyin": "",
    //     "pinyin": "miànlín",
    //     "level": "HSK4",
    //     "english": "face"
    // },
    // "延期": {
    //     "zhuyin": "",
    //     "pinyin": "yánqī",
    //     "level": "HSK4",
    //     "english": "Delay"
    // },
    // "代替": {
    //     "zhuyin": "",
    //     "pinyin": "dàitì",
    //     "level": "HSK4",
    //     "english": "replace"
    // },
    // "讲座": {
    //     "zhuyin": "",
    //     "pinyin": "jiǎngzuò",
    //     "level": "HSK4",
    //     "english": "Lecture"
    // },
    // "装修": {
    //     "zhuyin": "",
    //     "pinyin": "zhuāngxiū",
    //     "level": "HSK4",
    //     "english": "decorate house"
    // },
    // "包括": {
    //     "zhuyin": "",
    //     "pinyin": "bāokuò",
    //     "level": "HSK4",
    //     "english": "Include"
    // },
    // "距离": {
    //     "zhuyin": "",
    //     "pinyin": "jùlí",
    //     "level": "HSK4",
    //     "english": "distance"
    // },
    // "打败": {
    //     "zhuyin": "",
    //     "pinyin": "dǎ bài",
    //     "level": "HSK4",
    //     "english": "defeat; beat; be defeated"
    // },
    // "含有": {
    //     "zhuyin": "",
    //     "pinyin": "hán yǒu",
    //     "level": "HSK4",
    //     "english": "contain; have"
    // },
    // "著作": {
    //     "zhuyin": "",
    //     "pinyin": "zhùzuò",
    //     "level": "HSK4",
    //     "english": "Work"
    // },
    // "燃料": {
    //     "zhuyin": "",
    //     "pinyin": "rán liào",
    //     "level": "HSK4",
    //     "english": "fuel"
    // },
    // "鲜明": {
    //     "zhuyin": "",
    //     "pinyin": "xiānmíng",
    //     "level": "HSK4",
    //     "english": "distinct"
    // },
    // "挑选": {
    //     "zhuyin": "",
    //     "pinyin": "tiāo xuǎn",
    //     "level": "HSK4",
    //     "english": "pick; choose; select; pick out"
    // },
    // "优秀": {
    //     "zhuyin": "",
    //     "pinyin": "yōuxiù",
    //     "level": "HSK4",
    //     "english": "excellent"
    // },
    // "有劲儿": {
    //     "zhuyin": "",
    //     "pinyin": "yǒu jìnr",
    //     "level": "HSK4",
    //     "english": "strong; energetic"
    // },
    // "爱国": {
    //     "zhuyin": "",
    //     "pinyin": "ài guó",
    //     "level": "HSK4",
    //     "english": "love one’s country; be patriotic"
    // },
    // "期限": {
    //     "zhuyin": "",
    //     "pinyin": "qīxiàn",
    //     "level": "HSK4",
    //     "english": "term"
    // },
    // "感兴趣": {
    //     "zhuyin": "",
    //     "pinyin": "gǎnxìngqù",
    //     "level": "HSK4",
    //     "english": "be intretested in"
    // },
    // "刷": {
    //     "zhuyin": "",
    //     "pinyin": "shuā",
    //     "level": "HSK4",
    //     "english": "brush; scrub; paste up"
    // },
    // "无数": {
    //     "zhuyin": "",
    //     "pinyin": "wúshù",
    //     "level": "HSK4",
    //     "english": "Countless"
    // },
    // "轻易": {
    //     "zhuyin": "",
    //     "pinyin": "qīngyì",
    //     "level": "HSK4",
    //     "english": "easily"
    // },
    // "步行": {
    //     "zhuyin": "",
    //     "pinyin": "bù xíng",
    //     "level": "HSK4",
    //     "english": "go on foot; walk"
    // },
    // "黄瓜": {
    //     "zhuyin": "",
    //     "pinyin": "huáng guā",
    //     "level": "HSK4",
    //     "english": "cucumber; cuke"
    // },
    // "妻子": {
    //     "zhuyin": "",
    //     "pinyin": "qīzi",
    //     "level": "HSK4",
    //     "english": "Wife"
    // },
    // "官方": {
    //     "zhuyin": "",
    //     "pinyin": "guānfāng",
    //     "level": "HSK4",
    //     "english": "by the government official"
    // },
    // "高潮": {
    //     "zhuyin": "",
    //     "pinyin": "gāocháo",
    //     "level": "HSK4",
    //     "english": "climax"
    // },
    // "沉": {
    //     "zhuyin": "",
    //     "pinyin": "chén",
    //     "level": "HSK4",
    //     "english": "sink; keep down; lower; deep; profound; heavy"
    // },
    // "申请": {
    //     "zhuyin": "",
    //     "pinyin": "shēnqǐng",
    //     "level": "HSK4",
    //     "english": "Apply"
    // },
    // "酸": {
    //     "zhuyin": "",
    //     "pinyin": "suān",
    //     "level": "HSK4",
    //     "english": "acid"
    // },
    // "固定": {
    //     "zhuyin": "",
    //     "pinyin": "gùdìng",
    //     "level": "HSK4",
    //     "english": "fixed"
    // },
    // "祝福": {
    //     "zhuyin": "",
    //     "pinyin": "zhùfú",
    //     "level": "HSK4",
    //     "english": "blessing"
    // },
    // "季度": {
    //     "zhuyin": "",
    //     "pinyin": "jìdù",
    //     "level": "HSK4",
    //     "english": "quarter (of a year)"
    // },
    // "窗子": {
    //     "zhuyin": "",
    //     "pinyin": "chuāng zi",
    //     "level": "HSK4",
    //     "english": "window"
    // },
    // "新型": {
    //     "zhuyin": "",
    //     "pinyin": "xīn xíng",
    //     "level": "HSK4",
    //     "english": "new type; new kind"
    // },
    // "经典": {
    //     "zhuyin": "",
    //     "pinyin": "jīngdiǎn",
    //     "level": "HSK4",
    //     "english": "classics; scriptures"
    // },
    // "外交官": {
    //     "zhuyin": "",
    //     "pinyin": "wài jiāo guān",
    //     "level": "HSK4",
    //     "english": "diplomat; diplomatist"
    // },
    // "器官": {
    //     "zhuyin": "",
    //     "pinyin": "qìguān",
    //     "level": "HSK4",
    //     "english": "organ"
    // },
    // "陆续": {
    //     "zhuyin": "",
    //     "pinyin": "lùxù",
    //     "level": "HSK4",
    //     "english": "One after another"
    // },
    // "西瓜": {
    //     "zhuyin": "",
    //     "pinyin": "xīguā",
    //     "level": "HSK4",
    //     "english": "watermelon"
    // },
    // "争论": {
    //     "zhuyin": "",
    //     "pinyin": "zhēnglùn",
    //     "level": "HSK4",
    //     "english": "debate"
    // },
    // "此": {
    //     "zhuyin": "",
    //     "pinyin": "cǐ",
    //     "level": "HSK4",
    //     "english": "this; these; now; here"
    // },
    // "治疗": {
    //     "zhuyin": "",
    //     "pinyin": "zhìliáo",
    //     "level": "HSK4",
    //     "english": "Treatment"
    // },
    // "面试": {
    //     "zhuyin": "",
    //     "pinyin": "miàn shì",
    //     "level": "HSK4",
    //     "english": "interview; audition"
    // },
    // "垃圾": {
    //     "zhuyin": "",
    //     "pinyin": "lā jī",
    //     "level": "HSK4",
    //     "english": "rubbish; garbage; refuse; waste"
    // },
    // "爱护": {
    //     "zhuyin": "",
    //     "pinyin": "àihù",
    //     "level": "HSK4",
    //     "english": "Care"
    // },
    // "宝贝": {
    //     "zhuyin": "",
    //     "pinyin": "bǎobèi",
    //     "level": "HSK4",
    //     "english": "baby"
    // },
    // "牌": {
    //     "zhuyin": "",
    //     "pinyin": "pái",
    //     "level": "HSK4",
    //     "english": "brand; cards; plate; tablet"
    // },
    // "总理": {
    //     "zhuyin": "",
    //     "pinyin": "zǒnglǐ",
    //     "level": "HSK4",
    //     "english": "prime minister"
    // },
    // "秘密": {
    //     "zhuyin": "",
    //     "pinyin": "mìmì",
    //     "level": "HSK4",
    //     "english": "Secret"
    // },
    // "替": {
    //     "zhuyin": "",
    //     "pinyin": "tì",
    //     "level": "HSK4",
    //     "english": "replace; substitute; take the place of; for; on behalf of"
    // },
    // "美女": {
    //     "zhuyin": "",
    //     "pinyin": "měi nǚ",
    //     "level": "HSK4",
    //     "english": "belle ; beauty; beautiful woman"
    // },
    // "充电器": {
    //     "zhuyin": "",
    //     "pinyin": "chōngdiànqì",
    //     "level": "HSK4",
    //     "english": "Charger"
    // },
    // "抽烟": {
    //     "zhuyin": "",
    //     "pinyin": "chōuyān",
    //     "level": "HSK4",
    //     "english": "smoking"
    // },
    // "有趣": {
    //     "zhuyin": "",
    //     "pinyin": "yǒuqù",
    //     "level": "HSK4",
    //     "english": "interesting"
    // },
    // "逐渐": {
    //     "zhuyin": "",
    //     "pinyin": "zhújiàn",
    //     "level": "HSK4",
    //     "english": "gradually"
    // },
    // "购买": {
    //     "zhuyin": "",
    //     "pinyin": "gòu mǎi",
    //     "level": "HSK4",
    //     "english": "buy; purchase"
    // },
    // "装置": {
    //     "zhuyin": "",
    //     "pinyin": "zhuāng zhì",
    //     "level": "HSK4",
    //     "english": "device; equipment"
    // },
    // "些": {
    //     "zhuyin": "",
    //     "pinyin": "xiē",
    //     "level": "HSK4",
    //     "english": "some"
    // },
    // "烦": {
    //     "zhuyin": "",
    //     "pinyin": "fán",
    //     "level": "HSK4",
    //     "english": "bother; to bother"
    // },
    // "官": {
    //     "zhuyin": "",
    //     "pinyin": "guān",
    //     "level": "HSK4",
    //     "english": "officer"
    // },
    // "符合": {
    //     "zhuyin": "",
    //     "pinyin": "fúhé",
    //     "level": "HSK4",
    //     "english": "accord with"
    // },
    // "啊": {
    //     "zhuyin": "",
    //     "pinyin": "a",
    //     "level": "HSK4",
    //     "english": "ah"
    // },
    // "典型": {
    //     "zhuyin": "",
    //     "pinyin": "diǎnxíng",
    //     "level": "HSK4",
    //     "english": "typical"
    // },
    // "喜爱": {
    //     "zhuyin": "",
    //     "pinyin": "xǐ ài",
    //     "level": "HSK4",
    //     "english": "like; love; be fond of"
    // },
    // "著名": {
    //     "zhuyin": "",
    //     "pinyin": "zhùmíng",
    //     "level": "HSK4",
    //     "english": "famous"
    // },
    // "大陆": {
    //     "zhuyin": "",
    //     "pinyin": "dà lù",
    //     "level": "HSK4",
    //     "english": "continent; mainland"
    // },
    // "地方": {
    //     "zhuyin": "",
    //     "pinyin": "dìfang",
    //     "level": "HSK4",
    //     "english": "local"
    // },
    // "最初": {
    //     "zhuyin": "",
    //     "pinyin": "zuìchū",
    //     "level": "HSK4",
    //     "english": "First"
    // },
    // "说不定": {
    //     "zhuyin": "",
    //     "pinyin": "shuōbudìng",
    //     "level": "HSK4",
    //     "english": "maybe"
    // },
    // "擦": {
    //     "zhuyin": "",
    //     "pinyin": "cā",
    //     "level": "HSK4",
    //     "english": "wipe"
    // },
    // "围巾": {
    //     "zhuyin": "",
    //     "pinyin": "wéijīn",
    //     "level": "HSK4",
    //     "english": "scarf"
    // },
    // "晒": {
    //     "zhuyin": "",
    //     "pinyin": "shài",
    //     "level": "HSK4",
    //     "english": "The sun"
    // },
    // "自信": {
    //     "zhuyin": "",
    //     "pinyin": "zìxìn",
    //     "level": "HSK4",
    //     "english": "self-confidence"
    // },
    // "填": {
    //     "zhuyin": "",
    //     "pinyin": "tián",
    //     "level": "HSK4",
    //     "english": "fill; stuff; fill in; write"
    // },
    // "战士": {
    //     "zhuyin": "",
    //     "pinyin": "zhàn shì",
    //     "level": "HSK4",
    //     "english": "warrior; soldier; fighter"
    // },
    // "身份": {
    //     "zhuyin": "",
    //     "pinyin": "shēnfèn",
    //     "level": "HSK4",
    //     "english": "identity"
    // },
    // "似的": {
    //     "zhuyin": "",
    //     "pinyin": "shìde",
    //     "level": "HSK4",
    //     "english": "Like"
    // },
    // "奖学金": {
    //     "zhuyin": "",
    //     "pinyin": "jiǎng xué jīn",
    //     "level": "HSK4",
    //     "english": "scholarship; fellowship"
    // },
    // "夫妻": {
    //     "zhuyin": "",
    //     "pinyin": "fū qī",
    //     "level": "HSK4",
    //     "english": "man and wife"
    // },
    // "构成": {
    //     "zhuyin": "",
    //     "pinyin": "gòuchéng",
    //     "level": "HSK4",
    //     "english": "constitute"
    // },
    // "市区": {
    //     "zhuyin": "",
    //     "pinyin": "shì qū",
    //     "level": "HSK4",
    //     "english": "downtown area; urban district"
    // },
    // "措施": {
    //     "zhuyin": "",
    //     "pinyin": "cuòshī",
    //     "level": "HSK4",
    //     "english": "Measures"
    // },
    // "消化": {
    //     "zhuyin": "",
    //     "pinyin": "xiāohuà",
    //     "level": "HSK4",
    //     "english": "Digestion"
    // },
    // "失望": {
    //     "zhuyin": "",
    //     "pinyin": "shīwàng",
    //     "level": "HSK4",
    //     "english": "Disappointment"
    // },
    // "落": {
    //     "zhuyin": "",
    //     "pinyin": "luò",
    //     "level": "HSK4",
    //     "english": "fall; drop; go down; set; decline; drop behind"
    // },
    // "县": {
    //     "zhuyin": "",
    //     "pinyin": "xiàn",
    //     "level": "HSK4",
    //     "english": "county"
    // },
    // "航空": {
    //     "zhuyin": "",
    //     "pinyin": "hángkōng",
    //     "level": "HSK4",
    //     "english": "aviation"
    // },
    // "方针": {
    //     "zhuyin": "",
    //     "pinyin": "fāngzhēn",
    //     "level": "HSK4",
    //     "english": "policy"
    // },
    // "开水": {
    //     "zhuyin": "",
    //     "pinyin": "kāishuǐ",
    //     "level": "HSK4",
    //     "english": "Boiling water"
    // },
    // "产品": {
    //     "zhuyin": "",
    //     "pinyin": "chǎnpǐn",
    //     "level": "HSK4",
    //     "english": "product"
    // },
    // "转移": {
    //     "zhuyin": "",
    //     "pinyin": "zhuǎnyí",
    //     "level": "HSK4",
    //     "english": "transfer"
    // },
    // "日历": {
    //     "zhuyin": "",
    //     "pinyin": "rìlì",
    //     "level": "HSK4",
    //     "english": "calendar"
    // },
    // "录取": {
    //     "zhuyin": "",
    //     "pinyin": "lùqǔ",
    //     "level": "HSK4",
    //     "english": "matriculate, to enroll as a member of a body and especially of a college or university"
    // },
    // "限制": {
    //     "zhuyin": "",
    //     "pinyin": "xiànzhì",
    //     "level": "HSK4",
    //     "english": "limit"
    // },
    // "特征": {
    //     "zhuyin": "",
    //     "pinyin": "tèzhēng",
    //     "level": "HSK4",
    //     "english": "Features"
    // },
    // "降低": {
    //     "zhuyin": "",
    //     "pinyin": "jiàngdī",
    //     "level": "HSK4",
    //     "english": "reduce"
    // },
    // "火": {
    //     "zhuyin": "",
    //     "pinyin": "huǒ",
    //     "level": "HSK4",
    //     "english": "fiery; flaming; urgent"
    // },
    // "编": {
    //     "zhuyin": "",
    //     "pinyin": "biān",
    //     "level": "HSK4",
    //     "english": "invent; make up; plait; edit; compile; compose; write"
    // },
    // "关闭": {
    //     "zhuyin": "",
    //     "pinyin": "guānbì",
    //     "level": "HSK4",
    //     "english": "close; shut"
    // },
    // "帅": {
    //     "zhuyin": "",
    //     "pinyin": "shuài",
    //     "level": "HSK4",
    //     "english": "Handsome"
    // },
    // "诚信": {
    //     "zhuyin": "",
    //     "pinyin": "chéng xìn",
    //     "level": "HSK4",
    //     "english": "honesty; integrity"
    // },
    // "抱": {
    //     "zhuyin": "",
    //     "pinyin": "bào",
    //     "level": "HSK4",
    //     "english": "Hold, hug"
    // },
    // "幼儿园": {
    //     "zhuyin": "",
    //     "pinyin": "yòuéryuán",
    //     "level": "HSK4",
    //     "english": "Kindergarten"
    // },
    // "燃烧": {
    //     "zhuyin": "",
    //     "pinyin": "ránshāo",
    //     "level": "HSK4",
    //     "english": "burning"
    // },
    // "醒": {
    //     "zhuyin": "",
    //     "pinyin": "xǐng",
    //     "level": "HSK4",
    //     "english": "wake up"
    // },
    // "纯": {
    //     "zhuyin": "",
    //     "pinyin": "chún",
    //     "level": "HSK4",
    //     "english": "pure; unmixed; simple; skilful; practised"
    // },
    // "节省": {
    //     "zhuyin": "",
    //     "pinyin": "jiéshěng",
    //     "level": "HSK4",
    //     "english": "save"
    // },
    // "运气": {
    //     "zhuyin": "",
    //     "pinyin": "yùnqi",
    //     "level": "HSK4",
    //     "english": "luck"
    // },
    // "教训": {
    //     "zhuyin": "",
    //     "pinyin": "jiàoxùn",
    //     "level": "HSK4",
    //     "english": "lesson"
    // },
    // "汇": {
    //     "zhuyin": "",
    //     "pinyin": "huì",
    //     "level": "HSK4",
    //     "english": "remit; converge; collection; collected things"
    // },
    // "色": {
    //     "zhuyin": "",
    //     "pinyin": "sè",
    //     "level": "HSK4",
    //     "english": "colour; look; expression; scene; quality"
    // },
    // "月底": {
    //     "zhuyin": "",
    //     "pinyin": "yuè dǐ",
    //     "level": "HSK4",
    //     "english": "the end of a month"
    // },
    // "事先": {
    //     "zhuyin": "",
    //     "pinyin": "shìxiān",
    //     "level": "HSK4",
    //     "english": "Prior"
    // },
    // "期中": {
    //     "zhuyin": "",
    //     "pinyin": "qī zhōng",
    //     "level": "HSK4",
    //     "english": "midterm"
    // },
    // "回复": {
    //     "zhuyin": "",
    //     "pinyin": "huí fù",
    //     "level": "HSK4",
    //     "english": "reply"
    // },
    // "扫": {
    //     "zhuyin": "",
    //     "pinyin": "sǎo",
    //     "level": "HSK4",
    //     "english": "sweep; broom"
    // },
    // "分为": {
    //     "zhuyin": "",
    //     "pinyin": "fēn wéi",
    //     "level": "HSK4",
    //     "english": "divide into"
    // },
    // "破产": {
    //     "zhuyin": "",
    //     "pinyin": "pòchǎn",
    //     "level": "HSK4",
    //     "english": "bankruptcy"
    // },
    // "封闭": {
    //     "zhuyin": "",
    //     "pinyin": "fēngbì",
    //     "level": "HSK4",
    //     "english": "close"
    // },
    // "字母": {
    //     "zhuyin": "",
    //     "pinyin": "zìmǔ",
    //     "level": "HSK4",
    //     "english": "Letter"
    // },
    // "赞助": {
    //     "zhuyin": "",
    //     "pinyin": "zànzhù",
    //     "level": "HSK4",
    //     "english": "Sponsor"
    // },
    // "逛": {
    //     "zhuyin": "",
    //     "pinyin": "guàng",
    //     "level": "HSK4",
    //     "english": "Stroll"
    // },
    // "箱子": {
    //     "zhuyin": "",
    //     "pinyin": "xiāng zi",
    //     "level": "HSK4",
    //     "english": "chest; bin; box; case; trunk"
    // },
    // "辣": {
    //     "zhuyin": "",
    //     "pinyin": "là",
    //     "level": "HSK4",
    //     "english": "hot, spicy"
    // },
    // "负担": {
    //     "zhuyin": "",
    //     "pinyin": "fùdān",
    //     "level": "HSK4",
    //     "english": "burden"
    // },
    // "吸收": {
    //     "zhuyin": "",
    //     "pinyin": "xīshōu",
    //     "level": "HSK4",
    //     "english": "absorb"
    // },
    // "伙伴": {
    //     "zhuyin": "",
    //     "pinyin": "huǒbàn",
    //     "level": "HSK4",
    //     "english": "Partner"
    // },
    // "虫子": {
    //     "zhuyin": "",
    //     "pinyin": "chóng zi",
    //     "level": "HSK4",
    //     "english": "insect; worm; bug"
    // },
    // "种植": {
    //     "zhuyin": "",
    //     "pinyin": "zhòngzhí",
    //     "level": "HSK4",
    //     "english": "plant"
    // },
    // "看来": {
    //     "zhuyin": "",
    //     "pinyin": "kàn lái",
    //     "level": "HSK4",
    //     "english": "it seems; it appears"
    // },
    // "担保": {
    //     "zhuyin": "",
    //     "pinyin": "dānbǎo",
    //     "level": "HSK4",
    //     "english": "assure; hypothecate"
    // },
    // "宽广": {
    //     "zhuyin": "",
    //     "pinyin": "kuān guǎng",
    //     "level": "HSK4",
    //     "english": "broad; vast; extensive"
    // },
    // "系列": {
    //     "zhuyin": "",
    //     "pinyin": "xìliè",
    //     "level": "HSK4",
    //     "english": "series"
    // },
    // "盘": {
    //     "zhuyin": "",
    //     "pinyin": "pán",
    //     "level": "HSK4",
    //     "english": "tray; plate; dish; current price; game; set; (measure word)"
    // },
    // "高尚": {
    //     "zhuyin": "",
    //     "pinyin": "gāoshàng",
    //     "level": "HSK4",
    //     "english": "noble"
    // },
    // "推迟": {
    //     "zhuyin": "",
    //     "pinyin": "tuīchí",
    //     "level": "HSK4",
    //     "english": "delay"
    // },
    // "隔开": {
    //     "zhuyin": "",
    //     "pinyin": "gé kāi",
    //     "level": "HSK4",
    //     "english": "separate; space out; separation; partition"
    // },
    // "兴趣": {
    //     "zhuyin": "",
    //     "pinyin": "xìng qù",
    //     "level": "HSK4",
    //     "english": "interest"
    // },
    // "义务": {
    //     "zhuyin": "",
    //     "pinyin": "yìwù",
    //     "level": "HSK4",
    //     "english": "obligation"
    // },
    // "局": {
    //     "zhuyin": "",
    //     "pinyin": "jú",
    //     "level": "HSK4",
    //     "english": "bureau; part; portion; innings; gathering"
    // },
    // "万一": {
    //     "zhuyin": "",
    //     "pinyin": "wànyī",
    //     "level": "HSK4",
    //     "english": "In case"
    // },
    // "遗传": {
    //     "zhuyin": "",
    //     "pinyin": "yíchuán",
    //     "level": "HSK4",
    //     "english": "inheritance"
    // },
    // "诗": {
    //     "zhuyin": "",
    //     "pinyin": "shī",
    //     "level": "HSK4",
    //     "english": "poetry"
    // },
    // "不要紧": {
    //     "zhuyin": "",
    //     "pinyin": "búyàojǐn",
    //     "level": "HSK4",
    //     "english": "Never mind"
    // },
    // "期末": {
    //     "zhuyin": "",
    //     "pinyin": "qī mò",
    //     "level": "HSK4",
    //     "english": "end of term"
    // },
    // "担任": {
    //     "zhuyin": "",
    //     "pinyin": "dānrèn",
    //     "level": "HSK4",
    //     "english": "To serve as"
    // },
    // "运动员": {
    //     "zhuyin": "",
    //     "pinyin": "yùn dòng yuán",
    //     "level": "HSK4",
    //     "english": "athlete; sportsman"
    // },
    // "奖": {
    //     "zhuyin": "",
    //     "pinyin": "jiǎng",
    //     "level": "HSK4",
    //     "english": "award; prize; reward"
    // },
    // "用途": {
    //     "zhuyin": "",
    //     "pinyin": "yòngtú",
    //     "level": "HSK4",
    //     "english": "purpose"
    // },
    // "造型": {
    //     "zhuyin": "",
    //     "pinyin": "zàoxíng",
    //     "level": "HSK4",
    //     "english": "style; modeling"
    // },
    // "地下": {
    //     "zhuyin": "",
    //     "pinyin": "dì xià",
    //     "level": "HSK4",
    //     "english": "underground; subterranean; secret"
    // },
    // "不在乎": {
    //     "zhuyin": "",
    //     "pinyin": "bú zài hū",
    //     "level": "HSK4",
    //     "english": "not mind; not care"
    // },
    // "大型": {
    //     "zhuyin": "",
    //     "pinyin": "dàxíng",
    //     "level": "HSK4",
    //     "english": "large"
    // },
    // "放松": {
    //     "zhuyin": "",
    //     "pinyin": "fàngsōng",
    //     "level": "HSK4",
    //     "english": "Relax"
    // },
    // "调皮": {
    //     "zhuyin": "",
    //     "pinyin": "tiáopí",
    //     "level": "HSK4",
    //     "english": "naughty"
    // },
    // "快递": {
    //     "zhuyin": "",
    //     "pinyin": "kuài dì",
    //     "level": "HSK4",
    //     "english": "express delivery"
    // },
    // "概括": {
    //     "zhuyin": "",
    //     "pinyin": "gàikuò",
    //     "level": "HSK4",
    //     "english": "Generalization"
    // },
    // "政府": {
    //     "zhuyin": "",
    //     "pinyin": "zhèngfǔ",
    //     "level": "HSK4",
    //     "english": "government"
    // },
    // "做梦": {
    //     "zhuyin": "",
    //     "pinyin": "zuò mèng",
    //     "level": "HSK4",
    //     "english": "dream; daydream"
    // },
    // "呼吸": {
    //     "zhuyin": "",
    //     "pinyin": "hūxī",
    //     "level": "HSK4",
    //     "english": "breathing"
    // },
    // "解释": {
    //     "zhuyin": "",
    //     "pinyin": "jiěshì",
    //     "level": "HSK4",
    //     "english": "explain"
    // },
    // "误会": {
    //     "zhuyin": "",
    //     "pinyin": "wùhuì",
    //     "level": "HSK4",
    //     "english": "Misunderstanding"
    // },
    // "法院": {
    //     "zhuyin": "",
    //     "pinyin": "fǎyuàn",
    //     "level": "HSK4",
    //     "english": "Court"
    // },
    // "竟然": {
    //     "zhuyin": "",
    //     "pinyin": "jìngrán",
    //     "level": "HSK4",
    //     "english": "Unexpectedly"
    // },
    // "于是": {
    //     "zhuyin": "",
    //     "pinyin": "yúshì",
    //     "level": "HSK4",
    //     "english": "Therefore"
    // },
    // "商务": {
    //     "zhuyin": "",
    //     "pinyin": "shāngwù",
    //     "level": "HSK4",
    //     "english": "business"
    // },
    // "夫妇": {
    //     "zhuyin": "",
    //     "pinyin": "fūfù",
    //     "level": "HSK4",
    //     "english": "couple"
    // },
    // "黑暗": {
    //     "zhuyin": "",
    //     "pinyin": "hēi àn",
    //     "level": "HSK4",
    //     "english": "dark; darkness; murk"
    // },
    // "寻找": {
    //     "zhuyin": "",
    //     "pinyin": "xúnzhǎo",
    //     "level": "HSK4",
    //     "english": "Seek, look for"
    // },
    // "降温": {
    //     "zhuyin": "",
    //     "pinyin": "jiàng wēn",
    //     "level": "HSK4",
    //     "english": "lower the temperature; drop in temperature"
    // },
    // "阅读": {
    //     "zhuyin": "",
    //     "pinyin": "yuèdú",
    //     "level": "HSK4",
    //     "english": "Read"
    // },
    // "反": {
    //     "zhuyin": "",
    //     "pinyin": "fǎn",
    //     "level": "HSK4",
    //     "english": "turn over; rebel; on the contrary; instead"
    // },
    // "好": {
    //     "zhuyin": "",
    //     "pinyin": "hǎo",
    //     "level": "HSK4",
    //     "english": "good"
    // },
    // "支": {
    //     "zhuyin": "",
    //     "pinyin": "zhī",
    //     "level": "HSK4",
    //     "english": "put up; protrude; support; send away"
    // },
    // "俩": {
    //     "zhuyin": "",
    //     "pinyin": "liǎ",
    //     "level": "HSK4",
    //     "english": "Two"
    // },
    // "王": {
    //     "zhuyin": "",
    //     "pinyin": "wáng",
    //     "level": "HSK4",
    //     "english": "king; monarch; head; chief"
    // },
    // "尺寸": {
    //     "zhuyin": "",
    //     "pinyin": "chǐ cùn",
    //     "level": "HSK4",
    //     "english": "size; measurement; dimension"
    // },
    // "数码": {
    //     "zhuyin": "",
    //     "pinyin": "shùmǎ",
    //     "level": "HSK4",
    //     "english": "Digital"
    // },
    // "图案": {
    //     "zhuyin": "",
    //     "pinyin": "tú’àn",
    //     "level": "HSK4",
    //     "english": "pattern"
    // },
    // "甚至": {
    //     "zhuyin": "",
    //     "pinyin": "shènzhì",
    //     "level": "HSK4",
    //     "english": "Even to the extent that"
    // },
    // "坚固": {
    //     "zhuyin": "",
    //     "pinyin": "jiāngù",
    //     "level": "HSK4",
    //     "english": "strong"
    // },
    // "共": {
    //     "zhuyin": "",
    //     "pinyin": "gòng",
    //     "level": "HSK4",
    //     "english": "common; general; share; together; altogether"
    // },
    // "尾巴": {
    //     "zhuyin": "",
    //     "pinyin": "wěiba",
    //     "level": "HSK4",
    //     "english": "tail"
    // },
    // "透": {
    //     "zhuyin": "",
    //     "pinyin": "tòu",
    //     "level": "HSK4",
    //     "english": "penetrate; pass through; tell secretly; show; through"
    // },
    // "嘴巴": {
    //     "zhuyin": "",
    //     "pinyin": "zuǐ ba",
    //     "level": "HSK4",
    //     "english": "mouth"
    // },
    // "独特": {
    //     "zhuyin": "",
    //     "pinyin": "dútè",
    //     "level": "HSK4",
    //     "english": "unique"
    // },
    // "交际": {
    //     "zhuyin": "",
    //     "pinyin": "jiāojì",
    //     "level": "HSK4",
    //     "english": "communication"
    // },
    // "力气": {
    //     "zhuyin": "",
    //     "pinyin": "lìqi",
    //     "level": "HSK4",
    //     "english": "Strength"
    // },
    // "免费": {
    //     "zhuyin": "",
    //     "pinyin": "miǎnfèi",
    //     "level": "HSK4",
    //     "english": "Free of charge"
    // },
    // "延长": {
    //     "zhuyin": "",
    //     "pinyin": "yáncháng",
    //     "level": "HSK4",
    //     "english": "extend"
    // },
    // "难免": {
    //     "zhuyin": "",
    //     "pinyin": "nánmiǎn",
    //     "level": "HSK4",
    //     "english": "Unavoidable"
    // },
    // "登记": {
    //     "zhuyin": "",
    //     "pinyin": "dēngjì",
    //     "level": "HSK4",
    //     "english": "register"
    // },
    // "语音": {
    //     "zhuyin": "",
    //     "pinyin": "yǔ yīn",
    //     "level": "HSK4",
    //     "english": "voice"
    // },
    // "动摇": {
    //     "zhuyin": "",
    //     "pinyin": "dòng yáo",
    //     "level": "HSK4",
    //     "english": "shake; vacillate; waver; be indecisive"
    // },
    // "五颜六色": {
    //     "zhuyin": "",
    //     "pinyin": "wǔ yán liù sè",
    //     "level": "HSK4",
    //     "english": "colourful; multicolored"
    // },
    // "红包": {
    //     "zhuyin": "",
    //     "pinyin": "hóng bāo",
    //     "level": "HSK4",
    //     "english": "red envelope; red packet"
    // },
    // "特殊": {
    //     "zhuyin": "",
    //     "pinyin": "tèshū",
    //     "level": "HSK4",
    //     "english": "special"
    // },
    // "豆腐": {
    //     "zhuyin": "",
    //     "pinyin": "dòufu",
    //     "level": "HSK4",
    //     "english": "tofu"
    // },
    // "关": {
    //     "zhuyin": "",
    //     "pinyin": "guān",
    //     "level": "HSK4",
    //     "english": "pass; check point; customhouse; mechanism; barrier"
    // },
    // "名牌儿": {
    //     "zhuyin": "",
    //     "pinyin": "míng páir",
    //     "level": "HSK4",
    //     "english": "famous brand"
    // },
    // "吸管": {
    //     "zhuyin": "",
    //     "pinyin": "xī guǎn",
    //     "level": "HSK4",
    //     "english": "straw"
    // },
    // "数据": {
    //     "zhuyin": "",
    //     "pinyin": "shùjù",
    //     "level": "HSK4",
    //     "english": "data"
    // },
    // "森林": {
    //     "zhuyin": "",
    //     "pinyin": "sēnlín",
    //     "level": "HSK4",
    //     "english": "Forest"
    // },
    // "倍": {
    //     "zhuyin": "",
    //     "pinyin": "bèi",
    //     "level": "HSK4",
    //     "english": "times"
    // },
    // "单独": {
    //     "zhuyin": "",
    //     "pinyin": "dāndú",
    //     "level": "HSK4",
    //     "english": "Alone"
    // },
    // "首": {
    //     "zhuyin": "",
    //     "pinyin": "shǒu",
    //     "level": "HSK4",
    //     "english": "(measure word)"
    // },
    // "背景": {
    //     "zhuyin": "",
    //     "pinyin": "bèijǐng",
    //     "level": "HSK4",
    //     "english": "background"
    // },
    // "体重": {
    //     "zhuyin": "",
    //     "pinyin": "tǐ zhòng",
    //     "level": "HSK4",
    //     "english": "body weight"
    // },
    // "翻": {
    //     "zhuyin": "",
    //     "pinyin": "fān",
    //     "level": "HSK4",
    //     "english": "Turn"
    // },
    // "挺": {
    //     "zhuyin": "",
    //     "pinyin": "tǐng",
    //     "level": "HSK4",
    //     "english": "stand; hold out; endure; stick out"
    // },
    // "牙刷": {
    //     "zhuyin": "",
    //     "pinyin": "yá shuā",
    //     "level": "HSK4",
    //     "english": "toothbrush"
    // },
    // "细节": {
    //     "zhuyin": "",
    //     "pinyin": "xìjié",
    //     "level": "HSK4",
    //     "english": "details"
    // },
    // "恶心": {
    //     "zhuyin": "",
    //     "pinyin": "ěxin",
    //     "level": "HSK4",
    //     "english": "disgusting"
    // },
    // "然而": {
    //     "zhuyin": "",
    //     "pinyin": "rán’ér",
    //     "level": "HSK4",
    //     "english": "however"
    // },
    // "小伙子": {
    //     "zhuyin": "",
    //     "pinyin": "xiǎohuǒzi",
    //     "level": "HSK4",
    //     "english": "Young fellow"
    // },
    // "如今": {
    //     "zhuyin": "",
    //     "pinyin": "rújīn",
    //     "level": "HSK4",
    //     "english": "nowadays"
    // },
    // "打扫": {
    //     "zhuyin": "",
    //     "pinyin": "dǎsǎo",
    //     "level": "HSK4",
    //     "english": "Clean"
    // },
    // "显著": {
    //     "zhuyin": "",
    //     "pinyin": "xiǎnzhù",
    //     "level": "HSK4",
    //     "english": "remarkable"
    // },
    // "平均": {
    //     "zhuyin": "",
    //     "pinyin": "píngjūn",
    //     "level": "HSK4",
    //     "english": "Average"
    // },
    // "轮椅": {
    //     "zhuyin": "",
    //     "pinyin": "lún yǐ",
    //     "level": "HSK4",
    //     "english": "wheelchair"
    // },
    // "手里": {
    //     "zhuyin": "",
    //     "pinyin": "shǒu lǐ",
    //     "level": "HSK4",
    //     "english": "in one’s hands"
    // },
    // "摆动": {
    //     "zhuyin": "",
    //     "pinyin": "bǎi dòng",
    //     "level": "HSK4",
    //     "english": "swing; sway; oscillate;vibrate"
    // },
    // "吃惊": {
    //     "zhuyin": "",
    //     "pinyin": "chījīng",
    //     "level": "HSK4",
    //     "english": "Be amazed"
    // },
    // "挑战": {
    //     "zhuyin": "",
    //     "pinyin": "tiǎozhàn",
    //     "level": "HSK4",
    //     "english": "Dekaron"
    // },
    // "没法儿": {
    //     "zhuyin": "",
    //     "pinyin": "méi fǎr",
    //     "level": "HSK4",
    //     "english": "can not; no way"
    // },
    // "内科": {
    //     "zhuyin": "",
    //     "pinyin": "nèikē",
    //     "level": "HSK4",
    //     "english": "Internal medicine"
    // },
    // "临时": {
    //     "zhuyin": "",
    //     "pinyin": "línshí",
    //     "level": "HSK4",
    //     "english": "temporary"
    // },
    // "二手": {
    //     "zhuyin": "",
    //     "pinyin": "èr shǒu",
    //     "level": "HSK4",
    //     "english": "second hand"
    // },
    // "培育": {
    //     "zhuyin": "",
    //     "pinyin": "péiyù",
    //     "level": "HSK4",
    //     "english": "Cultivation"
    // },
    // "善良": {
    //     "zhuyin": "",
    //     "pinyin": "shànliáng",
    //     "level": "HSK4",
    //     "english": "kind; virtuous"
    // },
    // "种类": {
    //     "zhuyin": "",
    //     "pinyin": "zhǒnglèi",
    //     "level": "HSK4",
    //     "english": "type"
    // },
    // "锻炼": {
    //     "zhuyin": "",
    //     "pinyin": "duànliàn",
    //     "level": "HSK4",
    //     "english": "Physical exercise"
    // },
    // "集合": {
    //     "zhuyin": "",
    //     "pinyin": "jíhé",
    //     "level": "HSK4",
    //     "english": "aggregate"
    // },
    // "参与": {
    //     "zhuyin": "",
    //     "pinyin": "cānyù",
    //     "level": "HSK4",
    //     "english": "participate in"
    // },
    // "个别": {
    //     "zhuyin": "",
    //     "pinyin": "gèbié",
    //     "level": "HSK4",
    //     "english": "individual"
    // },
    // "树林": {
    //     "zhuyin": "",
    //     "pinyin": "shù lín",
    //     "level": "HSK4",
    //     "english": "wood; grove; forest"
    // },
    // "阵": {
    //     "zhuyin": "",
    //     "pinyin": "zhèn",
    //     "level": "HSK4",
    //     "english": "front"
    // },
    // "相片": {
    //     "zhuyin": "",
    //     "pinyin": "xiàng piàn",
    //     "level": "HSK4",
    //     "english": "photo; photograph"
    // },
    // "原料": {
    //     "zhuyin": "",
    //     "pinyin": "yuánliào",
    //     "level": "HSK4",
    //     "english": "raw material"
    // },
    // "出色": {
    //     "zhuyin": "",
    //     "pinyin": "chūsè",
    //     "level": "HSK4",
    //     "english": "excellent; outstanding"
    // },
    // "宝石": {
    //     "zhuyin": "",
    //     "pinyin": "bǎo shí",
    //     "level": "HSK4",
    //     "english": "gemstone; gem; cameo; precious stone"
    // },
    // "宽": {
    //     "zhuyin": "",
    //     "pinyin": "kuān",
    //     "level": "HSK4",
    //     "english": "wide"
    // },
    // "既然": {
    //     "zhuyin": "",
    //     "pinyin": "jìrán",
    //     "level": "HSK4",
    //     "english": "Since"
    // },
    // "潮": {
    //     "zhuyin": "",
    //     "pinyin": "cháo",
    //     "level": "HSK4",
    //     "english": "moist; damp; humid; tide"
    // },
    // "律师": {
    //     "zhuyin": "",
    //     "pinyin": "lǜshī",
    //     "level": "HSK4",
    //     "english": "Lawyer"
    // },
    // "之后": {
    //     "zhuyin": "",
    //     "pinyin": "zhī hòu",
    //     "level": "HSK4",
    //     "english": "later; after; afterwards"
    // },
    // "内部": {
    //     "zhuyin": "",
    //     "pinyin": "nèibù",
    //     "level": "HSK4",
    //     "english": "interior"
    // },
    // "分布": {
    //     "zhuyin": "",
    //     "pinyin": "fēnbù",
    //     "level": "HSK4",
    //     "english": "distribution"
    // },
    // "未必": {
    //     "zhuyin": "",
    //     "pinyin": "wèibì",
    //     "level": "HSK4",
    //     "english": "not necessarily"
    // },
    // "是否": {
    //     "zhuyin": "",
    //     "pinyin": "shìfǒu",
    //     "level": "HSK4",
    //     "english": "Whether"
    // },
    // "列": {
    //     "zhuyin": "",
    //     "pinyin": "liè",
    //     "level": "HSK4",
    //     "english": "arrange; line up; list"
    // },
    // "伤害": {
    //     "zhuyin": "",
    //     "pinyin": "shānghài",
    //     "level": "HSK4",
    //     "english": "hurt"
    // },
    // "电源": {
    //     "zhuyin": "",
    //     "pinyin": "diànyuán",
    //     "level": "HSK4",
    //     "english": "power supply"
    // },
    // "无聊": {
    //     "zhuyin": "",
    //     "pinyin": "wúliáo",
    //     "level": "HSK4",
    //     "english": "Boring"
    // },
    // "男士": {
    //     "zhuyin": "",
    //     "pinyin": "nán shì",
    //     "level": "HSK4",
    //     "english": "man"
    // },
    // "肚子": {
    //     "zhuyin": "",
    //     "pinyin": "dùzi",
    //     "level": "HSK4",
    //     "english": "belly"
    // },
    // "大多": {
    //     "zhuyin": "",
    //     "pinyin": "dà duō",
    //     "level": "HSK4",
    //     "english": "mostly; for the most part"
    // },
    // "穷人": {
    //     "zhuyin": "",
    //     "pinyin": "qióng rén",
    //     "level": "HSK4",
    //     "english": "poor people; the poor"
    // },
    // "细致": {
    //     "zhuyin": "",
    //     "pinyin": "xìzhì",
    //     "level": "HSK4",
    //     "english": "careful"
    // },
    // "确认": {
    //     "zhuyin": "",
    //     "pinyin": "quèrèn",
    //     "level": "HSK4",
    //     "english": "confirm"
    // },
    // "依靠": {
    //     "zhuyin": "",
    //     "pinyin": "yīkào",
    //     "level": "HSK4",
    //     "english": "rely on; depend on"
    // },
    // "登": {
    //     "zhuyin": "",
    //     "pinyin": "dēng",
    //     "level": "HSK4",
    //     "english": "ascend; mount; scale; step on; pedal; publish"
    // },
    // "镜子": {
    //     "zhuyin": "",
    //     "pinyin": "jìngzi",
    //     "level": "HSK4",
    //     "english": "Mirror"
    // },
    // "呀": {
    //     "zhuyin": "",
    //     "pinyin": "ya",
    //     "level": "HSK4",
    //     "english": "ah"
    // },
    // "准时": {
    //     "zhuyin": "",
    //     "pinyin": "zhǔnshí",
    //     "level": "HSK4",
    //     "english": "on time"
    // },
    // "烧": {
    //     "zhuyin": "",
    //     "pinyin": "shāo",
    //     "level": "HSK4",
    //     "english": "burn; cook; bake; roast; run a fever"
    // },
    // "要": {
    //     "zhuyin": "",
    //     "pinyin": "yào",
    //     "level": "HSK4",
    //     "english": "if"
    // },
    // "奖金": {
    //     "zhuyin": "",
    //     "pinyin": "jiǎngjīn",
    //     "level": "HSK4",
    //     "english": "bonus"
    // },
    // "传统": {
    //     "zhuyin": "",
    //     "pinyin": "chuántǒng",
    //     "level": "HSK4",
    //     "english": "tradition"
    // },
    // "作出": {
    //     "zhuyin": "",
    //     "pinyin": "zuò chū",
    //     "level": "HSK4",
    //     "english": "make (a decision, etc.)"
    // },
    // "简历": {
    //     "zhuyin": "",
    //     "pinyin": "jiǎnlì",
    //     "level": "HSK4",
    //     "english": "resume"
    // },
    // "脑袋": {
    //     "zhuyin": "",
    //     "pinyin": "nǎodai",
    //     "level": "HSK4",
    //     "english": "head"
    // },
    // "得意": {
    //     "zhuyin": "",
    //     "pinyin": "déyì",
    //     "level": "HSK4",
    //     "english": "Proud"
    // },
    // "智力": {
    //     "zhuyin": "",
    //     "pinyin": "zhìlì",
    //     "level": "HSK4",
    //     "english": "intelligence"
    // },
    // "导游": {
    //     "zhuyin": "",
    //     "pinyin": "dǎoyóu",
    //     "level": "HSK4",
    //     "english": "Guide"
    // },
    // "来不及": {
    //     "zhuyin": "",
    //     "pinyin": "láibují",
    //     "level": "HSK4",
    //     "english": "There’s not enough time"
    // },
    // "叶子": {
    //     "zhuyin": "",
    //     "pinyin": "yèzi",
    //     "level": "HSK4",
    //     "english": "Leaf"
    // },
    // "失业": {
    //     "zhuyin": "",
    //     "pinyin": "shīyè",
    //     "level": "HSK4",
    //     "english": "Unemployment"
    // },
    // "盐": {
    //     "zhuyin": "",
    //     "pinyin": "yán",
    //     "level": "HSK4",
    //     "english": "salt"
    // },
    // "运动会": {
    //     "zhuyin": "",
    //     "pinyin": "yùn dòng huì",
    //     "level": "HSK4",
    //     "english": "sports meeting"
    // },
    // "毕业": {
    //     "zhuyin": "",
    //     "pinyin": "bìyè",
    //     "level": "HSK4",
    //     "english": "graduation"
    // },
    // "降": {
    //     "zhuyin": "",
    //     "pinyin": "jiàng",
    //     "level": "HSK4",
    //     "english": "fall; drop; descend; come down; lower"
    // },
    // "途中": {
    //     "zhuyin": "",
    //     "pinyin": "tú zhōng",
    //     "level": "HSK4",
    //     "english": "on the way to; en route"
    // },
    // "戴": {
    //     "zhuyin": "",
    //     "pinyin": "dài",
    //     "level": "HSK4",
    //     "english": "wear"
    // },
    // "制订": {
    //     "zhuyin": "",
    //     "pinyin": "zhì dìng",
    //     "level": "HSK4",
    //     "english": "formulate; work out; map out"
    // },
    // "日记": {
    //     "zhuyin": "",
    //     "pinyin": "rìjì",
    //     "level": "HSK4",
    //     "english": "diary"
    // },
    // "大姐": {
    //     "zhuyin": "",
    //     "pinyin": "dà jiě",
    //     "level": "HSK4",
    //     "english": "elder sister"
    // },
    // "粗心": {
    //     "zhuyin": "",
    //     "pinyin": "cūxīn",
    //     "level": "HSK4",
    //     "english": "careless"
    // },
    // "严格": {
    //     "zhuyin": "",
    //     "pinyin": "yángé",
    //     "level": "HSK4",
    //     "english": "strict"
    // },
    // "未来": {
    //     "zhuyin": "",
    //     "pinyin": "wèilái",
    //     "level": "HSK4",
    //     "english": "Future"
    // },
    // "打雷": {
    //     "zhuyin": "",
    //     "pinyin": "dǎ léi",
    //     "level": "HSK4",
    //     "english": "thunder"
    // },
    // "究竟": {
    //     "zhuyin": "",
    //     "pinyin": "jiūjìng",
    //     "level": "HSK4",
    //     "english": "exactly"
    // },
    // "拍照": {
    //     "zhuyin": "",
    //     "pinyin": "pāi zhào",
    //     "level": "HSK4",
    //     "english": "take a picture; photograph"
    // },
    // "类型": {
    //     "zhuyin": "",
    //     "pinyin": "lèixíng",
    //     "level": "HSK4",
    //     "english": "type"
    // },
    // "树叶": {
    //     "zhuyin": "",
    //     "pinyin": "shù yè",
    //     "level": "HSK4",
    //     "english": "leaf; tree leaf"
    // },
    // "光临": {
    //     "zhuyin": "",
    //     "pinyin": "guānglín",
    //     "level": "HSK4",
    //     "english": "presence"
    // },
    // "性质": {
    //     "zhuyin": "",
    //     "pinyin": "xìngzhì",
    //     "level": "HSK4",
    //     "english": "Nature"
    // },
    // "网络": {
    //     "zhuyin": "",
    //     "pinyin": "wǎngluò",
    //     "level": "HSK4",
    //     "english": "network"
    // },
    // "极": {
    //     "zhuyin": "",
    //     "pinyin": "jí",
    //     "level": "HSK4",
    //     "english": "extremely"
    // },
    // "担心": {
    //     "zhuyin": "",
    //     "pinyin": "dānxīn",
    //     "level": "HSK4",
    //     "english": "Worry"
    // },
    // "影子": {
    //     "zhuyin": "",
    //     "pinyin": "yǐngzi",
    //     "level": "HSK4",
    //     "english": "shadow"
    // },
    // "优美": {
    //     "zhuyin": "",
    //     "pinyin": "yōuměi",
    //     "level": "HSK4",
    //     "english": "Graceful"
    // },
    // "不管": {
    //     "zhuyin": "",
    //     "pinyin": "bùguǎn",
    //     "level": "HSK4",
    //     "english": "no matter"
    // },
    // "培养": {
    //     "zhuyin": "",
    //     "pinyin": "péiyǎng",
    //     "level": "HSK4",
    //     "english": "culture"
    // },
    // "赞成": {
    //     "zhuyin": "",
    //     "pinyin": "zànchéng",
    //     "level": "HSK4",
    //     "english": "agree"
    // },
    // "汽油": {
    //     "zhuyin": "",
    //     "pinyin": "qìyóu",
    //     "level": "HSK4",
    //     "english": "gasoline"
    // },
    // "地位": {
    //     "zhuyin": "",
    //     "pinyin": "dìwèi",
    //     "level": "HSK4",
    //     "english": "status"
    // },
    // "看不起": {
    //     "zhuyin": "",
    //     "pinyin": "kànbuqǐ",
    //     "level": "HSK4",
    //     "english": "Despise"
    // },
    // "晚点": {
    //     "zhuyin": "",
    //     "pinyin": "wǎn diǎn",
    //     "level": "HSK4",
    //     "english": "late; behind schedule"
    // },
    // "通知书": {
    //     "zhuyin": "",
    //     "pinyin": "tōng zhī shū",
    //     "level": "HSK4",
    //     "english": "notice"
    // },
    // "个体": {
    //     "zhuyin": "",
    //     "pinyin": "gètǐ",
    //     "level": "HSK4",
    //     "english": "individual"
    // },
    // "泪水": {
    //     "zhuyin": "",
    //     "pinyin": "lèi shuǐ",
    //     "level": "HSK4",
    //     "english": "tear; teardrop"
    // },
    // "体操": {
    //     "zhuyin": "",
    //     "pinyin": "tǐ cāo",
    //     "level": "HSK4",
    //     "english": "gymnastics"
    // },
    // "聚": {
    //     "zhuyin": "",
    //     "pinyin": "jù",
    //     "level": "HSK4",
    //     "english": "assemble; gather; get together"
    // },
    // "平稳": {
    //     "zhuyin": "",
    //     "pinyin": "píng wěn",
    //     "level": "HSK4",
    //     "english": "smooth; steady"
    // },
    // "售货员": {
    //     "zhuyin": "",
    //     "pinyin": "shòuhuòyuán",
    //     "level": "HSK4",
    //     "english": "Salesperson"
    // },
    // "待遇": {
    //     "zhuyin": "",
    //     "pinyin": "dàiyù",
    //     "level": "HSK4",
    //     "english": "treatment"
    // },
    // "挑": {
    //     "zhuyin": "",
    //     "pinyin": "tiāo",
    //     "level": "HSK4",
    //     "english": "choose; pick; select"
    // },
    // "痛快": {
    //     "zhuyin": "",
    //     "pinyin": "tòngkuài",
    //     "level": "HSK4",
    //     "english": "Happy, to one`s heart`s content"
    // },
    // "征服": {
    //     "zhuyin": "",
    //     "pinyin": "zhēngfú",
    //     "level": "HSK4",
    //     "english": "Conquer"
    // },
    // "主题": {
    //     "zhuyin": "",
    //     "pinyin": "zhǔtí",
    //     "level": "HSK4",
    //     "english": "theme"
    // },
    // "粗": {
    //     "zhuyin": "",
    //     "pinyin": "cū",
    //     "level": "HSK4",
    //     "english": "wide; thick; coarse; rough; gruff; careless; rude"
    // },
    // "营业": {
    //     "zhuyin": "",
    //     "pinyin": "yíngyè",
    //     "level": "HSK4",
    //     "english": "Do business"
    // },
    // "点名": {
    //     "zhuyin": "",
    //     "pinyin": "diǎn míng",
    //     "level": "HSK4",
    //     "english": "rollcall; mention sb. by name"
    // },
    // "动画片": {
    //     "zhuyin": "",
    //     "pinyin": "dònghuàpiàn",
    //     "level": "HSK4",
    //     "english": "Cartoon"
    // },
    // "帅哥": {
    //     "zhuyin": "",
    //     "pinyin": "shuài gē",
    //     "level": "HSK4",
    //     "english": "handsome boy"
    // },
    // "一致": {
    //     "zhuyin": "",
    //     "pinyin": "yízhì",
    //     "level": "HSK4",
    //     "english": "Agreement"
    // },
    // "童年": {
    //     "zhuyin": "",
    //     "pinyin": "tóng nián",
    //     "level": "HSK4",
    //     "english": "childhood; babyhood"
    // },
    // "次": {
    //     "zhuyin": "",
    //     "pinyin": "cì",
    //     "level": "HSK4",
    //     "english": "second-rate; secondary"
    // },
    // "新娘": {
    //     "zhuyin": "",
    //     "pinyin": "xīnniáng",
    //     "level": "HSK4",
    //     "english": "Bride"
    // },
    // "宝": {
    //     "zhuyin": "",
    //     "pinyin": "bǎo",
    //     "level": "HSK4",
    //     "english": "treasure; precious; treasured"
    // },
    // "稳定": {
    //     "zhuyin": "",
    //     "pinyin": "wěndìng",
    //     "level": "HSK4",
    //     "english": "Stable"
    // },
    // "实施": {
    //     "zhuyin": "",
    //     "pinyin": "shíshī",
    //     "level": "HSK4",
    //     "english": "Implementation"
    // },
    // "供应": {
    //     "zhuyin": "",
    //     "pinyin": "gōng yìng",
    //     "level": "HSK4",
    //     "english": "supply; provide"
    // },
    // "袜子": {
    //     "zhuyin": "",
    //     "pinyin": "wàzi",
    //     "level": "HSK4",
    //     "english": "Socks"
    // },
    // "大妈": {
    //     "zhuyin": "",
    //     "pinyin": "dà mā",
    //     "level": "HSK4",
    //     "english": "aunt; father’s elder brother’s wife"
    // },
    // "陆地": {
    //     "zhuyin": "",
    //     "pinyin": "lùdì",
    //     "level": "HSK4",
    //     "english": "land"
    // },
    // "独立": {
    //     "zhuyin": "",
    //     "pinyin": "dúlì",
    //     "level": "HSK4",
    //     "english": "Independent"
    // },
    // "轮船": {
    //     "zhuyin": "",
    //     "pinyin": "lúnchuán",
    //     "level": "HSK4",
    //     "english": "Ship"
    // },
    // "紧密": {
    //     "zhuyin": "",
    //     "pinyin": "jǐn mì",
    //     "level": "HSK4",
    //     "english": "close; inseparable"
    // },
    // "召开": {
    //     "zhuyin": "",
    //     "pinyin": "zhàokāi",
    //     "level": "HSK4",
    //     "english": "convene"
    // },
    // "无所谓": {
    //     "zhuyin": "",
    //     "pinyin": "wúsuǒwèi",
    //     "level": "HSK4",
    //     "english": "cannot be designated as"
    // },
    // "定": {
    //     "zhuyin": "",
    //     "pinyin": "dìng",
    //     "level": "HSK4",
    //     "english": "decide; fix; book; order; calm; stable"
    // },
    // "历史": {
    //     "zhuyin": "",
    //     "pinyin": "lìshǐ",
    //     "level": "HSK4",
    //     "english": "History"
    // },
    // "平静": {
    //     "zhuyin": "",
    //     "pinyin": "píngjìng",
    //     "level": "HSK4",
    //     "english": "calm"
    // },
    // "微笑": {
    //     "zhuyin": "",
    //     "pinyin": "wēixiào",
    //     "level": "HSK4",
    //     "english": "Smile"
    // },
    // "出席": {
    //     "zhuyin": "",
    //     "pinyin": "chūxí",
    //     "level": "HSK4",
    //     "english": "Attend"
    // },
    // "老实": {
    //     "zhuyin": "",
    //     "pinyin": "lǎoshi",
    //     "level": "HSK4",
    //     "english": "honest"
    // },
    // "汇率": {
    //     "zhuyin": "",
    //     "pinyin": "huìlǜ",
    //     "level": "HSK4",
    //     "english": "exchange rate"
    // },
    // "或许": {
    //     "zhuyin": "",
    //     "pinyin": "huòxǔ",
    //     "level": "HSK4",
    //     "english": "maybe; probably"
    // },
    // "兴奋": {
    //     "zhuyin": "",
    //     "pinyin": "xīngfèn",
    //     "level": "HSK4",
    //     "english": "Excitement"
    // },
    // "离不开": {
    //     "zhuyin": "",
    //     "pinyin": "lí bù kāi",
    //     "level": "HSK4",
    //     "english": "can’t do without"
    // },
    // "利息": {
    //     "zhuyin": "",
    //     "pinyin": "lìxī",
    //     "level": "HSK4",
    //     "english": "accrual; interest"
    // },
    // "笨": {
    //     "zhuyin": "",
    //     "pinyin": "bèn",
    //     "level": "HSK4",
    //     "english": "stupid"
    // },
    // "宁静": {
    //     "zhuyin": "",
    //     "pinyin": "níng jìng",
    //     "level": "HSK4",
    //     "english": "peaceful; tranquil; quiet"
    // },
    // "质量": {
    //     "zhuyin": "",
    //     "pinyin": "zhìliàng",
    //     "level": "HSK4",
    //     "english": "quality"
    // },
    // "公元": {
    //     "zhuyin": "",
    //     "pinyin": "gōngyuán",
    //     "level": "HSK4",
    //     "english": "A.D."
    // },
    // "实用": {
    //     "zhuyin": "",
    //     "pinyin": "shíyòng",
    //     "level": "HSK4",
    //     "english": "Practical"
    // },
    // "袋": {
    //     "zhuyin": "",
    //     "pinyin": "dài",
    //     "level": "HSK4",
    //     "english": "bag; sack; pocket; pouch"
    // },
    // "圈": {
    //     "zhuyin": "",
    //     "pinyin": "quān",
    //     "level": "HSK4",
    //     "english": "circle"
    // },
    // "而是": {
    //     "zhuyin": "",
    //     "pinyin": "ér shì",
    //     "level": "HSK4",
    //     "english": "but"
    // },
    // "转弯": {
    //     "zhuyin": "",
    //     "pinyin": "zhuǎn wān",
    //     "level": "HSK4",
    //     "english": "make a turn; turn a corner"
    // },
    // "学年": {
    //     "zhuyin": "",
    //     "pinyin": "xué nián",
    //     "level": "HSK4",
    //     "english": "school year; academic year"
    // },
    // "处于": {
    //     "zhuyin": "",
    //     "pinyin": "chǔ yú",
    //     "level": "HSK4",
    //     "english": "be in; be (in a certain condition)"
    // },
    // "总共": {
    //     "zhuyin": "",
    //     "pinyin": "zǒnggòng",
    //     "level": "HSK4",
    //     "english": "In total"
    // },
    // "无限": {
    //     "zhuyin": "",
    //     "pinyin": "wú xiàn",
    //     "level": "HSK4",
    //     "english": "infinite; limitless; unlimited"
    // },
    // "推销": {
    //     "zhuyin": "",
    //     "pinyin": "tuīxiāo",
    //     "level": "HSK4",
    //     "english": "promote sales"
    // },
    // "招呼": {
    //     "zhuyin": "",
    //     "pinyin": "zhāo hu",
    //     "level": "HSK4",
    //     "english": "call; hail; greet; glad-hand"
    // },
    // "丈夫": {
    //     "zhuyin": "",
    //     "pinyin": "zhàngfu",
    //     "level": "HSK4",
    //     "english": "husband"
    // },
    // "单": {
    //     "zhuyin": "",
    //     "pinyin": "dān",
    //     "level": "HSK4",
    //     "english": "single; odd; unlined; thin; weak; only; alone"
    // },
    // "语法": {
    //     "zhuyin": "",
    //     "pinyin": "yǔfǎ",
    //     "level": "HSK4",
    //     "english": "grammar"
    // },
    // "投诉": {
    //     "zhuyin": "",
    //     "pinyin": "tóusù",
    //     "level": "HSK4",
    //     "english": "complaint"
    // },
    // "使劲": {
    //     "zhuyin": "",
    //     "pinyin": "shǐ jìn",
    //     "level": "HSK4",
    //     "english": "exert all one’s strength; put in energy"
    // },
    // "巨大": {
    //     "zhuyin": "",
    //     "pinyin": "jùdà",
    //     "level": "HSK4",
    //     "english": "huge"
    // },
    // "附近": {
    //     "zhuyin": "",
    //     "pinyin": "fùjìn",
    //     "level": "HSK4",
    //     "english": "nearby"
    // },
    // "底": {
    //     "zhuyin": "",
    //     "pinyin": "dǐ",
    //     "level": "HSK4",
    //     "english": "bottom"
    // },
    // "引起": {
    //     "zhuyin": "",
    //     "pinyin": "yǐnqǐ",
    //     "level": "HSK4",
    //     "english": "cause"
    // },
    // "季": {
    //     "zhuyin": "",
    //     "pinyin": "jì",
    //     "level": "HSK4",
    //     "english": "season; period"
    // },
    // "着急": {
    //     "zhuyin": "",
    //     "pinyin": "zháojí",
    //     "level": "HSK4",
    //     "english": "Worry"
    // },
    // "盘子": {
    //     "zhuyin": "",
    //     "pinyin": "pánzi",
    //     "level": "HSK4",
    //     "english": "plate"
    // },
    // "移民": {
    //     "zhuyin": "",
    //     "pinyin": "yímín",
    //     "level": "HSK4",
    //     "english": "immigrant"
    // },
    // "加入": {
    //     "zhuyin": "",
    //     "pinyin": "jiā rù",
    //     "level": "HSK4",
    //     "english": "add; mix; join; become a member"
    // },
    // "率先": {
    //     "zhuyin": "",
    //     "pinyin": "shuài xiān",
    //     "level": "HSK4",
    //     "english": "lead; take the lead"
    // },
    // "汽水": {
    //     "zhuyin": "",
    //     "pinyin": "qì shuǐ",
    //     "level": "HSK4",
    //     "english": "soda; soda water; aerated water; sparkling water"
    // },
    // "缩短": {
    //     "zhuyin": "",
    //     "pinyin": "suōduǎn",
    //     "level": "HSK4",
    //     "english": "Shorten"
    // },
    // "多次": {
    //     "zhuyin": "",
    //     "pinyin": "duō cì",
    //     "level": "HSK4",
    //     "english": "repeatedly; many a time"
    // },
    // "设施": {
    //     "zhuyin": "",
    //     "pinyin": "shèshī",
    //     "level": "HSK4",
    //     "english": "facilities"
    // },
    // "诗人": {
    //     "zhuyin": "",
    //     "pinyin": "shī rén",
    //     "level": "HSK4",
    //     "english": "poet"
    // },
    // "尺": {
    //     "zhuyin": "",
    //     "pinyin": "chǐ",
    //     "level": "HSK4",
    //     "english": "rule; ruler"
    // },
    // "粮食": {
    //     "zhuyin": "",
    //     "pinyin": "liángshi",
    //     "level": "HSK4",
    //     "english": "foodstuff"
    // },
    // "对比": {
    //     "zhuyin": "",
    //     "pinyin": "duìbǐ",
    //     "level": "HSK4",
    //     "english": "Contrast"
    // },
    // "方": {
    //     "zhuyin": "",
    //     "pinyin": "fāng",
    //     "level": "HSK4",
    //     "english": "square"
    // },
    // "想念": {
    //     "zhuyin": "",
    //     "pinyin": "xiǎngniàn",
    //     "level": "HSK4",
    //     "english": "miss"
    // },
    // "电动车": {
    //     "zhuyin": "",
    //     "pinyin": "diàn dòng chē",
    //     "level": "HSK4",
    //     "english": "electric car"
    // },
    // "怀疑": {
    //     "zhuyin": "",
    //     "pinyin": "huáiyí",
    //     "level": "HSK4",
    //     "english": "doubt"
    // },
    // "台上": {
    //     "zhuyin": "",
    //     "pinyin": "tái shàng",
    //     "level": "HSK4",
    //     "english": "on the stage"
    // },
    // "寄": {
    //     "zhuyin": "",
    //     "pinyin": "jì",
    //     "level": "HSK4",
    //     "english": "send"
    // },
    // "并": {
    //     "zhuyin": "",
    //     "pinyin": "bìng",
    //     "level": "HSK4",
    //     "english": "combine; merge; incorporate"
    // },
    // "前途": {
    //     "zhuyin": "",
    //     "pinyin": "qiántú",
    //     "level": "HSK4",
    //     "english": "future"
    // },
    // "别": {
    //     "zhuyin": "",
    //     "pinyin": "bié",
    //     "level": "HSK4",
    //     "english": "do not; leave; separate; pin"
    // },
    // "楼梯": {
    //     "zhuyin": "",
    //     "pinyin": "lóu tī",
    //     "level": "HSK4",
    //     "english": "stairs; staircase; stairway"
    // },
    // "牙": {
    //     "zhuyin": "",
    //     "pinyin": "yá",
    //     "level": "HSK4",
    //     "english": "tooth; ivory; tooth-like thing"
    // },
    // "好友": {
    //     "zhuyin": "",
    //     "pinyin": "hǎo yǒu",
    //     "level": "HSK4",
    //     "english": "friend"
    // },
    // "学分": {
    //     "zhuyin": "",
    //     "pinyin": "xué fēn",
    //     "level": "HSK4",
    //     "english": "credit; academic credit"
    // },
    // "厚": {
    //     "zhuyin": "",
    //     "pinyin": "hòu",
    //     "level": "HSK4",
    //     "english": "thick"
    // },
    // "赢得": {
    //     "zhuyin": "",
    //     "pinyin": "yíng dé",
    //     "level": "HSK4",
    //     "english": "gain; win"
    // },
    // "帽子": {
    //     "zhuyin": "",
    //     "pinyin": "màozi",
    //     "level": "HSK4",
    //     "english": "Hat"
    // },
    // "闹钟": {
    //     "zhuyin": "",
    //     "pinyin": "nào zhōng",
    //     "level": "HSK4",
    //     "english": "alarm clock"
    // },
    // "对于": {
    //     "zhuyin": "",
    //     "pinyin": "duìyú",
    //     "level": "HSK4",
    //     "english": "about"
    // },
    // "根据": {
    //     "zhuyin": "",
    //     "pinyin": "gēnjù",
    //     "level": "HSK4",
    //     "english": "according to"
    // },
    // "描写": {
    //     "zhuyin": "",
    //     "pinyin": "miáoxiě",
    //     "level": "HSK4",
    //     "english": "describe"
    // },
    // "暑假": {
    //     "zhuyin": "",
    //     "pinyin": "shǔ jià",
    //     "level": "HSK4",
    //     "english": "summer vacation"
    // },
    // "转告": {
    //     "zhuyin": "",
    //     "pinyin": "zhuǎngào",
    //     "level": "HSK4",
    //     "english": "Tell"
    // },
    // "方案": {
    //     "zhuyin": "",
    //     "pinyin": "fāng’àn",
    //     "level": "HSK4",
    //     "english": "programme"
    // },
    // "隔": {
    //     "zhuyin": "",
    //     "pinyin": "gé",
    //     "level": "HSK4",
    //     "english": "partition; separate; divide"
    // },
    // "来源": {
    //     "zhuyin": "",
    //     "pinyin": "láiyuán",
    //     "level": "HSK4",
    //     "english": "source"
    // },
    // "说服": {
    //     "zhuyin": "",
    //     "pinyin": "shuōfú",
    //     "level": "HSK4",
    //     "english": "Persuade"
    // },
    // "鲜": {
    //     "zhuyin": "",
    //     "pinyin": "xiān",
    //     "level": "HSK4",
    //     "english": "fresh; bright; delicious; little; rare"
    // },
    // "资料": {
    //     "zhuyin": "",
    //     "pinyin": "zīliào",
    //     "level": "HSK4",
    //     "english": "data"
    // },
    // "后头": {
    //     "zhuyin": "",
    //     "pinyin": "hòu tou",
    //     "level": "HSK4",
    //     "english": "back"
    // },
    // "的确": {
    //     "zhuyin": "",
    //     "pinyin": "díquè",
    //     "level": "HSK4",
    //     "english": "indeed; be certain to"
    // },
    // "家务": {
    //     "zhuyin": "",
    //     "pinyin": "jiāwù",
    //     "level": "HSK4",
    //     "english": "Housework"
    // },
    // "巧克力": {
    //     "zhuyin": "",
    //     "pinyin": "qiǎokèlì",
    //     "level": "HSK4",
    //     "english": "Chocolates"
    // },
    // "守": {
    //     "zhuyin": "",
    //     "pinyin": "shǒu",
    //     "level": "HSK4",
    //     "english": "guard; defend; observe"
    // },
    // "身材": {
    //     "zhuyin": "",
    //     "pinyin": "shēncái",
    //     "level": "HSK4",
    //     "english": "figure"
    // },
    // "弯": {
    //     "zhuyin": "",
    //     "pinyin": "wān",
    //     "level": "HSK4",
    //     "english": "curved; bend; turn; crooked"
    // },
    // "泪": {
    //     "zhuyin": "",
    //     "pinyin": "lèi",
    //     "level": "HSK4",
    //     "english": "tear; teardrop"
    // },
    // "角色": {
    //     "zhuyin": "",
    //     "pinyin": "juésè",
    //     "level": "HSK4",
    //     "english": "role"
    // },
    // "轮": {
    //     "zhuyin": "",
    //     "pinyin": "lún",
    //     "level": "HSK4",
    //     "english": "wheel; ring; take turns"
    // },
    // "神话": {
    //     "zhuyin": "",
    //     "pinyin": "shénhuà",
    //     "level": "HSK4",
    //     "english": "Myth"
    // },
    // "孙女": {
    //     "zhuyin": "",
    //     "pinyin": "sūn nǚ",
    //     "level": "HSK4",
    //     "english": "granddaughter"
    // },
    // "春季": {
    //     "zhuyin": "",
    //     "pinyin": "chūn jì",
    //     "level": "HSK4",
    //     "english": "spring; springtime"
    // },
    // "既": {
    //     "zhuyin": "",
    //     "pinyin": "jì",
    //     "level": "HSK4",
    //     "english": "already; since; as"
    // },
    // "承认": {
    //     "zhuyin": "",
    //     "pinyin": "chéngrèn",
    //     "level": "HSK4",
    //     "english": "Admit"
    // },
    // "获得": {
    //     "zhuyin": "",
    //     "pinyin": "huòdé",
    //     "level": "HSK4",
    //     "english": "Get"
    // },
    // "讲究": {
    //     "zhuyin": "",
    //     "pinyin": "jiǎngjiu",
    //     "level": "HSK4",
    //     "english": "Pay attention to, stress"
    // },
    // "抓紧": {
    //     "zhuyin": "",
    //     "pinyin": "zhuājǐn",
    //     "level": "HSK4",
    //     "english": "Pay close attention to; grasp"
    // },
    // "激烈": {
    //     "zhuyin": "",
    //     "pinyin": "jīliè",
    //     "level": "HSK4",
    //     "english": "fierce"
    // },
    // "伙": {
    //     "zhuyin": "",
    //     "pinyin": "huǒ",
    //     "level": "HSK4",
    //     "english": "partner; partnership"
    // },
    // "前头": {
    //     "zhuyin": "",
    //     "pinyin": "qián tou",
    //     "level": "HSK4",
    //     "english": "front; thereinbefore"
    // },
    // "称赞": {
    //     "zhuyin": "",
    //     "pinyin": "chēngzàn",
    //     "level": "HSK4",
    //     "english": "Praise"
    // },
    // "停下": {
    //     "zhuyin": "",
    //     "pinyin": "tíng xià",
    //     "level": "HSK4",
    //     "english": "stop"
    // },
    // "微信": {
    //     "zhuyin": "",
    //     "pinyin": "wēi xìn",
    //     "level": "HSK4",
    //     "english": "WeChat (a Chinese social app)"
    // },
    // "密码": {
    //     "zhuyin": "",
    //     "pinyin": "mìmǎ",
    //     "level": "HSK4",
    //     "english": "Password"
    // },
    // "形容": {
    //     "zhuyin": "",
    //     "pinyin": "xíngróng",
    //     "level": "HSK4",
    //     "english": "describe"
    // }
}

