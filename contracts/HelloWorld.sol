// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract HelloWorld {
    string message = "Hello World";
    
    function getMessage() public view returns (string memory) {
        return message;
    }
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
    
}