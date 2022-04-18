"use strict"; 

import React from "react";
import renderer from 'react-test-renderer'
import Button from "../../src/components/button/button";

test.skip('Button text displays as per args', () => {
    
    const component = renderer.create(
        <Button text={"GLOOOBER"}></Button>    
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});

test.skip("Button recieves correct styling", () => {

    const component = renderer.create(
        <Button size={{sd: 21321}} 
            bColor={"grey"}
        >
        </Button>    
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})