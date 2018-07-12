import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import tongzhi from '../components/tongzhi'
import tongzhi_xinwen from '../components/tongzhi_xinwen'
import wode from '../components/wode'
import wode_xinxi from '../components/wode_xinxi'
import wode_xinxi_edit from '../components/wode_xinxi_edit'
import wode_lianghua from '../components/wode_lianghua'
import wode_lianghua_jifen from '../components/wode_lianghua_jifen'
import wode_mima from '../components/wode_mima'
import wode_dangfei from '../components/wode_dangfei'
import login from '../base/login'
import suishi from '../base/suishi'
import xingong from '../base/xingong'
import xingong_xinwen from '../base/xingong_xinwen'
import zhangshang from '../base/zhangshang'
import zhangshang_zz from '../base/zhangshang_zz'
import zhangshang_zz_xinwen from '../base/zhangshang_zz_xinwen'
import zhangshang_sx from '../base/zhangshang_sx'
import zhangshang_xd from '../base/zhangshang_xd'
import zhangshang_mz from '../base/zhangshang_mz'
import zhangshang_ld from '../base/zhangshang_ld'
import dangyuan1 from '../base/dangyuan1'
import dangjian from '../base/dangjian'
import dangyuan2 from '../base/dangyuan2'
import dangshi from '../base/dangshi'
import xue from '../base/xue'
import xue_xinwen from '../base/xue_xinwen'
import pai from '../base/pai'
import pai_xinwen from '../base/pai_xinwen'
import jianshe from '../base/jianshe'
import jianshe_xinwen from '../base/jianshe_xinwen'
import huodong from '../base/huodong'
import huodong_xinwen from '../base/huodong_xinwen'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/ajaxup',
      component: () => import("@/components/ajaxup")
    },

    {path: '/', redirect: '/index'},
    {path: '/index', component: index},
    {path: '/tongzhi', component: tongzhi,
    meta:{
      title:"通知早知道",
      show:true
    }},
    {path: '/tongzhi_xinwen', component: tongzhi_xinwen,
      meta:{
        title:"通知早知道",
      }},
    {path: '/wode', component: wode,
    meta:{
      title:"我的党建",
      show:true
    }},
    {path: '/wode_xinxi', component: wode_xinxi,
      meta:{
        title:"个人信息",
        show:true
      }},
    {path: '/wode_xinxi_edit', component: wode_xinxi_edit,
      meta:{
        title:"修改个人信息",
      }},
    {path: '/wode_lianghua', component: wode_lianghua,
      meta:{
        title:"个人量化积分",
        show:true
      }},
    {path: '/wode_lianghua_jifen', component: wode_lianghua_jifen,
      meta:{
        title:"积分明细",
        show:true
      }},
    {path: '/wode_mima', component: wode_mima,
      meta:{
        title:"修改密码",
        show:true
      }},
    {path: '/wode_dangfei', component: wode_dangfei,
      meta:{
        title:"缴纳党费",
        show:true
      }},

    {path: '/login', component: login,
    meta:{
      title:"登录",
      show:true
    }},
    {path: '/suishi', component: suishi,
      meta:{
        title:"随时随地学",
      }},

    {path: '/xingong', component: xingong,
      meta:{
        title:"信工新闻眼",
        show:true
      }},
    {path: '/xingong_xinwen', component: xingong_xinwen,
      meta:{
        title:"信工新闻眼",
        show:true
      }},

    {path: '/zhangshang', component: zhangshang,
      meta:{
        title:"掌上组织生活",
      }},
    {path: '/zhangshang_zz', component: zhangshang_zz,
      meta:{
        title:"政治学习",
      }},
    {path: '/zhangshang_zz_xinwen', component: zhangshang_zz_xinwen,
      meta:{
        title:"政治学习",
      }},
    {path: '/zhangshang_sx', component: zhangshang_sx,
      meta:{
        title:"思想汇报",
      }},
    {path: '/zhangshang_sx-refer',
      meta:{
        title:"思想汇报",
      },
      component: () => import("@/base/zhangshang_sx-refer")
    },
    {path: '/zhangshang_xd', component: zhangshang_xd,
      meta:{
        title:"心得总结",
      }},
    {path: '/zhangshang_xd-refer',
      meta:{
        title:"心得总结",
      },
      component: () => import("@/base/zhangshang_xd-refer")
    },

    {path: '/zhangshang_mz',
      component: zhangshang_mz,
      meta:{
        title:"掌上组织生活",
      }},

    {path: '/zhangshang_mz_summary',
      meta:{
        title:"个人总结",
      },
      component: () => import("@/base/zhangshang_mz_summary")
    },
    {path: '/zhangshang_mz_discuss',
      meta:{
        title:"民主评议",
      },
      component: () => import("@/base/zhangshang_mz_discuss")
    },
    {path: '/zhangshang_mz_discuss_dis',
      meta:{
        title:"参评议员",
      },
      component: () => import("@/base/zhangshang_mz_discuss_dis")
    },

    {path: '/zhangshang_mz_discuss_dis-zj',
      meta:{
        title:"民主评议",
      },
      component: () => import("@/base/zhangshang_mz_discuss_dis-zj")
    },


    {path: '/zhangshang_ld', component: zhangshang_ld,
      meta:{
        title:"流动党员找组织",
      }},

    {path: '/dangyuan1', component: dangyuan1,
      meta:{
        title:"党员云互动",
        show:true
      }},
    {path: '/dangyuan1_huifu',
      meta:{
        title:"党员云互动",
      },
      component: () => import("@/base/dangyuan1_huifu")
    },

    {path: '/dangjian', component: dangjian,
      meta:{
        title:"党建一点通",
      }},
    {path: '/dangjian_xinwen',
      meta:{
        title:"党建一点通",
      },
      component: () => import("@/base/dangjian_xinwen")
    },
    {path: '/dangyuan2', component: dangyuan2,
      meta:{
        title:"党员亮身份",
        show:true
      }},
    {path: '/dangyuan2_xinwen',
      meta:{
        title:"党员亮身份",
      },
      component: () => import("@/base/dangyuan2_xinwen")
    },

    {path: '/dangshi', component: dangshi,
      meta:{
        title:"党史上的今天",
        show:true
      }},

    {path: '/xue', component: xue,
      meta:{
        title:"随时随地学",
        show:true
      }},
    {path: '/xue_xinwen', component: xue_xinwen,
      meta:{
        title:"随时随地学",
        show:true
      }},

    {path: '/pai', component: pai,
      meta:{
        title:"随时随地拍",
        show:true
      }},
    {path: '/pai_xinwen', component: pai_xinwen,
      meta:{
        title:"随时随地拍",
        show:true
      }},

    {path: '/jianshe', component: jianshe,
      meta:{
        title:"制度建设",
        show:true
      }},
    {path: '/jianshe_xinwen', component: jianshe_xinwen,
      meta:{
        title:"制度建设",
        show:true
      }},

    {path: '/huodong', component: huodong,
      meta:{
        title:"特色活动",
        show:true
      }},
    {path: '/huodong_xinwen', component: huodong_xinwen,
      meta:{
        title:"特色活动",
        show:true
      }},



  ]
})
