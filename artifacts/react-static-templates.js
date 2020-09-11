

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/pages/404.jsx'), universalOptions)
      t_0.template = '__react_static_root__/src/pages/404.jsx'
      
const t_1 = universal(import('__react_static_root__/src/Home'), universalOptions)
      t_1.template = '__react_static_root__/src/Home'
      
const t_2 = universal(import('__react_static_root__/src/Contact'), universalOptions)
      t_2.template = '__react_static_root__/src/Contact'
      
const t_3 = universal(import('__react_static_root__/src/About'), universalOptions)
      t_3.template = '__react_static_root__/src/About'
      
const t_4 = universal(import('__react_static_root__/src/About/Approach'), universalOptions)
      t_4.template = '__react_static_root__/src/About/Approach'
      
const t_5 = universal(import('__react_static_root__/src/About/Team'), universalOptions)
      t_5.template = '__react_static_root__/src/About/Team'
      
const t_6 = universal(import('__react_static_root__/src/About/Supporters'), universalOptions)
      t_6.template = '__react_static_root__/src/About/Supporters'
      
const t_7 = universal(import('__react_static_root__/src/About/Opportunities'), universalOptions)
      t_7.template = '__react_static_root__/src/About/Opportunities'
      
const t_8 = universal(import('__react_static_root__/src/About/Statements'), universalOptions)
      t_8.template = '__react_static_root__/src/About/Statements'
      
const t_9 = universal(import('__react_static_root__/src/Family'), universalOptions)
      t_9.template = '__react_static_root__/src/Family'
      
const t_10 = universal(import('__react_static_root__/src/Family/Outreach'), universalOptions)
      t_10.template = '__react_static_root__/src/Family/Outreach'
      
const t_11 = universal(import('__react_static_root__/src/Family/FLC'), universalOptions)
      t_11.template = '__react_static_root__/src/Family/FLC'
      
const t_12 = universal(import('__react_static_root__/src/Family/Resources'), universalOptions)
      t_12.template = '__react_static_root__/src/Family/Resources'
      
const t_13 = universal(import('__react_static_root__/src/Family/Imagine'), universalOptions)
      t_13.template = '__react_static_root__/src/Family/Imagine'
      
const t_14 = universal(import('__react_static_root__/src/Community/Initiative'), universalOptions)
      t_14.template = '__react_static_root__/src/Community/Initiative'
      
const t_15 = universal(import('__react_static_root__/src/Community'), universalOptions)
      t_15.template = '__react_static_root__/src/Community'
      
const t_16 = universal(import('__react_static_root__/src/Community/FinLit'), universalOptions)
      t_16.template = '__react_static_root__/src/Community/FinLit'
      
const t_17 = universal(import('__react_static_root__/src/Blog/Post'), universalOptions)
      t_17.template = '__react_static_root__/src/Blog/Post'
      
const t_18 = universal(import('__react_static_root__/src/Blog'), universalOptions)
      t_18.template = '__react_static_root__/src/Blog'
      
const t_19 = universal(import('__react_static_root__/src/Events/Event'), universalOptions)
      t_19.template = '__react_static_root__/src/Events/Event'
      
const t_20 = universal(import('__react_static_root__/src/Events'), universalOptions)
      t_20.template = '__react_static_root__/src/Events'
      

// Template Map
export default {
  '__react_static_root__/src/pages/404.jsx': t_0,
'__react_static_root__/src/Home': t_1,
'__react_static_root__/src/Contact': t_2,
'__react_static_root__/src/About': t_3,
'__react_static_root__/src/About/Approach': t_4,
'__react_static_root__/src/About/Team': t_5,
'__react_static_root__/src/About/Supporters': t_6,
'__react_static_root__/src/About/Opportunities': t_7,
'__react_static_root__/src/About/Statements': t_8,
'__react_static_root__/src/Family': t_9,
'__react_static_root__/src/Family/Outreach': t_10,
'__react_static_root__/src/Family/FLC': t_11,
'__react_static_root__/src/Family/Resources': t_12,
'__react_static_root__/src/Family/Imagine': t_13,
'__react_static_root__/src/Community/Initiative': t_14,
'__react_static_root__/src/Community': t_15,
'__react_static_root__/src/Community/FinLit': t_16,
'__react_static_root__/src/Blog/Post': t_17,
'__react_static_root__/src/Blog': t_18,
'__react_static_root__/src/Events/Event': t_19,
'__react_static_root__/src/Events': t_20
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/pages/404.jsx"

