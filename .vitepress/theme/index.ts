import DefaultTheme from "vitepress/theme";
import "./styles/vars.css";
import "./styles/blur.css";
import "./custom.css";

// 注册组件
import CustomFooter from './components/CustomFooter.vue'
import CustomUsingExamples from './components/CustomUsingExamples.vue'
import CustomLayout from "./components/CustomLayout.vue";
// import CustomBilibiliVideo from "./components/CustomBilibiliVideo.vue";
import CustomIframe from "./components/CustomIframe.vue";
import CustomDialog from "./components/CustomDialog.vue";
import CustomFriendLinks from "./components/CustomFriendLinks.vue";
import CustomTeams from "./components/CustomTeams.vue";

export default {...DefaultTheme,
	Layout:CustomLayout,
  enhanceApp({ app }) {
    app.component('CustomFooter', CustomFooter)
		app.component("CustomUsingExamples",CustomUsingExamples)
		app.component("CustomIframe",CustomIframe)
		app.component("CustomDialog",CustomDialog)
		app.component("CustomFriendLinks",CustomFriendLinks)
		app.component("CustomTeams",CustomTeams)
  }
};
