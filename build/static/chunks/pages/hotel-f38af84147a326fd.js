(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{5548:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hotel",function(){return t(4656)}])},7695:function(e,l,t){"use strict";t.d(l,{Z:function(){return p}});var s=t(5893),r=t(7294),i=t(4538),n=t(5675),a=t.n(n),o=t(1163),c=t(381),d=t.n(c),x=t(1664),h=t.n(x);let m=r.forwardRef(function(e,l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:l},e),r.createElement("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}))}),f=r.forwardRef(function(e,l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:l},e),r.createElement("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"}))});var u=t(2738);let w=r.forwardRef(function(e,l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:l},e),r.createElement("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}))});function p(e){let l=(0,o.useRouter)(),[t,n]=r.useState(0),c=l=>{l.stopPropagation(),0===t?n(e.hotelInfo.hotel_Img_List.length-1):n(t-1)},x=l=>{l.stopPropagation(),n((t+1)%e.hotelInfo.hotel_Img_List.length)},p=()=>{l.push({pathname:"/hotel/google/list/".concat(e.hotel_Id,"/"),query:{checkin:String(d()(e.checkin).format("DD-MM-YYYY")),num_nights:String(e.num_nights),num_guests:String(e.num_guests),hotel_id:String(e.hotel_Id)}})};return(0,s.jsx)(r.Fragment,{children:(0,s.jsxs)(i.E.div,{onClick:p,className:"relative flex flex-col sm:flex-row mx-2 md:mx-4 xl:mx-8 my-2 p-3 rounded-2xl bg-white hover:bg-slate-100 shadow-md hover:shadow-lg cursor-pointer",children:[(0,s.jsxs)(i.E.div,{className:"relative flex flex-row h-72 w-[100%] sm:h-80 sm:w-[45%] md:h-80 md:w-[40%] lg:h-72 lg:w-96 xl:h-80 xl:w-[480px] flex-shrink-0 mr-2 md:mr-4 xl:mr-6",children:[(0,s.jsxs)(i.E.div,{onClick:p,initial:{opacity:.5},transition:{duration:1,type:"spring"},whileHover:{opacity:1},className:"absolute flex flex-row items-center align-middle h-full justify-between w-full z-20 px-2",children:[(0,s.jsx)("div",{className:"cursor-pointer bg-white shadow-lg border-black hover:shadow-2xl rounded-full opacity-90 z-30",onClick:c,children:(0,s.jsx)(m,{className:"fill-black h-7 w-7 p-1 rounded-full"})}),(0,s.jsx)("div",{className:"cursor-pointer bg-white shadow-lg border-black hover:shadow-2xl rounded-full opacity-90 z-30",onClick:x,children:(0,s.jsx)(f,{className:"fill-black h-7 w-7 p-1 rounded-full"})})]}),(0,s.jsx)(a(),{className:"rounded-lg z-10 shadow-md",src:e.hotelInfo.hotel_Img_List[t],alt:"hotel-img",layout:"fill",objectFit:"cover"})]}),(0,s.jsxs)(i.E.div,{initial:{opacity:0,x:25},transition:{duration:3,type:"spring"},whileInView:{opacity:1,x:0},className:"relative flex flex-col justify-between sm:pr-2 w-full sm:w-[55%] md:w-[60%] lg:w-[70%] xl:w-[75%]",children:[(0,s.jsxs)("div",{className:"pb-4 pt-4 sm:pt-0",children:[(0,s.jsx)("div",{className:"flex flex-row flex-between",children:(0,s.jsx)("h1",{className:"text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold",children:e.hotelInfo.name})}),(0,s.jsxs)("div",{className:"relative flex flex-row py-1 hover:underline hover:text-blue-600",children:[(0,s.jsx)(u.Z,{className:"relative fill-[#cf8f24] h-7 w-7 p-1 border-2 border-[#cf8f24] rounded-full mr-2"}),(0,s.jsx)(h(),{href:e.hotelInfo.map,className:"z-30",target:"_blank",children:(0,s.jsx)("p",{className:"md:text-lg xl:text-xl",children:e.hotelInfo.landmark})})]})]}),(0,s.jsxs)("div",{className:"relative flex flex-col pb-4",children:[(0,s.jsxs)("div",{className:"relative flex flex-col sm:flex-row justify-between items-start w-[100%] mb-2",children:[(0,s.jsx)("div",{className:"relative items-center flex space-x-2",children:[...Array(e.hotelInfo.rating)].map(e=>(0,s.jsx)(w,{className:"h-6 w-6 rounded-full p-1 shadow-md fill-[#cf8f24] border-[1px]"},e))}),(0,s.jsx)("div",{className:"relative flex"})]}),(0,s.jsx)("div",{className:"relative flex flex-row overflow-x-scroll scrollbar-hide no-scrollbar",children:(0,s.jsx)(i.E.div,{className:"relative flex flex-row overscroll-x-scroll w-full",children:e.hotelInfo.amenities_List.map((e,l)=>(0,s.jsxs)(i.E.div,{className:"relative flex flex-row items-start align-middle justify-center rounded-full flex-shrink-0 mr-2 px-2 py-1 bg-white border-[1px]",children:[(0,s.jsx)("div",{className:"relative h-5 w-5 mr-2 flex rounded-full bg-white",children:(0,s.jsx)(a(),{className:"rounded-full",src:e.image_Url,alt:"amenity-img",layout:"fill",objectFit:"cover"})}),(0,s.jsx)("div",{className:"text-sm text-center",children:e.name})]},e._id))})})]}),(0,s.jsx)("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center",children:(0,s.jsxs)("div",{className:"flex flex-col pb-4 sm:pb-0 justify-center",children:[(0,s.jsx)("p",{className:"text-red-500 text-3xl font-bold",children:"₹ ".concat(e.hotelInfo.min_Price)}),(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"per room per night"})]})})]})]})})}},4656:function(e,l,t){"use strict";t.r(l),t.d(l,{__N_SSG:function(){return x},default:function(){return h}});var s=t(5893),r=t(7294),i=t(4538),n=t(9008),a=t.n(n),o=t(1163),c=t(7695),d=t(4652),x=!0;function h(e){return(0,o.useRouter)(),(0,s.jsxs)(r.Fragment,{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"StayBook Hotels"}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:"/images/favicon.png"})]}),(0,s.jsxs)("main",{className:"w-screen",children:[(0,s.jsx)(i.E.div,{initial:{opacity:0,x:-50},transition:{duration:3,type:"spring"},whileInView:{opacity:1,x:0},className:"flex items-center align-middle justify-center text-center py-5 px-2",children:(0,s.jsx)(i.E.h1,{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center",children:"Staybook Hotels"})}),(0,s.jsx)(i.E.div,{className:"relative flex flex-col",children:e.hotelsList.map((e,l)=>(0,s.jsx)(c.Z,{hotelInfo:e,hotel_Id:e.hotel_Id,checkin:new Date,checkout:(0,d.E4)(new Date,1),num_nights:1,num_guests:2},e._id))})]})]})}},9008:function(e,l,t){e.exports=t(2636)},2738:function(e,l,t){"use strict";var s=t(7294);let r=s.forwardRef(function(e,l){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:l},e),s.createElement("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"}))});l.Z=r}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5548)}),_N_E=e.O()}]);