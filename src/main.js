import { createApp } from 'vue'
import { Toast, Button, Form, Field, CellGroup, NavBar, Icon, Image as VanImage,
    Tabbar, TabbarItem, Popover, SwipeCell, Cell, Tag, Search, PullRefresh, Tab, Tabs,
    Collapse, CollapseItem, IndexBar, IndexAnchor, Row, Col } from 'vant'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(Toast);
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(NavBar);
app.use(Icon);
app.use(VanImage);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Popover);
app.use(SwipeCell);
app.use(Cell);
app.use(Tag);
app.use(Search);
app.use(PullRefresh);
app.use(Tab);
app.use(Tabs);
app.use(Collapse);
app.use(CollapseItem);
app.use(IndexBar);
app.use(IndexAnchor);
app.use(Row);
app.use(Col);
app.use(router);
app.mount('#app');
