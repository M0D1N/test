module.exports = {
    type: "module",
    "pack": {
        "name": "TestPack",
        "author": "M0D1N",
        "ProfileLink": "https://playentry.org/profile/6026539845673d648281f982",
        "Category": "test",
        "PackIcon": "",
        "CategoryIcon": ""
    },
    "blocks": [
        {
        "template": "콘솔에 %1출력하기 %2",
        "type": "console_log",
        "class": "entry",
        "skeleton": "basic",
        "color": [ "#303030", "#000000", "#ffffff" ],
        "statements": [],
        "events": {},
        "params": [
            {
                "type": "Block",
                "accept": "string",
                "defaultType": "number",
                "defaultValue": "Hello, World!",
                "key": "VALUE"
            },
            {
                "type": "Indicator",
                "img": "block_icon/moving_icon.svg",
                "size": 11
            }
        ],
        "py": "Entry.console_log(%1)",
        "func": function(sprite, script) {
            const value = script.getStringValue('VALUE', script);
            return console.log(value)
        },
        "isFor": [],
        "isNotFor": []
        }
]
}
