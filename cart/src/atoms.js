import { atomFamily, atom } from "recoil";
import { PRODUCT } from "./product";

export const ProductAtomFamily = atomFamily({
  key: 'ProductAtomFamily',
  default: id => {
    return PRODUCT.find(x => x.id === id)
  },
});


// export const countAtom = atom({
//     key: 'count',
//     default: 1
// });