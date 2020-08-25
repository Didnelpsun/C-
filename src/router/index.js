import Vue from 'vue'
import Router from 'vue-router'
import login from 'components/login' // 登录界面
import Main from 'components/main' // 主界面模块
import Mixin from 'components/mixin' // 测试控件页面

// 首页
import index from 'components/main/index/index' // 首页
import UserInfo from 'components/main/index/UserInfo' // 个人信息
import Dictionaries from 'components/main/index/Dictionaries' // 字典
import Map from 'components/main/index/map' // 地图
import Statistics from 'components/main/index/Statistics' // 统计
import TenantList from 'components/main/index/TenantList' // 系统租户

// 系统
import UserList from 'components/main/System/UserList' // 系统用户
import MenuList from 'components/main/System/MenuList' // 系统菜单
import RoleList from 'components/main/System/RoleList' // 系统角色
import PermissionList from 'components/main/System/PermissionList' // 资源管理
import AreasList from 'components/main/System/AreasList' // 系统区域
import OrganizationList from 'components/main/System/OrganizationList' // 组织架构
import ImportTemplate from 'components/main/System/ImportTemplate' // 导入模板
import PageSpecification from 'components/main/System/PageSpecification'

// 站点资源
import MonitoringSite from 'components/main/Resource/MonitoringSite' // 监控站点
import SwitchCabinetList from 'components/main/Resource/SwitchCabinetList' // 换电柜
import ZYResource from 'components/main/Resource/ZYResource' // 资源站点列表
import NYResource from 'components/main/Resource/NYResource' // 能源站点列表
import OperatorSite from 'components/main/Resource/OperatorSite' //  运营商站点
import ChargingPile from 'components/main/Resource/ChargingPile' // 充电桩
import Reservepover from 'components/main/Resource/Reservepover' // 备电
import BatteryGenerator from 'components/main/Resource/BatteryGenerator' // 电池发电
import Battery from 'components/main/Resource/Battery' // 换电电池
import OilFiredGenerator from 'components/main/Resource/OilFiredGenerator' // 燃油发电机
import ResourceEquipment from 'components/main/Resource/ResourceEquipment' // 资源站点设备管理
import EnergyResourceEquipment from 'components/main/Resource/EnergyResourceEquipment' // 能源站点设备管理
import SwitchingPowerSupply from '../components/main/Resource/SwitchingPowerSupply' // 开关电源
import Ammeter from '../components/main/Resource/Ammeter' // 电表
import AnElectricIntroduced from '../components/main/Resource/AnElectricIntroduced' // 电表


// 维护管理
import HiddenDanger from 'components/main/Uphold/HiddenDanger' // 隐患危险

// 油机调度
import TaskList from 'components/main/YJGL/TaskList' // 任务列表
import SiteList from 'components/main/YJGL/SiteList' // 站点列表
import EngineList from 'components/main/YJGL/EngineList' // 油机列表
import EngineAudit from 'components/main/YJGL/EngineAudit' // 油机审核
import TagList from 'components/main/YJGL/TagList' // 标签列表
import CollectorList from 'components/main/YJGL/CollectorList' // 监控模块列表
import PowerRecordInfoAudit from 'components/main/YJGL/PowerRecordInfoAudit' // 发电记录审核
import CourtsList from 'components/main/YJGL/CourtsList' // 台区列表
import AssistantList from 'components/main/YJGL/AssistantList' // 协管员列表
import AssistantAudit from 'components/main/YJGL/AssistantAudit' // 协管员审核列表
import PowerWarningList from 'components/main/YJGL/PowerWarningList' // 预警监控列表
import PowerDispatchRecord from 'components/main/YJGL/PowerDispatchRecord' // 预警监控列表
import EngineStoragePosition from 'components/main/YJGL/EngineStoragePosition' // 固定油机部署列表
import EngineStoragePositionAudit from 'components/main/YJGL/EngineStoragePositionAudit' // 固定油机部署审核列表

// 移动上站
import SiteManagement from 'components/main/YDSZ/SiteManagement' // 站址管理
import LogicStationManagement from 'components/main/YDSZ/LogicStationManagement' // 逻辑站管理
import RRUEquipment from 'components/main/YDSZ/RRUEquipment' // RRU设备管理
import BBUEquipment from 'components/main/YDSZ/BBUEquipment' // BBU设备管理
import EquipmentManagement from 'components/main/YDSZ/EquipmentManagement' // 设备管理
import ElectricityMeter from 'components/main/YDSZ/ElectricityMeter' // 电表管理

// 勘察管理
import NYTaskManagement from 'components/main/TaskManagement/NYTaskManagement' // 任务管理
import ProjectManagement from 'components/main/SurveyManagement/ProjectManagement' // 项目管理
import StockStation from 'components/main/SurveyManagement/StockStation' // 存量站

import TaskManagement from 'components/main/SurveyManagement/TaskManagement' // 任务管理
import NewBuildStation from 'components/main/SurveyManagement/NewBuildStation' // 新建站
import InvestigateImgConfiguration from 'components/main/SurveyManagement/InvestigateImgConfiguration' // 勘察图片配置管理
import TaskAuitLog from 'components/main/SurveyManagement/TaskAuitLog' // 任务审核记录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      // 错误路由返回到之前状态
      path: '*',
      name: '404',
      redirect: '/login'
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      meta: {
        keepAlive: true
      },
      children: [
        { // 测试控件
          path: 'Mixin',
          name: 'mixin',
          component: Mixin
        },
        { // 用户的个人资料
          path: 'UserInfo',
          name: 'UserInfo',
          component: UserInfo
        },
        { // 字典
          path: 'Dictionaries',
          name: 'Dictionaries',
          component: Dictionaries
        },
        { // 首页
          path: 'index',
          name: 'index',
          component: index
        },
        { // 地图
          path: 'map',
          name: 'Map',
          component: Map
        },
        { // 统计
          path: 'Statistics',
          name: 'Statistics',
          component: Statistics
        },
        { // 系统租户
          path: 'TenantList',
          name: 'TenantList',
          component: TenantList
        },
        { // 系统菜单
          path: 'MenuList',
          name: 'MenuList',
          component: MenuList
        },
        { // 系统用户
          path: 'UserList',
          name: 'UserList',
          component: UserList
        },
        { // 系统角色
          path: 'RoleList',
          name: 'RoleList',
          component: RoleList
        },
        { // 资源管理
          path: 'PermissionList',
          name: 'PermissionList',
          component: PermissionList
        },
        { // 系统区域
          path: 'AreasList',
          name: 'AreasList',
          component: AreasList
        },
        { // 组织架构
          path: 'OrganizationList',
          name: 'OrganizationList',
          component: OrganizationList
        },
        { // 换电柜
          path: 'SwitchCabinetList',
          name: 'SwitchCabinetList',
          component: SwitchCabinetList
        },
        {// 开关电源
          path: 'SwitchingPowerSupply',
          name: 'SwitchingPowerSupply',
          component: SwitchingPowerSupply
        },
        {// 电表
          path: 'Ammeter',
          name: 'Ammeter',
          component: Ammeter
        },
        {// 外电引入
          path: 'AnElectricIntroduced',
          name: 'AnElectricIntroduced',
          component: AnElectricIntroduced
        },
        {
          path: 'ZYResource',
          name: 'ZYResource',
          component: ZYResource
        },
        {
          path: 'NYResource',
          name: 'NYResource',
          component: NYResource
        },
        {
          path: 'MonitoringSite',
          name: 'MonitoringSite',
          component: MonitoringSite
        },
        {
          path: 'OperatorSite',
          name: 'OperatorSite',
          component: OperatorSite
        },
        {
          path: 'ChargingPile',
          name: 'ChargingPile',
          component: ChargingPile
        },
        {
          path: 'Reservepover',
          name: 'Reservepover',
          component: Reservepover
        },
        {
          path: 'TaskList',
          name: 'TaskList',
          component: TaskList
        },
        {
          path: 'SiteList',
          name: 'SiteList',
          component: SiteList
        },
        {
          path: 'EngineList',
          name: 'EngineList',
          component: EngineList
        },
        {
          path: 'EngineAudit',
          name: 'EngineAudit',
          component: EngineAudit
        },
        {
          path: 'TagList',
          name: 'TagList',
          component: TagList
        },
        {
          path: 'CollectorList',
          name: 'CollectorList',
          component: CollectorList
        },
        {
          path: 'PowerRecordInfoAudit',
          name: 'PowerRecordInfoAudit',
          component: PowerRecordInfoAudit
        },
        {
          path: 'CourtsList',
          name: 'CourtsList',
          component: CourtsList
        },
        {
          path: 'AssistantList',
          name: 'AssistantList',
          component: AssistantList
        },
        {
          path: 'AssistantAudit',
          name: 'AssistantAudit',
          component: AssistantAudit
        },
        {
          path: 'PowerWarningList',
          name: 'PowerWarningList',
          component: PowerWarningList
        },
        {
          path: 'PowerDispatchRecord',
          name: 'PowerDispatchRecord',
          component: PowerDispatchRecord
        },
        {
          path: 'EngineStoragePosition',
          name: 'EngineStoragePosition',
          component: EngineStoragePosition
        },
        {
          path: 'EngineStoragePositionAudit',
          name: 'EngineStoragePositionAudit',
          component: EngineStoragePositionAudit
        },
        {
          path: 'BatteryGenerator',
          name: 'BatteryGenerator',
          component: BatteryGenerator
        },
        {
          path: 'Battery',
          name: 'Battery',
          component: Battery
        },
        {
          path: 'SiteManagement',
          name: 'SiteManagement',
          component: SiteManagement
        },
        {
          path: 'LogicStationManagement',
          name: 'LogicStationManagement',
          component: LogicStationManagement
        },
        {
          path: 'RRUEquipment',
          name: 'RRUEquipment',
          component: RRUEquipment
        },
        {
          path: 'BBUEquipment',
          name: 'BBUEquipment',
          component: BBUEquipment
        },
        {
          path: 'EquipmentManagement',
          name: 'EquipmentManagement',
          component: EquipmentManagement
        },
        {
          path: 'ElectricityMeter',
          name: 'ElectricityMeter',
          component: ElectricityMeter
        },
        {
          path: 'HiddenDanger',
          name: 'HiddenDanger',
          component: HiddenDanger
        },
        {
          path: 'ImportTemplate',
          name: 'ImportTemplate',
          component: ImportTemplate
        },
        {
          path: 'NYTaskManagement',
          name: 'NYTaskManagement',
          component: NYTaskManagement
        },
        {
          path: 'OilFiredGenerator',
          name: 'OilFiredGenerator',
          component: OilFiredGenerator
        },
        {
          path: 'ResourceEquipment',
          name: 'ResourceEquipment',
          component: ResourceEquipment
        },
        {
          path: 'EnergyResourceEquipment',
          name: 'EnergyResourceEquipment',
          component: EnergyResourceEquipment
        },
        {
          path: 'ProjectManagement',
          name: 'ProjectManagement',
          component: ProjectManagement
        },
        {
          path: 'StockStation',
          name: 'StockStation',
          component: StockStation
        },
        {
          path: 'TaskManagement',
          name: 'TaskManagement',
          component: TaskManagement
        },
        {
          path: 'NewBuildStation',
          name: 'NewBuildStation',
          component: NewBuildStation
        },
        {
          path: 'InvestigateImgConfiguration',
          name: 'InvestigateImgConfiguration',
          component: InvestigateImgConfiguration
        },
        {
          path: 'PageSpecification',
          name: 'PageSpecification',
          component: PageSpecification
        },
        {
          path: 'TaskAuitLog',
          name: 'TaskAuitLog',
          component: TaskAuitLog
        },
        {
          path: '*', // 此处需特别注意至于最底部
          redirect: 'notFound'
        }
      ]
    }
  ]
})
