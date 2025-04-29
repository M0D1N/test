export var pack = {
    "name": "TestPack",
    "author": "M0D1N",
    "ProfileLink": "https://playentry.org/profile/6026539845673d648281f982",
    "PackLink": null,
    "PackIcon": "../../../../../uploads/e8/49/e8494736m1p50q5a2n6nee8421e0kqg5.png",
    "Category": "test",
    "CategoryName": "테스트",
    "CategoryColor": "#ff8254",
    "CategoryIcon": {
        "BlockIcon": "../../../../../uploads/e8/49/e8494736m1p50q5a2n6nee8421e0kqg5.png",
        "CategoryIcon": [
            "../../../../../uploads/e8/49/e8494736m1p50q5a2n6nee8421e0kqg5.png", //평상
            "../../../../../uploads/e8/49/e8494736m1p50q5a2n6nee8421e0kqg5.png", //활성
        ]
    }  
}
    

export var blocks = [
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
                "defaultValue": ["Hello, World!"],
                "key": "VALUE"
            }
        ],
        "py": ["Entry.console_log(%1)"],
        "func": function(sprite, script) {
            const value = script.getStringValue('VALUE', script);
            return console.log(value)
        },
        "isFor": [],
        "isNotFor": []
    },
    {
        "template": "%1, %2의의 %3%4메세지 보내기 %5",
        "type": "alert",
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
                "defaultValue": ["제목"],
                "key": "TITLE"
            },
            {
                "type": "Block",
                "accept": "string",
                "defaultType": "number",
                "defaultValue": ["내용"],
                "key": "MESSAGE"
            },
            {
                "type": "DropdownDynamic",
                "options": [
                    [ "유지되는", "NotDispose" ],
                    [ "사라지는", "Dispose" ],
                ],
                "defaultValue": ["NotDispose"],
                "key": "OPTION"
            },
            {
                "type": "DropdownDynamic",
                "options": [
                    [ "알림", "alert" ],
                    [ "경고", "warning" ],
                    [ "성공", "success" ],
                ],
                "defaultType": "default_dropdown_block",
                "defaultValue": ["alert"],
                "key": "TYPE"
            }
        ],
        "py": ["Entry.console_log(%1)"],
        "func": function(sprite, script) {
            const title = script.getNumberField("TITLE", script);
            const message = script.getNumberField("MESSAGE", script);
            const option = script.getNumberField("OPTION", script);
            const type = script.getNumberField("TYPE", script);

            switch(option) {
                case "NotDispose": Entry.toast.$[type](title, message, true);
                case "Dispose": Entry.toast.$[type](title, message, false);
            }

        },
        "isFor": [],
        "isNotFor": []
    }
]
