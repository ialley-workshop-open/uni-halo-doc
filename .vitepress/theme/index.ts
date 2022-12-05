import DefaultTheme from "vitepress/theme";
import "./styles/vars.css";
import "./custom.css";

// 注册组件
import CustomFooter from './components/CustomFooter.vue'


export default {...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomFooter', CustomFooter)
  }
};
