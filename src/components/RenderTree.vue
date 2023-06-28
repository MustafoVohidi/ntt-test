<script>
import { h } from "vue";
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      selectid: 0,
    };
  },
  watch: {
    selectid() {
        this.$emit('selectid', this.selectid)
    },
  },
  render(createElement) {
    let arrayElements = [];
    let arrayRenderElements = [];
    let lev = 0;
    let getChildren = function (children, num) {
      num++;
      for (let elem in children) {
        let newElem = {
          name: children[elem].name,
          id: children[elem].id,
          parentid: children[elem].parentid,
          ischild: children[elem].child ? true : false,
        };
        if (newElem.name && newElem.id) {
          arrayRenderElements.push(
            h("div", {
              class: "item level" + num,
              id: newElem.id,
              style: "margin-left:" + num * 5 + "px;",
              innerHTML: newElem.name,
              onClick: function () {
                createElement.$data.selectid = newElem.id;
              },
            })
          );
          arrayElements.push(newElem);
        }

        if (children[elem].child !== undefined) {
          getChildren(children[elem].child, num);
        }
      }
    };
    getChildren(this.data, 0);

    return arrayRenderElements;
  },
};
</script>
