<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
        <div class="hello">
        <h3>Text Box 1 with default text and place holder</h3>
        <label-edit :text="text" id="propsdata" v-on:text-updated="textUpdated" placeholder="Enter some text"></label-edit>
    </div>
      </li>

    </transition-group>
    <TodoItem
      v-for="(todo,index) in todoItems"
      v-bind:todo="todo"
      v-bind:key="index"
    />
  </section>
</template>

<script>
import LabelEdit from 'label-edit'

export default {
  props: ['propsdata'],
  components: {
  LabelEdit,
  },
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeTodo', todoItem, index);
    },

    textUpdated: function(text){
      this.text = text;
    }
  }

}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
