//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleStorage {
    uint256 number;

    function storeNumber(uint256 _newNumber) public {
        number = _newNumber;
    }

    function retrieve() public view returns (uint256) {
        return number;
    }
}
