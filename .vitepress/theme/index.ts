import DefaultTheme from "vitepress/theme";
import "./styles/vars.css";
import "./custom.css";

// 注册组件
import CustomFooter from './components/CustomFooter.vue'
import CustomUsingExamples from './components/CustomUsingExamples.vue'


export default {...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomFooter', CustomFooter)
		app.component("CustomUsingExamples",CustomUsingExamples)
  }
};
