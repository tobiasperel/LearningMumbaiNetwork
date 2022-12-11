import { ethers } from "hardhat";
import { Contract } from "ethers";
import { expect } from "chai";

const prepare = async () => {
  const [deployer, mallory, alice] = await ethers.getSigners();

  const helloWorld = await ethers.getContractFactory("HelloWorld");
  const HelloWorld = await helloWorld.deploy();
  await HelloWorld.deployed();
  return {
    deployer,
    mallory,
    HelloWorld,
    alice,
  };
};

describe("HelloWorld", () => {
  it("Say hello", async (done) => {
    const { deployer, mallory, HelloWorld } = await prepare();

    const  tx = await HelloWorld.connect(deployer).setMessage("Lionel Messi");
    await tx.wait();
    const message = await HelloWorld.connect(deployer).getMessage();
    expect(message).to.equal("Lionel Messi");
  });


});
