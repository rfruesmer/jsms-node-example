const {JsmsService} = require("jsms");

const messageService = new JsmsService();

messageService.send("/some/queue", {abc: "xyz"})
    .then(response => {
        console.log(response.body); // expected output: {xyz: "abc"}
    });

messageService.receive("/some/queue")
    .then(message => {
        console.log(message.body); // expected output: {abc: "xyz"}
        return {xyz: "abc"};
    });

messageService.subscribe("/some/topic", message => {
    console.log(message.body); // expected output: {zyx: "cab"}
});

messageService.publish("/some/topic", {zyx: "cab"});
