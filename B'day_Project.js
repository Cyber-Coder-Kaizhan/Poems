var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
  fabric.Image.fromURL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98YJQ_xS1lt3JCG4RL9tessggfKuyl6f14sdgDgjTRELm4T9EvrWh-Y6Jar-8cj9GFdM&usqp=CAU', function (Img) {
    block_Image_object = Img;

    block_Image_object.scaleToWidth(700);
    block_Image_object.scaleToHeight(510);
    block_Image_object.set({
      top: 0,
      left: 0
    });
    canvas.add(block_Image_object);
  });
}

function playSound() {
  x.play();
}






















var canvas2 = new fabric.Canvas('myCanvas2');
var y = document.getElementById("myAudio2");

function new_image() {
  fabric.Image.fromURL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98YJQ_xS1lt3JCG4RL9tessggfKuyl6f14sdgDgjTRELm4T9EvrWh-Y6Jar-8cj9GFdM&usqp=CAU', function (Img) {
    block_Image_object = Img;

    block_Image_object.scaleToWidth(700);
    block_Image_object.scaleToHeight(510);
    block_Image_object.set({
      top: 0,
      left: 0
    });
    canvas.add(block_Image_object);
  });
}

function playSound() {
  y.play();
}






















var canvas3 = new fabric.Canvas('myCanvas3');
var z = document.getElementById("myAudio3");

function new_image() {
  fabric.Image.fromURL('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHBg0IBxASCg0FDRYFDQ0FFQ8NCRAWFBEWFhUREx8YHSggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg8PFSsZExkrKysrKysrLSsrKysrKysrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIG/8QAFRABAQAAAAAAAAAAAAAAAAAAABH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAcG/8QAFhEBAQEAAAAAAAAAAAAAAAAAABIR/9oADAMBAAIRAxEAPwDtAHlb6cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABXQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADRUA0EEqaogGqIBqiAaogGqIBqiAaogGqIBqiAaogGqIBqiAaogGqIBqiAaoihqCAypRAKUQClEApRAKUQClEApRAKUQClEApRAKUQClEApRAKUQClEApRAKQBLGgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgARSCCWFKIBSiAUogFKIBSiAUogFKIBSiAUogFKIBSiAUogFKIBSiAUogFKIBSCCXNaiAWogFqIBaiAWogFqIBaiAWogFqIBaiAWogFqIBaiAWogFqIBaoAWgzSpcttDNKFtDNKFtDNKFtDNKFtDNKFtDNKFtDNKFtDNKFtDNKFtDNKFtDNKFtDNKFtDNKFtDNKFtDNKFtDNAtAhE45KAhDCgIQwoCEMKAhDCgIQwoCEMKAhDCgIQwoCEMKAhDCgIQwoCEMKAhDCgIQwoCEMKAgnCm4RuEaYoxCNwhgxCNwhgxCNwhgxCNwhgxCNwhgxCNwhgxCNwhgxCNwhgxCNwhgxCNwhgxCNwhgxCNwhgxCNwhgxCNwhgxCNwhgxBuIYNwjcI0wYhG4QwYhG4QwYhG4QwYhG4QwYhG4QwYhG4QwYhG4QwYhG4QwYhG4QwYhG4QwYhG4QwYhG4QwYhG4QwYhG4QwYhG4QwYg3FMGoRuEa4MQjcIYMQjcIYMQjcIYMQjcIYMQjcIYMQjcIYMQjcIYMQjcIYMQjcIYMQjcIYMQjcIYMQjcIYMQjcIYMQjcIYMQjcIYMQbgYNALgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=', function (Img) {
    block_Image_object = Img;

    block_Image_object.scaleToWidth(700);
    block_Image_object.scaleToHeight(510);
    block_Image_object.set({
      top: 0,
      left: 0
    });
    canvas.add(block_Image_object);
  });
}

function playSound() {
  z.play();
}