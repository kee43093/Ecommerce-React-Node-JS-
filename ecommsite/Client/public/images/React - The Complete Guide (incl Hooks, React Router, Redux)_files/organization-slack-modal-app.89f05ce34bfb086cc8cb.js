(window.webpackJsonp=window.webpackJsonp||[]).push([["organization-slack-modal-app"],{"./src/udemy/js/organization-slack-modal/app.js":function(e,o,t){"use strict";t.r(o);var s,n,a,r=t("./node_modules/lodash-es/isEmpty.js"),i=t("./node_modules/mobx-react/index.module.js"),c=t("./node_modules/prop-types/index.js"),l=t.n(c),u=t("./node_modules/qs/lib/index.js"),d=t.n(u),p=t("./node_modules/react/index.js"),m=t.n(p),h=t("./src/udemy/js/organization-common/course-context-menu/menu-items/share-to-slack-menu-item-store.mobx-store.js"),w=t("./src/udemy/js/organization-common/ufb-social-share/share-on-slack-modal.react-component.js"),b=t("./src/udemy/js/utils/ud-render-react-components.js"),y={SLACK_SHARE:"slack_share",COURSE_ID:"course_id",CONTEXT:"context"};t.d(o,"App",function(){return k}),t.d(o,"default",function(){return j});var k=Object(i.d)((a=n=function(e){function t(e){var o;return babelHelpers.classCallCheck(this,t),(o=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(t).call(this,e))).initStoreFromQueryParams(),o}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){this.store&&this.store.shareCourse()}},{key:"initStoreFromQueryParams",value:function(){var e=d.a.parse(this.props.window.location.search,{ignoreQueryPrefix:!0}),o=e[y.SLACK_SHARE],t=e[y.COURSE_ID],s=e[y.CONTEXT];[o,t,s].every(Boolean)&&(t=parseInt(t,10),this.store=new h.a(t,s,this.props.window),this.cleanQueryParams(e))}},{key:"cleanQueryParams",value:function(e){delete e[y.CONTEXT],delete e[y.COURSE_ID],delete e[y.SLACK_SHARE],Object(r.a)(e)?window.history.replaceState({},null,this.props.window.location.pathname):window.history.replaceState({},null,"".concat(this.props.window.location.pathname,"?").concat(d.a.stringify(e)))}},{key:"render",value:function(){return this.store?m.a.createElement(w.a,{show:this.store.isModalShown,onHide:this.store.hideModal,onSubmit:this.store.hideModal,courseId:this.store.courseId,context:this.store.context,shareData:this.store.shareData,teamName:this.store.slackTeamName,checkSlackAuthentication:this.store.checkSlackAuthentication}):null}}]),t}(p.Component),n.propTypes={window:l.a.object},n.defaultProps={window:window},s=a))||s;function j(e,o){Object(b.a)(e,".ud-component--organization-slack-modal--app",k,o)}}}]);