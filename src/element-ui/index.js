/*
 * @Description: 按需引入element-ui
 * @Date: 2021-06-01 15:10:03 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-01 21:07:18 +0800
 * @LastEditors: JackChou
 */
// import { Button } from 'element-ui'
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Button,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification,
} from 'element-ui'
const components = [Button]
const elComponents = {
  install(Vue, elementOptions = { size: 'small', zIndex: 3000 }) {
    Vue.prototype.$ELEMENT = { ...elementOptions, size: 'small', zIndex: 3000 }
    try {
      components.forEach(component => {
        if (!component.name) {
          // 跳出 forEach 的技巧
          throw new Error('组件必须提供名字，并且使用大驼峰式命名')
        } else {
          Vue.component(component.name, component)
        }
      })
    } catch (error) {
      console.error(error)
    }
  },
}

export default elComponents
