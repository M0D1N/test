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
        "template": "%1, %2의 %3%4메세지 보내기 %5",
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
                "type": "Dropdown",
                "options": [
                    [ "유지되는", "NotDispose" ],
                    [ "사라지는", "Dispose" ],
                ],
                "defaultValue": "NotDispose",
                "key": "OPTION"
            },
            {
                "type": "Dropdown",
                "options": [
                    [ "알림", "Alert" ],
                    [ "경고", "Warning" ],
                    [ "성공", "Success" ],
                ],
                "defaultType": "default_dropdown_block",
                "defaultValue": "Alert",
                "key": "TYPE"
            }
        ],
        "py": ["Entry.alert(%1, %2, %3, %4)"],
        "func": function(sprite, script) {
            const title = script.getNumberField("TITLE", script);
            const message = script.getNumberField("MESSAGE", script);
            const option = script.getNumberField("OPTION", script);
            const type = script.getNumberField("TYPE", script);

            var dispose = false;
            if (option == "NotDispose") dispose = true

            switch(type) {
                case "Alert": return Entry.toast.alert(title, message, dispose);
                case "Warning": return Entry.toast.warning(title, message, dispose);
                case "Success": return Entry.toast.success(title, message, dispose);
            }

        },
        "isFor": [],
        "isNotFor": []
    }
]
