import DefaultTheme from "vitepress/theme";
import "./styles/vars.css";
import "./custom.css";

// 注册组件
import CustomFooter from './components/CustomFooter.vue'
import CustomUsingExamples from './components/CustomUsingExamples.vue'
import CustomLayout from "./components/CustomLayout.vue";
import CustomBilibiliVideo from "./components/CustomBilibiliVideo.vue";

export default {...DefaultTheme,
	Layout:CustomLayout,
  enhanceApp({ app }) {
    app.component('CustomFooter', CustomFooter)
		app.component("CustomUsingExamples",CustomUsingExamples)
		app.component("CustomBilibiliVideo",CustomBilibiliVideo)
  }
};
