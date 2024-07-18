
const box = {
    length: 1,
    width: 1,
    height: 1
}

box.length
box.width
box.height

export default box;


import box from './box'
box.length

const { length, width, height } = useContext(box);