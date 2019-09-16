const {JsmsService} = require("jsms");

const messageService = new JsmsService();

messageService.receive("/some/queue")
    .then((message) => {
        console.log(message.body);
        // expected output: {request: "foo"}
        return {response: "ACK"};
    });

messageService.send("/some/queue", {request: "foo"})
    .then((response) => {
        console.log(response.body);
        // expected output: {response: "ACK"}
    });

