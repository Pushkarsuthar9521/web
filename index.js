// create object




// Factory Function

function createRactangle() {
    
    let rectangle = {
        length: 1,
        breadth: 2,
        
        
        // Method
        draw: function () {
            console.log('Draw'); 
            
        }
    };
    return rectangle;
}

// now we will create multiple objects using factory function

let obj1 = createRactangle();
let obj2 = createRactangle();
let obj3 = createRectangle();


// Constructor Function
function Rectangle(len,bre)
{
    this.length = len;
    this.breadth = bre;
    this.draw=function(){
        console.log('drawing');
    }
}

////