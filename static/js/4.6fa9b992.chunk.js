(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[4],{1342:function(e,t){},1343:function(e,t){},1366:function(e,t,a){"use strict";a.r(t);var n=a(253),r=a(158),l=a(1301),c=a(610),o=a(0),s=a.n(o),i=a(6),u=a(98),m=a(157),p=(a(1342),a(1333)),d=a(1303),f=a(1256),b=a(1257),g=a(217),h=a(1311),E=a(218),v=(a(75),a(71)),x=a(118),O=a.n(x),P="[CONTACTS APP] GET USER DATA";var j="[CONTACTS APP] GET CONTACTS",y="[CONTACTS APP] SET SEARCH TEXT";var N=function(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e.contactsApp.contacts.searchText})),r=Object(i.c)((function(e){return e.fuse.settings.mainTheme}));return s.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},s.a.createElement("div",{className:"flex flex-shrink items-center sm:w-224"},s.a.createElement(p.a,{lgUp:!0},s.a.createElement(f.a,{onClick:function(t){e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},s.a.createElement(d.a,null,"menu"))),s.a.createElement("div",{className:"flex items-center"},s.a.createElement(n.a,{animation:"transition.expandIn",delay:300},s.a.createElement(d.a,{className:"text-32"},"account_box")),s.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:300},s.a.createElement(E.a,{variant:"h6",className:"mx-12 hidden sm:flex"},"Contactos")))),s.a.createElement("div",{className:"flex flex-1 items-center justify-center px-8 sm:px-12"},s.a.createElement(h.a,{theme:r},s.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:300},s.a.createElement(g.a,{className:"flex p-4 items-center w-full max-w-512 h-48 px-8 py-4",elevation:1},s.a.createElement(d.a,{color:"action"},"search"),s.a.createElement(b.a,{placeholder:"Buscar",className:"flex flex-1 px-16",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return t({type:y,searchText:e.target.value})}}))))))},w=a(19),C=a(22),T=(a(1343),a(14)),S=a(200),A=a(1334),R=a(1360),k=a(1364),H=a(1363),I=a(1359),L=a(1365),B=a(1361),D=a(1368),G=a(1362),M=a(1367),U=a(1344),F=a(2),z=a(1348),J=a.n(z),W=a(1350),X=a.n(W),_=a(1349),q=a.n(_),K=a(1347),Q=a.n(K),V=a(41),Y=function(e){var t=Object(V.a)(),a=e.count,n=e.page,r=e.rowsPerPage,l=e.onChangePage;return s.a.createElement("div",{className:"flex-shrink-0 px-12 overflow-hidden"},s.a.createElement(f.a,{onClick:function(e){l(e,0)},disabled:0===n,"aria-label":"first page"},"rtl"===t.direction?s.a.createElement(Q.a,null):s.a.createElement(J.a,null)),s.a.createElement(f.a,{onClick:function(e){l(e,n-1)},disabled:0===n,"aria-label":"previous page"},"rtl"===t.direction?s.a.createElement(q.a,null):s.a.createElement(X.a,null)),s.a.createElement(f.a,{onClick:function(e){l(e,n+1)},disabled:n>=Math.ceil(a/r)-1,"aria-label":"next page"},"rtl"===t.direction?s.a.createElement(X.a,null):s.a.createElement(q.a,null)),s.a.createElement(f.a,{onClick:function(e){l(e,Math.max(0,Math.ceil(a/r)-1))},disabled:n>=Math.ceil(a/r)-1,"aria-label":"last page"},"rtl"===t.direction?s.a.createElement(J.a,null):s.a.createElement(Q.a,null)))},Z=s.a.forwardRef((function(e,t){var a=e.indeterminate,n=Object(S.a)(e,["indeterminate"]),r=s.a.useRef(),l=t||r;return s.a.useEffect((function(){l.current.indeterminate=a}),[l,a]),s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a,Object.assign({ref:l},n)))})),$=function(e){var t=e.columns,a=e.data,n=(e.onRowClick,Object(U.useTable)({columns:t,data:a,autoResetPage:!0},U.useGlobalFilter,U.useSortBy,U.usePagination,U.useRowSelect,(function(e){e.allColumns.push((function(e){return[{id:"selection",sortable:!1,Header:function(e){var t=e.getToggleAllRowsSelectedProps;return s.a.createElement("div",null,s.a.createElement(Z,t()))},Cell:function(e){var t=e.row;return s.a.createElement("div",null,s.a.createElement(Z,Object.assign({},t.getToggleRowSelectedProps(),{onClick:function(e){return e.stopPropagation()}})))}}].concat(Object(T.a)(e))}))}))),r=n.getTableProps,l=n.headerGroups,c=n.prepareRow,o=n.page,i=n.gotoPage,u=n.setPageSize,m=n.state,p=m.pageIndex,d=m.pageSize;return s.a.createElement(I.a,{className:"min-h-full sm:border-1 sm:rounded-16"},s.a.createElement(R.a,r(),s.a.createElement(B.a,null,l.map((function(e){return s.a.createElement(G.a,e.getHeaderGroupProps(),e.headers.map((function(e){return s.a.createElement(H.a,Object.assign({className:"whitespace-no-wrap p-12"},e.sortable?e.getHeaderProps(e.getSortByToggleProps()):e.getHeaderProps()),e.render("Header"),e.sortable?s.a.createElement(M.a,{active:e.isSorted,direction:e.isSortedDesc?"desc":"asc"}):null)})))}))),s.a.createElement(k.a,null,o.map((function(e,t){return c(e),s.a.createElement(G.a,Object.assign({},e.getRowProps(),{className:"truncate cursor-pointer"}),e.cells.map((function(e){return s.a.createElement(H.a,Object.assign({},e.getCellProps(),{className:Object(F.a)("p-12",e.column.className)}),e.render("Cell"))})))}))),s.a.createElement(L.a,null,s.a.createElement(G.a,null,s.a.createElement(D.a,{classes:{root:"overflow-hidden",spacer:"w-0 max-w-0"},rowsPerPageOptions:[5,10,25,{label:"All",value:a.length+1}],colSpan:5,count:a.length,rowsPerPage:d,page:p,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!1},onChangePage:function(e,t){i(t)},onChangeRowsPerPage:function(e){u(Number(e.target.value))},ActionsComponent:Y})))))};var ee=function(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e.contactsApp.contacts.entities})),r=Object(i.c)((function(e){return e.contactsApp.contacts.searchText})),l=Object(i.c)((function(e){return e.contactsApp.user})),c=Object(o.useState)(null),u=Object(w.a)(c,2),m=u[0],p=u[1],d=s.a.useMemo((function(){return[{Header:"Nombre",accessor:"firstName",className:"font-bold",sortable:!0},{Header:"Apellido",accessor:"lastName",className:"font-bold",sortable:!0},{Header:"Correo",accessor:"emailAddress",sortable:!0},{Header:"Pais",accessor:"country",sortable:!0},{Header:"Telefono",accessor:"phoneNumber",sortable:!0},{Header:"Fecha Nacimiento",accessor:"birthDate",sortable:!0}]}),[t,l.starred]);return Object(o.useEffect)((function(){a&&p(function(e,t){var a=Object.keys(e).map((function(t){return e[t]}));return 0===t.length?a:C.a.filterArrayByString(a,t)}(a,r))}),[a,r]),m?0===m.length?s.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},s.a.createElement(E.a,{color:"textSecondary",variant:"h5"},"No hay contactos")):s.a.createElement(n.a,{animation:"transition.slideUpIn",delay:300},s.a.createElement($,{columns:d,data:m})):null},te=a(107),ae=a(1322),ne=a(1306),re=a(1259),le=a(1317),ce=Object(l.a)((function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:"".concat(e.palette.secondary.contrastText,"!important"),pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{marginRight:16}}}}));var oe=function(e){Object(i.b)();var t=ce(e),a=Object(i.c)((function(e){return e.contactsApp.user}));if(!a)return null;var r=Object.values(a);return r?s.a.createElement("div",{className:"p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4"},s.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:200},s.a.createElement(g.a,{className:"rounded-0 shadow-none lg:rounded-8 lg:shadow-1"},a.length>0&&s.a.createElement("div",{className:"p-24 flex items-center"},"Lista de Archivos"),s.a.createElement(ae.a,null),s.a.createElement(ne.a,null,r.map((function(e){return s.a.createElement(re.a,{key:e.id,button:!0,component:te.a,to:"/apps/contacts/"+e.id,activeClassName:"active",className:t.listItem},s.a.createElement(le.a,{className:"truncate",primary:e.descripcion,disableTypography:!0}))})))))):null},se=a(69),ie=a(9),ue=a(7),me={entities:null,searchText:"",routeParams:{},contactDialog:{type:"new",props:{open:!1},data:null}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(ie.a)({},e,{entities:ue.a.keyBy(t.payload,"id"),routeParams:t.routeParams});case y:return Object(ie.a)({},e,{searchText:t.searchText});default:return e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return t.payload;default:return e}},fe=Object(se.d)({contacts:pe,user:de}),be=Object(l.a)({addButton:{position:"absolute",right:12,bottom:12,zIndex:99}});t.default=Object(c.a)("contactsApp",fe)((function(e){var t=Object(i.b)(),a=(be(e),Object(o.useRef)(null)),n=Object(u.h)();return Object(m.b)((function(){t(function(e){var t=v.a.getSpreadData(e.id);return function(a){return t.then((function(t){return a({type:j,payload:t,routeParams:e})}))}}(n)),t(function(){var e=O.a.auth().currentUser,t=v.a.getArchivos(e.email);return function(e){return t.then((function(t){return e({type:P,payload:t})}))}}())}),[t,n]),s.a.createElement(s.a.Fragment,null,s.a.createElement(r.a,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136",wrapper:"min-h-0"},header:s.a.createElement(N,{pageLayout:a}),content:s.a.createElement(ee,null),leftSidebarContent:s.a.createElement(oe,null),sidebarInner:!0,ref:a,innerScroll:!0}))}))}}]);