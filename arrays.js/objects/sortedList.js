function createSortedList() {
    let obj = {
        list : [],
        add(e) {
            obj.list.push(e)
        },
        remove(index) {

        },
        get(index) {
            return list[index]
        },

    }
    return obj
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));