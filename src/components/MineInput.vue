<template>
    <div class="input">
        <input
            :type="inputType"
            v-model="content"
            :class="{ disabled: inputBg }"
            :placeholder="placeholder"
            @focus="changeInputBg()"
            @blur="changeInputBg()"
        />
        <span v-if="code" class="disabled" :class="{ active: contentLength }"
        >获取验证码</span>

    </div>
  
</template>

<script>
export default {
  props: {
    inputType: {
      type: String,
      required: false,
      default: "text"
    },
    placeholder: {
      type: String,
      required: true
    },
    code: {
      type: Boolean,
      required: false,
      default: false
    },
    max :{
        type:Number,
        required:false,
        default: 11
    }
  },
  data() {
    return {
      content: "",
      canBg : false,
    };
  },
  methods: {
    changeInputBg() {
        this.canBg = !this.canBg;
    }
  },
  computed: {
    contentLength() {
      return this.content.length === 11;
    },
    inputBg : {
      get : function () {
        if (
          this.inputType === "number" &&
          this.placeholder === "请输入验证码" || this.canBg
        ) {
          return true;
        } else {
          return false;
        }
      },
      set :function () {
          return ;
      }
    }
   
  }
};
</script>

<style lang="less" scoped>

.disabled {
  color: #999;
  border: 1px solid rgb(235, 235, 228);
  background-color: rgb(235, 235, 228);
  border-radius: 5px;
}
.input {
  // font-size: 0.28px;
  padding: 0.14rem 0.4rem;
  height: 0.86rem;
  box-sizing: border-box;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  input {
    flex: 1 0 auto;
    border: none;
    outline: none;
    margin-right: 0.2rem;
    padding-left: 0.1rem;
  }
  span.disabled {
    text-align: center;
    line-height: 0.52rem;
    display: inline-block;
    width: 2rem;
    &.active {
      color: #df2d2d;
      border: 1px solid #df2d2f;
      background-color: #fff;
      border-radius: 5px;
    }
  }
}
</style>
