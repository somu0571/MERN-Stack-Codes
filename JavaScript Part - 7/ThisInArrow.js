const student = {
    name: "aman",
    marks: 95,
    prop: this,
    getName: function() {  // eq 1
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); // parent's scope
        return this.name;
    },
    getInfo1 : function() {  // eq 2, from both 1 & 2 the arrow func^n will have student due parent call
        setTimeout(() => {
            console.log(this); // student
        },2000);
    },

    getInfo2 : function() {
        setTimeout(function() {
            console.log(this); // window  , as we set call back that's why we get window
        },2000);
    }
};