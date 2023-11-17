"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3503],{83503:function(e,t,a){a.d(t,{FB:function(){return ez},ZP:function(){return eF},wS:function(){return eU}});var n,s,i,r,o=a(22830),c=a(35250),l=a(88798),d=a(32877),u=a(21739),p=a(32542),g=a(77010),m=a(70079),f=a(37469),h=a(78931);(n=i||(i={})).Personal="chat",n.Workspace="workspace";var x=a(61888),v=a(70671),y=a(94968),b=a(95137),k=a(21722),w=a(39324),j=a(71209),M=a(38104),C=a(12155),_=a(60554),S=a(1454),T=a(32004),N=a(79579),B=a(89368),Z=a(1821);function A(){var e=(0,b.Go)(),t=(0,_.useRouter)(),a=(0,v.Z)(),n=(0,o._)((0,m.useState)(),2),s=n[0],i=n[1],r=null!==e;if((0,m.useEffect)(function(){r||i(void 0)},[r]),!r)return null;var l=(0,c.jsx)("span",{className:"font-medium",children:e.ownerEmail}),d=e.hasActiveRequest||"success"===s;return(0,c.jsx)(B.Z,{isOpen:!0,onClose:x.noop,type:"warning",size:"custom",className:"max-w-3xl",title:(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)("div",{className:"text-lg",children:(0,c.jsx)(T.Z,(0,j._)((0,w._)({},P.title),{values:{workspaceName:e.accountName}}))}),(0,c.jsx)("div",{className:"text-sm font-normal",children:(0,c.jsx)(T.Z,(0,w._)({},P.subtitle))})]}),icon:S.UIZ,primaryButton:(0,c.jsx)(N.ZP.Button,{onClick:(0,k._)(function(){return(0,M.Jh)(this,function(t){switch(t.label){case 0:i("requesting"),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,b.ZP.requestWorkspaceAccess(e.accountId)];case 2:return t.sent().success&&i("success"),[3,4];case 3:return t.sent(),i("error"),[3,4];case 4:return[2]}})}),color:"primary",title:a.formatMessage(P.requestAccessButton),disabled:d}),secondaryButton:(0,c.jsx)(N.ZP.Button,{onClick:(0,k._)(function(){var e;return(0,M.Jh)(this,function(a){switch(a.label){case 0:return[4,(0,C.signOut)({redirect:!1,callbackUrl:"/auth/login?next=".concat(encodeURIComponent(t.asPath))})];case 1:return e=a.sent(),t.push(e.url),[2]}})}),color:"neutral",title:a.formatMessage(P.signOutButton)}),children:(0,c.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,c.jsx)("div",{children:(0,c.jsx)(T.Z,(0,j._)((0,w._)({},P.emailBelongsToWorkspace),{values:{email:(0,c.jsx)("span",{className:"font-medium",children:e.userEmail})}}))}),(0,c.jsx)("div",{children:d?(0,c.jsx)(T.Z,(0,j._)((0,w._)({},P.activeRequestMessage),{values:{email:l}})):"requesting"===s?(0,c.jsx)(Z.Z,{}):"error"===s?(0,c.jsx)(T.Z,(0,j._)((0,w._)({},P.contactWorkspaceAdminEmail),{values:{email:l}})):null})]})})}var P={title:{id:"RequestWorkspaceAccessModal.title",defaultMessage:"Request access to {workspaceName}",description:"Title for request access modal for a workspace"},subtitle:{id:"RequestWorkspaceAccessModal.subtitle",defaultMessage:"ChatGPT Enterprise has been enabled in your workspace",description:"Subtitle for request access modal mentioning ChatGPT Enterprise"},emailBelongsToWorkspace:{id:"RequestWorkspaceAccessModal.emailBelongsToWorkspace",defaultMessage:"{email} belongs to a ChatGPT Enterprise plan but currently has no access.",description:"Message shown telling the user their email is part of an enterprise workspace."},requestWorkspaceAccessMessage:{id:"RequestWorkspaceAccessModal.requestWorkspaceAccessMessage",defaultMessage:"You may request access to the workspace account.",description:"Message telling the user to request access to the workspace."},requestedWorkspaceAccessMessage:{id:"RequestWorkspaceAccessModal.requestedWorkspaceAccessMessage",defaultMessage:"Successfully requested access to the workspace account. Your workspace administrator at {email} may approve the request.",description:"Message telling the user they have requested access to the workspace."},contactWorkspaceAdminEmail:{id:"RequestWorkspaceAccessModal.contactWorkspaceAdminEmail",defaultMessage:"Could not request access. Contact your workspace administrator at {email} to request access to a new workspace account.",description:"Message telling the user who to contact to create a new account for the workspace."},signOutButton:{id:"RequestWorkspaceAccessModal.signOutButton",defaultMessage:"Sign Out",description:"Label for sign out button on modal"},requestAccessButton:{id:"RequestWorkspaceAccessModal.requestAccessButton",defaultMessage:"Request access",description:"Label for request access button on modal"},activeRequestMessage:{id:"RequestWorkspaceAccessModal.activeRequestMessage",defaultMessage:"You have a pending invite request for this workspace. Contact your workspace administrator at {email} to approve your request.",description:"Message telling the user they have an active request for the workspace."}},D=a(75641),E=a(88809),I=a(25260),W=a(62509),V=a(19841),O=a(91530),q=a.n(O),L=a(19579),R=a.n(L),G=a(6038),z=a(32367),U=a(52696);function F(e){var t=e.workspace,a=(0,W.kP)().session,n=(0,h.ec)(function(e){return e.currentWorkspace}),s=(null==n?void 0:n.id)===t.id,i=(0,o._)((0,m.useState)(!1),2),r=i[0],l=i[1],d=(0,z.Z)().onEnableHistory,u=(0,m.useCallback)((0,k._)(function(){return(0,M.Jh)(this,function(e){return l(!0),h.w_.setCurrentWorkspace(t),d(),(0,E.M)(),[2]})}),[t,d]),p=(0,U.GA)(t),g=(0,c.jsx)("div",{className:"flex items-center justify-center",children:(0,c.jsx)(G.B0,{})});if(t.structure===D.CZ.PERSONAL){if(!(null==a?void 0:a.user))return null;g=(0,c.jsx)("div",{className:"flex items-center justify-center",children:(0,c.jsx)(R(),{alt:"Profile",src:a.user.picture,width:38,height:38,className:"flex items-center justify-center rounded-sm"})})}return(0,c.jsxs)(s?"div":"button",{onClick:s?q():u,className:(0,V.default)({"flex w-full items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 p-4 hover:bg-gray-100 focus:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700":!0,"bg-gray-50 dark:bg-gray-800":s}),children:[(0,c.jsxs)("div",{className:"flex w-full items-center gap-4",children:[g,(0,c.jsx)("div",{className:"inline align-top font-medium",children:p})]}),(0,c.jsx)("div",{className:"flex h-full items-center p-1",children:r?(0,c.jsx)(Z.Z,{}):s?(0,c.jsx)(I.Z,{className:"icon-lg"}):(0,c.jsx)(S.Tfp,{className:"icon-lg my-auto"})})]})}function H(e){var t=e.data.map(function(e){return(0,c.jsx)(F,{workspace:e},e.id)});return(0,c.jsx)("div",{className:"flex w-full flex-col gap-2",children:t})}function Q(){var e,t,a=(0,U._O)(),n=(0,W.kP)().session,s=null!==(t=null==n?void 0:null===(e=n.user)||void 0===e?void 0:e.email)&&void 0!==t?t:"";if(0===a.length)return null;var i=a.filter(function(e){return e.structure===D.CZ.WORKSPACE});return(0,c.jsx)(B.Z,{isOpen:!0,onClose:q(),type:"success",size:"normal",title:(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)(T.Z,(0,w._)({},Y.workspaceSwitcherTitle)),(0,c.jsx)("span",{className:"mt-0.5 text-sm text-gray-700 dark:text-gray-400",children:s})]}),children:(0,c.jsxs)("div",{className:"flex w-full flex-col items-center justify-between",children:[(0,c.jsx)(H,{data:a}),(0,c.jsx)("span",{className:"mt-4 text-sm text-gray-700 dark:text-gray-400",children:(0,c.jsx)(T.Z,(0,j._)((0,w._)({},Y.workspaceSwitcherDisclaimer),{values:{workspaces:(0,c.jsx)("span",{className:"contents font-bold",children:(0,c.jsx)(y.yX,{value:i.map(function(e){return e.name})})}),numWorkspaces:i.length}}))})]})})}var Y=(0,y.vU)({workspaceSwitcherTitle:{id:"workspaceSwitcher.title",defaultMessage:"Select a workspace",description:"title for account switcher modal"},workspaceSwitcherDisclaimer:{id:"workspaceSwitcher.disclaimer",defaultMessage:"You've been added to the {workspaces} {numWorkspaces, plural, one {workspace} other {workspaces}}. You can switch between workspaces at any time.",description:"disclaimer for account switcher modal"}}),$=a(46020),J=a(80474),K=a(49972),X=a(73426),ee=a(37952),et=a(16920),ea=a(67273);function en(e){var t=e.children;return(0,c.jsxs)(J.zt,{children:[(0,c.jsx)(J.fC,{className:"radix-state-closed:animate-hide radix-state-open:animate-slideIn grid grid-cols-[auto_max-content] items-center gap-x-4 rounded-lg bg-white p-4 shadow-xs [grid-template-areas:_'title_action'_'description_action'] dark:bg-gray-950 sm:max-w-2xl",open:!0,children:t}),(0,c.jsx)(J.l_,{className:"fixed bottom-0 right-0 z-50 m-0 flex max-w-[100vw] list-none flex-col gap-4 p-6 outline-none"})]})}function es(e){var t=e.onClose,a=e.ageVerificationDeadline;return(0,m.useEffect)(function(){et.m9.logEvent("chatgpt_compliance_age_verification_seen"),K.A.logEvent(X.M.complianceAgeVerificationSeen)},[]),(0,c.jsxs)(en,{children:[(0,c.jsx)(J.Dx,{className:"text-sm font-medium [grid-area:_title]",children:(0,c.jsx)(T.Z,(0,j._)((0,w._)({},ei.ageVerificationTitle),{values:{deadline:null!=a?Math.floor(a/60/60/24):0,learnMoreLink:function(e){return(0,c.jsx)("a",{href:"https://help.openai.com/en/articles/8411987-why-am-i-being-asked-to-verify-my-age",target:"_blank",rel:"noreferrer",className:"cursor-pointer font-normal underline",children:e})}}}))}),(0,c.jsx)(J.aU,{altText:"Dismiss notification",asChild:!0,children:(0,c.jsx)(ea.z,{color:"primary",size:"small",onClick:function(){et.m9.logEvent("chatgpt_compliance_age_verification_clicked"),K.A.logEvent(X.M.complianceAgeVerificationClicked),ee.b.setCookie(ee.c.AgeVerification,"true",{maxAge:86400,path:"/"}),t(),$.vm.openModal($.B.AgeVerificationInterstitial)},children:(0,c.jsx)(T.Z,(0,w._)({},ei.startVerification))})}),(0,c.jsx)(J.x8,{})]})}var ei=(0,y.vU)({ageVerificationTitle:{id:"ageVerificationBanner.title-v1",defaultMessage:"Please verify your age in the next {deadline, plural, =0 {# days} one {# day} other {# days}}. We are required to check if you're old enough to use ChatGPT. <learnMoreLink>Learn more</learnMoreLink>.",description:"Explanation of why ChatGPT needs to verify age"},dismiss:{id:"ageVerificationBanner.dismiss",defaultMessage:"Dismiss",description:"Dismiss/close age verification ui Banner"},startVerification:{id:"ageVerificationBanner.startVerification",defaultMessage:"Start verification",description:"Start age verification process button"}}),er=a(4337),eo=a(21389),ec=a(12346),el=a(22427);function ed(){var e=(0,er._)(["underline font-normal"]);return ed=function(){return e},e}function eu(e){var t=e.onClose,a=e.canManageBrowserStorage,n=(0,v.Z)(),s=(0,ec.Fr)().openSettings,i=(0,el.Y3)(),r=(0,el.T$)({enabled:!!a,select:function(e){return!e.cookie_consent.is_required}}),o=r.data,d=r.isLoading;return((0,m.useEffect)(function(){!0===o&&t()},[o,t]),d)?null:(0,c.jsxs)(en,{children:[(0,c.jsx)(J.Dx,{className:"text-sm font-medium [grid-area:_title]",children:(0,c.jsx)(T.Z,(0,j._)((0,w._)({},eg.cookieConsentBannerTitle),{values:{privacyPolicyLink:function(e){return(0,c.jsx)(ep,{href:"https://openai.com/policies/privacy-policy",target:"_blank",rel:"noreferrer",children:e})},learnMoreLink:function(e){return(0,c.jsx)(ep,{href:"https://help.openai.com/articles/8077698-how-do-i-use-chatgpt-browse-with-bing-to-search-the-web",target:"_blank",rel:"noreferrer",children:e})},settingsPanel:function(e){return(0,c.jsx)(ep,{$as:"button",onClick:function(){s(ec.u5.DataControls)},children:e})}}}))}),(0,c.jsxs)("div",{className:"flex gap-3",children:[(0,c.jsx)(ea.z,{color:"neutral",size:"small",onClick:function(){i.mutateAsync({analytics_cookies_accepted:!1},{onSuccess:function(){l.m.success(n.formatMessage(eg.updateSuccess))},onError:function(){l.m.danger(n.formatMessage(eg.updateFailure))}}),t()},children:(0,c.jsx)(T.Z,(0,w._)({},eg.reject))}),(0,c.jsx)(ea.z,{color:"neutral",size:"small",onClick:function(){i.mutateAsync({analytics_cookies_accepted:!0},{onSuccess:function(){l.m.success(n.formatMessage(eg.updateSuccess))},onError:function(){l.m.danger(n.formatMessage(eg.updateFailure))}}),t()},children:(0,c.jsx)(T.Z,(0,w._)({},eg.accept))})]}),(0,c.jsx)(J.x8,{})]})}var ep=eo.Z.a(ed()),eg=(0,y.vU)({cookieConsentBannerTitle:{id:"CookieConsentBanner.title",defaultMessage:"We use cookies to provide, improve, and protect our services. Visit our <privacyPolicyLink>privacy policy</privacyPolicyLink> to learn more. You can manage your cookie preferences in your <settingsPanel>settings panel</settingsPanel>. <learnMoreLink>Learn more</learnMoreLink>.",description:"Explanation of why ChatGPT needs to verify age"},reject:{id:"CookieConsentBanner.reject",defaultMessage:"Reject all",description:"Reject analytics cookies button"},accept:{id:"CookieConsentBanner.accept",defaultMessage:"Accept all",description:"Consent to analytics cookies button"},updateSuccess:{id:"CookieConsentBanner.updateSuccess",defaultMessage:"Your cookie preferences were updated successfully",description:"Success toast message for updating cookie preferences"},updateFailure:{id:"CookieConsentBanner.updateFailure",defaultMessage:"Unable to update cookie preferences. Try again later.",description:"Failure toast message for updating cookie preferences"}}),em=a(77311),ef=a(6948),eh=a(88327),ex=function(e,t){var a=(0,m.useCallback)(function(){ef.m.setItem(ef.F.Onboarding,new Date().toLocaleDateString("en-CA",{year:"numeric",month:"2-digit",day:"2-digit"}),{workspaceId:null!=t?t:void 0,workspaceScope:e})},[e,t]),n=(0,o._)((0,m.useState)(null),2),s=n[0],i=n[1];(0,m.useEffect)(function(){var a=ef.m.getItem(ef.F.Onboarding,{workspaceScope:e});a||(a=ef.m.getItem(ef.F.Onboarding,{workspaceId:null!=t?t:void 0,workspaceScope:e})),i(!!a&&a)},[e,t]);var r=(0,m.useCallback)(function(){return s?new Date(!0===s?"2022-12-14":s):s},[s]);return(0,m.useMemo)(function(){return{setHasSeenOnboarding:a,getHasSeenOnboardingDate:r}},[r,a])};function ev(e){var t=e.onClose,a=e.scope,n=(0,h.ec)(h.F_.workspaceId),s=ex(a,a===i.Workspace?n:void 0).setHasSeenOnboarding,r=(0,m.useCallback)(function(){t(!0),s()},[t,s]);return a===i.Personal?(0,c.jsx)(eb,{onSubmit:r}):(0,c.jsx)(ek,{onSubmit:r})}var ey=function(e){var t=e.icon,a=e.title,n=e.body;return(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"flex flex-row items-center gap-1.5",children:[(0,c.jsx)("div",{children:t}),(0,c.jsx)("div",{className:"font-medium text-token-text-primary",children:a})]}),(0,c.jsx)("div",{className:"text-sm text-token-text-secondary",children:n})]})},eb=function(e){var t=e.onSubmit,a=(0,v.Z)();return(0,c.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,c.jsx)(ey,{icon:(0,c.jsx)(eh.wP,{isSolid:!0,className:"h-5 w-5 text-green-600"}),title:(0,c.jsx)(T.Z,(0,w._)({},ew.askAway)),body:(0,c.jsx)(T.Z,(0,w._)({},ew.askAwayBody))}),(0,c.jsx)(ey,{icon:(0,c.jsx)(eh.NJ,{className:"text-brand-purple"}),title:(0,c.jsx)(T.Z,(0,w._)({},ew.warning)),body:(0,c.jsx)(T.Z,(0,j._)((0,w._)({},ew.warningBody),{values:{article:function(e){return(0,c.jsx)("a",{href:"https://help.openai.com/en/articles/7039943-data-usage-for-consumer-services-faq",target:"_blank",className:"underline",rel:"noopener noreferrer",children:e})}}}))}),(0,c.jsx)(ey,{icon:(0,c.jsx)(eh.CJ,{className:"text-orange-300"}),title:(0,c.jsx)(T.Z,(0,w._)({},ew.accuracy)),body:(0,c.jsx)(T.Z,(0,w._)({},ew.accuracyBody))}),(0,c.jsx)("div",{className:"flex flex-row justify-end",children:(0,c.jsx)(N.mH,{title:a.formatMessage(ew.gettingStartedButton),onClick:t,color:"primary"})})]})},ek=function(e){var t=e.onSubmit,a=(0,v.Z)(),n=(0,h.ec)(function(e){return e.currentWorkspace}),s=null==n?void 0:n.name;return(0,c.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"font-medium text-token-text-primary",children:null!=s?(0,c.jsx)(T.Z,(0,w._)({values:{workspaceName:s}},ew.workspaceWelcome)):(0,c.jsx)(T.Z,(0,w._)({},ew.workspaceWelcomeNoName))}),(0,c.jsx)("div",{className:"text-sm text-token-text-secondary",children:(0,c.jsx)(T.Z,(0,w._)({},ew.workspaceWelcomeBody))})]}),(0,c.jsx)(ey,{icon:(0,c.jsx)(em.Z,{className:"icon-md text-brand-purple"}),title:(0,c.jsx)(T.Z,(0,w._)({},ew.workUse)),body:(0,c.jsx)(T.Z,(0,w._)({},ew.workUseBody))}),(0,c.jsx)(ey,{icon:(0,c.jsx)(eh.wP,{isSolid:!0,className:"h-5 w-5 text-green-600"}),title:(0,c.jsx)(T.Z,(0,w._)({},ew.askAway)),body:(0,c.jsx)(T.Z,(0,w._)({},ew.askAwayBody))}),(0,c.jsx)(ey,{icon:(0,c.jsx)(eh.CJ,{className:"text-orange-300"}),title:(0,c.jsx)(T.Z,(0,w._)({},ew.accuracy)),body:(0,c.jsx)(T.Z,(0,w._)({},ew.accuracyBody))}),(0,c.jsx)("div",{className:"flex flex-row justify-end",children:(0,c.jsx)(N.mH,{title:a.formatMessage(ew.gettingStartedButton),onClick:t,color:"primary"})})]})},ew=(0,y.vU)({askAway:{id:"onboarding.askAway",defaultMessage:"Ask away",description:"Title for the tip about what ChatGPT can do"},askAwayBody:{id:"onboarding.askAwayBody",defaultMessage:"ChatGPT can answer questions, help you learn, write code, brainstorm together, and much more.",description:"Body copy for the tip about what ChatGPT can do"},warning:{id:"onboarding.warning",defaultMessage:"Don’t share sensitive info",description:"Title for the warning about ChatGPT traning"},warningBody:{id:"onboarding.warningBody",defaultMessage:"Chat history may be reviewed or used to improve our services. Learn more about your choices in our <article>Help Center</article>.",description:"Body copy for the warning about ChatGPT traning"},accuracy:{id:"onboarding.accuracy",defaultMessage:"Check your facts",description:"Title for the warning about ChatGPT inaccuracy"},accuracyBody:{id:"onboarding.accuracyBody",defaultMessage:"While we have safeguards, ChatGPT may give you inaccurate information. It’s not intended to give advice.",description:"Body copy for the warning about ChatGPT inaccuracy"},gettingStartedButton:{id:"onboarding.gettingStartedButton",defaultMessage:"Okay, let’s go",description:"Button to accept the getting started modal"},workspaceWelcome:{id:"onboarding.workspaceWelcome",defaultMessage:"Welcome to the {workspaceName} Workspace",description:"Introduction welcome for workspace onboarding"},workspaceWelcomeNoName:{id:"onboarding.workspaceWelcomeNoName",defaultMessage:"Welcome to the your Workspace",description:"Introduction welcome for workspace onboarding when no Workspace name is available"},workspaceWelcomeBody:{id:"onboarding.workspaceWelcomeBody",defaultMessage:"Here you can use our latest models, with more capabilities, and fewer limits.",description:"Introduction welcome body for workspace onboarding"},workUse:{id:"onboarding.workUse",defaultMessage:"Made for use at work",description:"Title for the warning about ChatGPT business workspace use"},workUseBody:{id:"onboarding.workUseBody",defaultMessage:"By default, chats in this workspace are not used to train our AI models.",description:"Body copy for the warning about ChatGPT business workspace use"}}),ej=a(81949),eM=a(77997),eC=function(e){var t=e.onContinue,a=(0,v.Z)();return(0,c.jsx)(B.Z,{isOpen:!0,onClose:x.noop,type:"success",title:a.formatMessage(eB.chatgptTitle),description:a.formatMessage(eB.chatgptEnterpriseDescription),children:(0,c.jsx)(ev,{onClose:function(){t()},scope:i.Workspace})})},e_=function(e){var t=e.onContinue,a=e.onSkip,n=(0,v.Z)();return(0,c.jsx)(B.Z,{isOpen:!0,onClose:x.noop,type:"success",title:n.formatMessage(eB.primaryRoleTitle),description:n.formatMessage(eB.tailorChatGPT),size:"custom",className:"max-w-lg",children:(0,c.jsx)(eT,{options:eP,onSkip:a,onSubmit:t})})},eS=function(e){var t=e.onContinue,a=e.onSkip,n=(0,v.Z)();return(0,c.jsx)(B.Z,{isOpen:!0,onClose:x.noop,type:"success",title:n.formatMessage(eB.workTypeTitle),description:n.formatMessage(eB.tailorChatGPT),size:"custom",className:"max-w-lg",children:(0,c.jsx)(eT,{options:eD,onSkip:a,onSubmit:t,multiSelect:!0})})};function eT(e){var t=e.options,a=e.onSkip,n=void 0===a?x.noop:a,s=e.onSubmit,i=void 0===s?x.noop:s,r=e.multiSelect,l=void 0!==r&&r,d=function(e,t){var a=e.indexOf(t);return -1===a?(0,ej._)(e).concat([t]):(0,ej._)(e.slice(0,a)).concat((0,ej._)(e.slice(a+1)))},u="dark"===(0,eM.F)().resolvedTheme,p=(0,v.Z)(),g=(0,o._)((0,m.useState)([]),2),f=g[0],h=g[1],y=(0,m.useCallback)(function(e){var t,a=null!==(t=e.currentTarget.dataset.value)&&void 0!==t?t:"";l?h(d(f,a)):i(a)},[i,f,h,l]);return(0,c.jsxs)("div",{children:[l&&(0,c.jsx)("p",{className:"mx-2 text-sm text-gray-400",children:p.formatMessage(eB.selectAll)}),(0,c.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,c.jsx)("div",{className:"flex-wrap space-y-4",children:t.map(function(e){return(0,c.jsx)(ea.z,{onClick:y,color:f.includes(e.id)?u?"light":"dark":"neutral",size:"medium",className:"mx-2 ".concat(f.includes(e.id)?"hover:bg-gray-200":"hover:bg-gray-100"),"data-value":e.id,children:(0,c.jsx)(T.Z,(0,w._)({},e.displayValue))},e.id)})})}),(0,c.jsxs)("div",{className:"mt-4 flex flex-row justify-end",children:[(0,c.jsx)(N.mH,{title:p.formatMessage(eB.skipButton),onClick:n}),l&&(0,c.jsx)(N.mH,{title:p.formatMessage(eB.continueButton),onClick:function(){i(f)},disabled:0===f.length,color:"primary",className:"ml-4"})]})]})}function eN(e){var t=e.onClose,a=(0,o._)((0,m.useState)(0),2),n=a[0],s=a[1],i=(0,o._)((0,m.useState)({role:void 0,departments:void 0}),2),l=i[0],d=i[1],u=(0,h.ec)(h.F_.workspaceId),p=(0,W.kP)().session.user.id,g=function(){et.m9.logEvent("chatgpt_biz_onboarding_skipped"),K.A.logEvent(X.M.bizOnboardingSkipped),t()};switch(n){case r.InitialModal:return(0,c.jsx)(eC,{onContinue:function(){s(r.RoleModal)}});case r.RoleModal:return(0,c.jsx)(e_,{onContinue:function(e){d(function(t){return(0,j._)((0,w._)({},t),{role:e})}),s(r.DepartmentModal)},onSkip:g});case r.DepartmentModal:return(0,c.jsx)(eS,{onContinue:function(e){var a=(0,j._)((0,w._)({},l),{departments:e});t(),et.m9.logEvent("chatgpt_biz_onboarding_completed"),K.A.logEvent(X.M.bizOnboardingCompleted),b.ZP.updateWorkspaceUserOnboardingInformation(u,p,a)},onSkip:g});default:return(0,c.jsx)(c.Fragment,{})}}(s=r||(r={}))[s.InitialModal=0]="InitialModal",s[s.RoleModal=1]="RoleModal",s[s.DepartmentModal=2]="DepartmentModal";var eB=(0,y.vU)({chatgptTitle:{id:"onboarding.chatgptTitle",defaultMessage:"ChatGPT",description:"Title for the initial onboarding modal"},chatgptEnterpriseDescription:{id:"onboarding.chatgptEnterpriseDescription",defaultMessage:"Enterprise Edition",description:"Description for the ChatGPT Enterprise Edition"},primaryRoleTitle:{id:"onboarding.primaryRoleTitle",defaultMessage:"What's your primary role?",description:"Question asking the user about their primary role"},tailorChatGPT:{id:"onboarding.tailorChatGPT",defaultMessage:"This will help us tailor ChatGPT for you.",description:"Description explaining the reason for the questions"},workTypeTitle:{id:"onboarding.workTypeTitle",defaultMessage:"What kind of work do you do?",description:"Question asking the user about the kind of work they do"},selectAll:{id:"onboarding.selectAll",defaultMessage:"Select all that apply",description:"Instruction for multi-select options"},skipButton:{id:"onboarding.skipButton",defaultMessage:"Skip",description:"Label for the skip button"},continueButton:{id:"onboarding.continueButton",defaultMessage:"Continue",description:"Label for the continue button"}}),eZ=(0,y.vU)({marketing:{id:"onboarding.departments.marketing",defaultMessage:"Marketing",description:"Department option for Marketing"},analytics:{id:"onboarding.departments.analytics",defaultMessage:"Data or Analytics",description:"Department option for Data or Analytics"},product:{id:"onboarding.departments.product",defaultMessage:"Product Management",description:"Department option for Product Management"},comms:{id:"onboarding.departments.comms",defaultMessage:"Communications",description:"Department option for Communication"},finance:{id:"onboarding.departments.finance",defaultMessage:"Finance or Accounting",description:"Department option for Finance or Accounting"},customer_experience:{id:"onboarding.departments.customer_experience",defaultMessage:"Customer Experience",description:"Department option for Customer Experience"},project_management:{id:"onboarding.departments.project_management",defaultMessage:"Project or Program Management",description:"Department option for Project or Program Management"},engineering:{id:"onboarding.departments.engineering",defaultMessage:"Engineering",description:"Department option for Engineering"},education_professional:{id:"onboarding.departments.education_professional",defaultMessage:"Education Professional",description:"Department option for Education Professional"},design:{id:"onboarding.departments.design",defaultMessage:"Design",description:"Department option for Design"},administrative:{id:"onboarding.departments.administrative",defaultMessage:"Administrative Assistant",description:"Department option for Administrative Assistant"},partnerships:{id:"onboarding.departments.partnerships",defaultMessage:"Partnerships",description:"Department option for Partnerships"},it:{id:"onboarding.departments.it",defaultMessage:"Information Technology (IT)",description:"Department option for Information Technology (IT)"},ops:{id:"onboarding.departments.ops",defaultMessage:"Operations",description:"Department option for Operations"},human_resources:{id:"onboarding.departments.human_resources",defaultMessage:"Human Resources",description:"Department option for Human Resources"},research:{id:"onboarding.departments.research",defaultMessage:"Research & Development",description:"Department option for Research & Development"},sales:{id:"onboarding.departments.sales",defaultMessage:"Sales",description:"Department option for Sales"},legal:{id:"onboarding.departments.legal",defaultMessage:"Legal",description:"Department option for Legal"},healthcare:{id:"onboarding.departments.healthcare",defaultMessage:"Healthcare Professional",description:"Department option for Healthcare Professional"},other:{id:"onboarding.departments.other",defaultMessage:"Other",description:"Department option for Other"}}),eA=(0,y.vU)({team_member:{id:"onboarding.role.team_member",defaultMessage:"Team Member/ Individual Contributor",description:"Label for the role: Team Member/ Individual Contributor"},manager:{id:"onboarding.role.manager",defaultMessage:"Manager",description:"Label for the role: Manager"},student:{id:"onboarding.role.student",defaultMessage:"Student",description:"Label for the role: Student"},executive:{id:"onboarding.role.executive",defaultMessage:"Executive",description:"Label for the role: Executive"},director:{id:"onboarding.role.director",defaultMessage:"Director",description:"Label for the role: Director"},business_owner:{id:"onboarding.role.business_owner",defaultMessage:"Business Owner",description:"Label for the role: Business Owner"},freelancer:{id:"onboarding.role.freelancer",defaultMessage:"Freelancer",description:"Label for the role: Freelancer"},other:{id:"onboarding.role.other",defaultMessage:"Other",description:"Label for the role: Other"}}),eP=[{id:"team_member",displayValue:eA.team_member},{id:"manager",displayValue:eA.manager},{id:"student",displayValue:eA.student},{id:"executive",displayValue:eA.executive},{id:"director",displayValue:eA.director},{id:"business_owner",displayValue:eA.business_owner},{id:"freelancer",displayValue:eA.freelancer},{id:"other",displayValue:eA.other}],eD=[{id:"marketing",displayValue:eZ.marketing},{id:"analytics",displayValue:eZ.analytics},{id:"product",displayValue:eZ.product},{id:"comms",displayValue:eZ.comms},{id:"engineering",displayValue:eZ.engineering},{id:"education_professional",displayValue:eZ.education_professional},{id:"finance",displayValue:eZ.finance},{id:"customer_experience",displayValue:eZ.customer_experience},{id:"project_management",displayValue:eZ.project_management},{id:"design",displayValue:eZ.design},{id:"administrative",displayValue:eZ.administrative},{id:"it",displayValue:eZ.it},{id:"ops",displayValue:eZ.ops},{id:"human_resources",displayValue:eZ.human_resources},{id:"research",displayValue:eZ.research},{id:"sales",displayValue:eZ.sales},{id:"partnerships",displayValue:eZ.partnerships},{id:"legal",displayValue:eZ.legal},{id:"healthcare",displayValue:eZ.healthcare},{id:"other",displayValue:eZ.other}],eE=function(e){var t=e.onClose,a=(0,v.Z)();return(0,c.jsx)(B.Z,{isOpen:!0,onClose:x.noop,type:"success",title:"ChatGPT",description:a.formatMessage(eW.personalOnboardingSubheading),children:(0,c.jsx)(ev,{onClose:t,scope:i.Personal})})};function eI(e){var t=e.ageVerificationDeadline,a=e.showCookieConsentBanner,n=e.canManageBrowserStorage,s=(0,o._)((0,m.useState)(0),2),r=s[0],l=s[1],d=(0,h.ec)(h.F_.workspaceId),u=ex(i.Personal).getHasSeenOnboardingDate,p=(0,h.ec)(h.F_.isBusinessWorkspace),g=ex(i.Workspace,d).getHasSeenOnboardingDate,f=0===(0,h.hz)().size?"loading":ee.b.getCookie(ee.c.AgeVerification)||null==t?"hide":"show",x=0===(0,h.hz)().size?"loading":a?"show":"hide",v=(0,h.$T)(),y=(0,b.Go)(),k=(0,h.ec)(h.F_.hasMultipleWorkspaces)&&null==d,w=(0,m.useMemo)(function(){return[{Component:Q,getModalState:function(){return v?"loading":k?"show":"hide"}},{Component:A,getModalState:function(){return v?"loading":null!==y?"show":"hide"}},{Component:eu,getModalState:function(){return x}},{Component:eE,getModalState:function(){if(p)return"hide";var e=u();return null===e?"loading":!1===e?"show":"hide"}},{Component:eN,getModalState:function(){if(!p)return"hide";var e=g();return null===e?"loading":!1===e?"show":"hide"}},{Component:es,getModalState:function(){return f}}]},[v,k,y,x,p,u,g,f]);(0,m.useEffect)(function(){w[r]&&"hide"===w[r].getModalState()&&l(w.findIndex(function(e){return"hide"!==e.getModalState()}))},[r,w]);var j=w[r];if(null==j)return null;var M=j.getModalState();if("loading"===M)return null;"hide"===M&&l(function(e){return e+1});var C=w[r].Component;return(0,c.jsx)(C,{onClose:function(){l(function(e){return e+1})},ageVerificationDeadline:t,canManageBrowserStorage:n})}var eW=(0,y.vU)({personalOnboardingSubheading:{id:"BlockingInitialModals.personalOnboardingSubheading",defaultMessage:"Tips for getting started",description:"Subheading for the Personal onbaording modal"}}),eV=a(6780),eO=a(10664),eq=function(e){var t=e.action;return(0,c.jsxs)("div",{className:"flex items-center justify-between overflow-hidden text-gray-600 dark:text-gray-300",children:[(0,c.jsx)("div",{className:"flex flex-shrink items-center overflow-hidden text-sm",children:(0,c.jsx)("div",{className:"truncate",children:(0,c.jsx)(T.Z,(0,w._)({},t.actionMessageDescriptor))})}),(0,c.jsx)("div",{className:"ml-3 flex flex-row gap-2",children:(0,eO.A3)(t.keyboardBinding).map(function(e,a){return(0,c.jsx)(eL,{keyName:e},"".concat(t.key,"-").concat(a))})})]})},eL=function(e){var t=e.keyName,a=(0,V.default)("my-2 flex h-8 items-center justify-center rounded-[4px] border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300");return t.length>1?t.length>3?(0,c.jsx)("div",{className:(0,V.default)(a,"min-w-[50px]"),children:(0,c.jsx)("span",{className:"text-xs",children:t})}):(0,c.jsx)("div",{className:(0,V.default)(a,"min-w-[32px]"),children:(0,c.jsx)("span",{className:"text-xs",children:t})}):(0,c.jsx)("div",{className:(0,V.default)(a,"min-w-[32px]"),children:(0,c.jsx)("span",{className:"text-sm",children:t})})},eR=(0,y.vU)({keyboardActionsModalTitle:{id:"KeyboardActionsModal.keyboardActionsModalTitle",defaultMessage:"Keyboard shortcuts",description:"Title of the keyboard shortcuts modal"}}),eG=function(){var e=(0,v.Z)(),t=(0,$.tN)(function(e){return e.activeModals.has($.B.KeyboardActions)}),a=function(){$.vm.closeModal($.B.KeyboardActions)},n=(0,eO.JS)(),s=(0,m.useMemo)(function(){var e=Math.ceil(n.length/2);return[n.slice(0,e),n.slice(e)]},[n]);return(0,c.jsx)(B.Z,{isOpen:t,onClose:a,type:"success",size:"custom",className:"md:max-w-[672px] lg:max-w-[796px] xl:max-w-4xl",closeButton:(0,c.jsx)(N.ZP.CloseButton,{onClose:a}),title:e.formatMessage(eR.keyboardActionsModalTitle),children:(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-9",children:s.map(function(e,t){return(0,c.jsx)("div",{className:"flex flex-col overflow-hidden",children:e.map(function(e){return(0,c.jsx)(eq,{action:e},e.key)})},"col-".concat(t))})})})})},ez=Symbol("invalid path");function eU(e){var t,a=e.split(/[#?]/)[0];if("/"!==a&&!a.match(/^\/g\/\w+$/)){var n=/(?:(?:\/gizmo)\/g\/\w+)?\/c\/([a-f0-9-]+)$/.exec(a);return null!==(t=null==n?void 0:n[1])&&void 0!==t?t:ez}}function eF(e){var t=e.urlThreadId,a=e.clientThreadId,n=e.isUserInCanPayGroup,s=e.serviceStatus,i=e.serviceAnnouncement,r=e.ageVerificationDeadline,x=e.showCookieConsentBanner,v=e.canManageBrowserStorage,y=(0,o._)((0,m.useState)(function(){return void 0!==t?t:void 0!==a?a:(0,f.OX)()}),2),b=y[0],k=y[1];void 0!==t&&b!==t&&f.tQ.getServerThreadId(b)!==t&&k(t),void 0===t&&void 0!==f.tQ.getServerThreadId(b)&&k((0,f.OX)());var w=(0,h.$T)(),j=(0,h.WY)(),M=(0,h.ec)(h.F_.workspaceId),C=(0,u.g)(function(e){return e.updateFlagValue}),_=(0,h.hz)().has(d.PL);(0,m.useEffect)(function(){_&&g.ZP.initializeAndGatherData()},[_]),(0,m.useEffect)(function(){void 0!==n&&C("isUserInCanPayGroup",n)},[C,n]),(0,m.useEffect)(function(){(null==s?void 0:s.type)&&!1===j&&l.m.warning(s.message,{hasCloseButton:!0,duration:5})},[j,null==s?void 0:s.message,null==s?void 0:s.type]);var S=(0,m.useRef)(!1);return(0,m.useEffect)(function(){if(!w){var e=j?i.paid:i.public;if((null==e?void 0:e.type)&&(null==e?void 0:e.message)&&!S.current){S.current=!0;var t=e.message,a={hasCloseButton:!0,duration:15};switch(e.type){case"danger":l.m.danger(t,a);break;case"info":l.m.info(t,a);break;case"warning":l.m.warning(t,a)}}}},[i,w,j]),(0,c.jsxs)(p.gB.Provider,{value:null,children:[(0,c.jsx)(eI,{ageVerificationDeadline:r,showCookieConsentBanner:x,canManageBrowserStorage:v},M),(0,c.jsx)(eG,{}),(0,c.jsx)(eV.Z,{clientThreadId:b,setClientThreadId:k})]})}},6780:function(e,t,a){a.d(t,{Z:function(){return P}});var n=a(39324),s=a(35250),i=a(82473),r=a(55344),o=a.n(r),c=a(60554),l=a(70079),d=a(1454),u=a(32004),p=a(94968),g=a(37469),m=a(46020),f=a(78931),h=a(32542),x=a(28735),v=a(10664),y=a(33669),b=a(2166),k=a(41932),w=a(61402),j=a(20522),M=a(13940),C=a(18873),_=a(82816),S=a(52481),T=a(82277),N=a(13090),B=a(94007),Z=a(42569),A=o()(function(){return Promise.all([a.e(8682),a.e(5468)]).then(a.bind(a,947)).then(function(e){return e.GizmoSidebarList})},{loadableGenerated:{webpack:function(){return[947]}}});function P(e){var t,n=e.clientThreadId,r=e.setClientThreadId,o=e.initiallyHighlightedMessageId,u=e.continueConversationUrl,p=null!==(0,l.useContext)(h.gB);(0,g.ax)(n);var b=(0,g.XK)(n),k=(0,c.useRouter)(),P=(0,f.hz)(),E=(0,g.UL)(n),I=(0,l.useContext)(h.QL).historyDisabled,W=(0,Z.Xy)(E.lastModelUsed,n),V=(0,i.NL)();(0,l.useEffect)(function(){return g.tQ.retainThread(n),function(){setTimeout(function(){V.invalidateQueries({queryKey:["conversation",n]})},0),g.tQ.releaseThread(n)}},[n,V]),(0,l.useEffect)(function(){m.vm.closeSharingModal()},[n,b]);var O=(0,l.useCallback)(function(){r((0,g.OX)()),k.replace(W.tags.includes(Z.S.GPT_4)?"/":"/?model=".concat(W.id),void 0,{shallow:!0})},[r,W.tags,W.id,k]);(0,v.yx)({resetThreadAction:O,clientThreadId:n});var q=(0,m.tN)(function(e){return e.activeSidebar}),L=(0,y.w$)();(0,l.useEffect)(function(){return function(){w.hx.abortAllRequests()}},[n]),t=(0,f.hz)().has("debug"),(0,l.useEffect)(function(){if(t)return(0,x.eR)(document,{keydown:function(e){e.target instanceof HTMLElement&&["input","textarea","select","button"].includes(e.target.tagName.toLowerCase())||"\\"!==e.key||m.vm.toggleActiveSidebar("debug")}})},[t]);var R=(0,l.useRef)(E.threadId);(0,l.useEffect)(function(){E.threadId!==R.current&&(m.vm.setActiveSidebar(!1),R.current=E.threadId),w.hx.clear()},[E.threadId]);var G=(0,f.ec)(function(e){return e.currentWorkspace}),z=null==G?void 0:G.id,U=(0,j.Ml)(),F=(0,l.useCallback)(function(e){U&&null!=z&&a.e(8682).then(a.bind(a,60790)).then(function(t){return t.gizmoCreateGPTCompletionCallback(e,z,k,r)})},[U,z,k,r]),H=(0,j.bU)(function(e){return e.displayVariant});return(0,s.jsxs)(T.Z,{showNavigation:!p,renderTitle:(0,s.jsx)(D,{clientThreadId:n}),renderMobileHeaderRightContent:(0,s.jsx)(N.js,{onClick:O,children:I?(0,s.jsx)(d.Bw1,{className:"icon-lg"}):(0,s.jsx)(d.OvN,{className:"icon-lg"})}),renderSidebar:(0,s.jsxs)(C.ZP,{onNewThread:O,children:[U&&H===j.Mo.SidebarList?(0,s.jsx)(A,{clientThreadId:n}):null,(0,s.jsx)(M.Z,{activeId:I?void 0:b,onNewThread:O})]}),children:[(0,s.jsx)(B.Z,{initialThreadData:E,clientThreadId:n,initiallyHighlightedMessageId:o,continueConversationUrl:u,onCompletionFinished:F},n),(0,s.jsxs)(T.Z.Sidebars,{children:[P.has("debug")&&"debug"===q&&(0,s.jsx)(S.fv,{clientThreadId:n,slideOver:!L,onClose:function(){return m.vm.toggleActiveSidebar("debug")},isOpen:!0}),P.has("tools3_dev")&&(0,s.jsx)(_.ZP,{slideOver:!L})]})]})}function D(e){var t,a=e.clientThreadId,i=null!==(t=g.tQ.getTitle(a))&&void 0!==t?t:"New chat",r=(0,b.Z)(a,i,!0),o=r.resolvedTitle,c=r.isTypingEffect,p=(0,l.useContext)(h.QL),m=p.historyDisabled,f=p.toggleHistoryDisabled;return(0,s.jsx)(s.Fragment,{children:m?(0,s.jsxs)("button",{className:"flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",onClick:function(){return f()},children:[(0,s.jsx)(d.$IY,{className:"icon-sm"}),(0,s.jsx)(u.Z,(0,n._)({},E.enableChatHistory))]}):c&&null!=o?(0,s.jsx)(k.Z,{text:o}):null!=o?o:(0,s.jsx)(u.Z,(0,n._)({},E.newChat))})}var E=(0,p.vU)({enableChatHistory:{id:"navigation.enableChatHistory",defaultMessage:"Enable chat history",description:"Enable chat history button label"},newChat:{id:"navigation.newChat",defaultMessage:"New chat",description:"New chat header title"}})}}]);