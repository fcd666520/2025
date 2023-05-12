var rule = {
    title:'360影视',
    host:'https://www.360kan.com',
    homeUrl:'https://api.web.360kan.com/v1/rank?cat=2&size=9',
    detailUrl:'https://api.web.360kan.com/v1/detail?cat=fyclass&id=fyid',
    searchUrl:'https://api.so.360kan.com/index?force_v=1&kw=**&from=&pageno=fypage&v_ap=1&tab=all',
    url:'https://api.web.360kan.com/v1/filter/list?catid=fyclass&rank=rankhot&cat=&year=&area=&act=&size=35&pageno=fypage&callback=',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'电视剧&电影&综艺&动漫',
    class_url:'2&1&3&4',
    limit:5,
        filter:{'teleplay': [{'key': 'style', 'name': '类型', 'value': [{'n': '全部', 'v': ''}, {'n': '爱情', 'v': '爱情'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '都市', 'v': '都市'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '古装', 'v': '古装'}, {'n': '偶像', 'v': '偶像'}, {'n': '犯罪', 'v': '犯罪'}, {'n': '历史', 'v': '历史'}, {'n': '战争', 'v': '战争'}, {'n': '武侠', 'v': '武侠'}, {'n': '警匪', 'v': '警匪'}, {'n': '科幻', 'v': '科幻'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '谍战', 'v': '谍战'}, {'n': '农村', 'v': '农村'}, {'n': '其他', 'v': '其他'}]}, {'key': 'zone', 'name': '地区', 'value': [{'n': '全部', 'v': ''}, {'n': '内地', 'v': '内地'}, {'n': '香港', 'v': '香港'}, {'n': '台湾', 'v': '台湾'}, {'n': '韩国', 'v': '韩国'}, {'n': '泰国', 'v': '泰国'}, {'n': '日本', 'v': '日本'}, {'n': '美国', 'v': '美国'}, {'n': '英国', 'v': '英国'}, {'n': '新加坡', 'v': '新加坡'}, {'n': '其他', 'v': '其他'}]}, {'key': 'year', 'name': '年代', 'value': [{'n': '全部', 'v': ''}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, {'n': '2014', 'v': '2014'}, {'n': '更早', 'v': '更早'}]}, {'key': 'fee', 'name': '资源', 'value': [{'n': '全部', 'v': ''}, {'n': '正片', 'v': '正片'}, {'n': '免费正片', 'v': '免费正片'}, {'n': '付费正片', 'v': '付费正片'}]}, {'key': 'order', 'name': '排序', 'value': [{'n': '全部', 'v': ''}, {'n': '最新', 'v': '最新'}, {'n': '好评', 'v': '好评'}]}], 'film': [{'key': 'style', 'name': '类型', 'value': [{'n': '全部', 'v': ''}, {'n': '喜剧', 'v': '喜剧'}, {'n': '爱情', 'v': '爱情'}, {'n': '动作', 'v': '动作'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '科幻', 'v': '科幻'}, {'n': '惊悚', 'v': '惊悚'}, {'n': '犯罪', 'v': '犯罪'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '战争', 'v': '战争'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '动画', 'v': '动画'}, {'n': '文艺', 'v': '文艺'}, {'n': '传记', 'v': '传记'}, {'n': '歌舞', 'v': '歌舞'}, {'n': '古装', 'v': '古装'}, {'n': '警匪', 'v': '警匪'}, {'n': '其他', 'v': '其他'}]}, {'key': 'zone', 'name': '地区', 'value': [{'n': '全部', 'v': ''}, {'n': '内地', 'v': '内地'}, {'n': '香港', 'v': '香港'}, {'n': '台湾', 'v': '台湾'}, {'n': '韩国', 'v': '韩国'}, {'n': '泰国', 'v': '泰国'}, {'n': '日本', 'v': '日本'}, {'n': '美国', 'v': '美国'}, {'n': '英国', 'v': '英国'}, {'n': '新加坡', 'v': '新加坡'}, {'n': '其他', 'v': '其他'}]}, {'key': 'year', 'name': '年代', 'value': [{'n': '全部', 'v': ''}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, {'n': '2014', 'v': '2014'}, {'n': '更早', 'v': '更早'}]}, {'key': 'fee', 'name': '资源', 'value': [{'n': '全部', 'v': ''}, {'n': '正片', 'v': '正片'}, {'n': '免费正片', 'v': '免费正片'}, {'n': '付费正片', 'v': '付费正片'}]}, {'key': 'order', 'name': '排序', 'value': [{'n': '全部', 'v': ''}, {'n': '最新', 'v': '最新'}, {'n': '好评', 'v': '好评'}]}], 'cartoon': [{'key': 'style', 'name': '类型', 'value': [{'n': '全部', 'v': ''}, {'n': '搞笑', 'v': '搞笑'}, {'n': '热血', 'v': '热血'}, {'n': '冒险', 'v': '冒险'}, {'n': '美少女', 'v': '美少女'}, {'n': '科幻', 'v': '科幻'}, {'n': '校园', 'v': '校园'}, {'n': '恋爱', 'v': '恋爱'}, {'n': '神魔', 'v': '神魔'}, {'n': '机战', 'v': '机战'}, {'n': '益智', 'v': '益智'}, {'n': '亲子', 'v': '亲子'}, {'n': '励志', 'v': '励志'}, {'n': '童话', 'v': '童话'}, {'n': '青春', 'v': '青春'}, {'n': '原创', 'v': '原创'}, {'n': '动作', 'v': '动作'}, {'n': '耽美', 'v': '耽美'}, {'n': '魔幻', 'v': '魔幻'}, {'n': '其他', 'v': '其他'}]}, {'key': 'zone', 'name': '地区', 'value': [{'n': '全部', 'v': ''}, {'n': '日本', 'v': '日本'}, {'n': '欧美', 'v': '欧美'}, {'n': '国产', 'v': '国产'}, {'n': '其他', 'v': '其他'}]}, {'key': 'year', 'name': '年代', 'value': [{'n': '全部', 'v': ''}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, {'n': '2014', 'v': '2014'}, {'n': '更早', 'v': '更早'}]}, {'key': 'fee', 'name': '资源', 'value': [{'n': '全部', 'v': ''}, {'n': '正片', 'v': '正片'}, {'n': '免费正片', 'v': '免费正片'}, {'n': '付费正片', 'v': '付费正片'}]}, {'key': 'order', 'name': '排序', 'value': [{'n': '全部', 'v': ''}, {'n': '最新', 'v': '最新'}, {'n': '好评', 'v': '好评'}]}], 'tvshow': [{'key': 'style', 'name': '类型', 'value': [{'n': '全部', 'v': ''}, {'n': '真人秀', 'v': '真人秀'}, {'n': '生活', 'v': '生活'}, {'n': '搞笑', 'v': '搞笑'}, {'n': '访谈', 'v': '访谈'}, {'n': '时尚', 'v': '时尚'}, {'n': '音乐', 'v': '音乐'}, {'n': '选秀', 'v': '选秀'}, {'n': '美食', 'v': '美食'}, {'n': '游戏', 'v': '游戏'}, {'n': '纪实', 'v': '纪实'}, {'n': '旅游', 'v': '旅游'}, {'n': '情感', 'v': '情感'}, {'n': '恶搞', 'v': '恶搞'}, {'n': '吐槽', 'v': '吐槽'}, {'n': '原创', 'v': '原创'}, {'n': '歌舞', 'v': '歌舞'}, {'n': '播报', 'v': '播报'}, {'n': '曲艺', 'v': '曲艺'}, {'n': '科教', 'v': '科教'}, {'n': '其他', 'v': '其他'}]}, {'key': 'zone', 'name': '地区', 'value': [{'n': '全部', 'v': ''}, {'n': '内地', 'v': '内地'}, {'n': '台湾', 'v': '台湾'}, {'n': '日韩', 'v': '日韩'}, {'n': '欧美', 'v': '欧美'}, {'n': '其他', 'v': '其他'}]}, {'key': 'emcee', 'name': '明星', 'value': [{'n': '全部', 'v': ''}, {'n': '何炅', 'v': '何炅'}, {'n': '撒贝宁', 'v': '撒贝宁'}, {'n': '王筱磊', 'v': '王筱磊'}, {'n': '张绍刚', 'v': '张绍刚'}, {'n': '鲁健', 'v': '鲁健'}, {'n': '王世林', 'v': '王世林'}, {'n': '倪萍', 'v': '倪萍'}, {'n': '汪涵', 'v': '汪涵'}, {'n': '舒冬', 'v': '舒冬'}, {'n': '齐思钧', 'v': '齐思钧'}, {'n': '白岩松', 'v': '白岩松'}, {'n': '曲洪禹', 'v': '曲洪禹'}, {'n': '康辉', 'v': '康辉'}, {'n': '章亭', 'v': '章亭'}, {'n': '刘洪悦', 'v': '刘洪悦'}, {'n': '尼格买提', 'v': '尼格买提'}, {'n': '钱枫', 'v': '钱枫'}, {'n': '刘婧', 'v': '刘婧'}, {'n': '赵川', 'v': '赵川'}, {'n': '谢娜', 'v': '谢娜'}]}, {'key': 'order', 'name': '排序', 'value': [{'n': '全部', 'v': ''}, {'n': '最新', 'v': '最新'}, {'n': '好评', 'v': '好评'}]}], 'documentary': [{'key': 'style', 'name': '类型', 'value': [{'n': '全部', 'v': ''}, {'n': '历史', 'v': '历史'}, {'n': '自然', 'v': '自然'}, {'n': '动物', 'v': '动物'}, {'n': '社会', 'v': '社会'}, {'n': '传记', 'v': '传记'}, {'n': '人文', 'v': '人文'}, {'n': '文化', 'v': '文化'}, {'n': '军事', 'v': '军事'}, {'n': '科技', 'v': '科技'}, {'n': '人物', 'v': '人物'}, {'n': '探索', 'v': '探索'}, {'n': '美食', 'v': '美食'}, {'n': '旅行', 'v': '旅行'}, {'n': '探险', 'v': '探险'}, {'n': '其他', 'v': '其他'}]}, {'key': 'zone', 'name': '地区', 'value': [{'n': '全部', 'v': ''}, {'n': '内地', 'v': '内地'}, {'n': '香港', 'v': '香港'}, {'n': '台湾', 'v': '台湾'}, {'n': '韩国', 'v': '韩国'}, {'n': '泰国', 'v': '泰国'}, {'n': '日本', 'v': '日本'}, {'n': '美国', 'v': '美国'}, {'n': '英国', 'v': '英国'}, {'n': '新加坡', 'v': '新加坡'}, {'n': '其他', 'v': '其他'}]}, {'key': 'year', 'name': '年代', 'value': [{'n': '全部', 'v': ''}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, {'n': '2014', 'v': '2014'}, {'n': '更早', 'v': '更早'}]}, {'key': 'fee', 'name': '资源', 'value': [{'n': '全部', 'v': ''}, {'n': '正片', 'v': '正片'}, {'n': '免费正片', 'v': '免费正片'}, {'n': '付费正片', 'v': '付费正片'}]}, {'key': 'order', 'name': '排序', 'value': [{'n': '全部', 'v': ''}, {'n': '最新', 'v': '最新'}, {'n': '好评', 'v': '好评'}]}]},
    multi:1,
    searchable:2,
    play_parse:true,
    lazy:'js:input=input.split("?")[0];log(input);',
    // 疑似t4专用的
    // lazy:'js:input={parse: 1, playUrl: "", jx: 1, url: input.split("?")[0]}',
    // 手动调用解析请求json的url,此lazy不方便
    // lazy:'js:input="https://cache.json.icu/home/api?type=ys&uid=292796&key=fnoryABDEFJNPQV269&url="+input.split("?")[0];log(input);let html=JSON.parse(request(input));log(html);input=html.url||input',
    推荐:'json:data;title;cover;comment;cat+ent_id;description',
    一级:'json:data.movies;title;cover;pubdate;id;description',
    二级:'',
    二级:'js:let html=JSON.parse(fetch(input,fetch_params));let data=html.data;let tilte=data.title;let img=data.cdncover;let vod_type=data.moviecategory.join(",");let area=data.area.join(",");let director=data.director.join(",");let actor=data.actor.join(",");let content=data.description;let base_vod={vod_id:input,vod_name:tilte,type_name:vod_type,vod_actor:actor,vod_director:director,vod_content:content,vod_remarks:area,vod_pic:urljoin2(input,img)};let delta=200;let vod_play={};let sites=data.playlink_sites;sites.forEach(function(site){let playList="";let vodItems=[];if(data.allupinfo){let total=parseInt(data.allupinfo[site]);for(let j=1;j<total;j+=delta){let end=Math.min(total,j+delta-1);let url2=buildUrl(input,{start:j,end:end,site:site});let vod_data=JSON.parse(fetch(url2),fetch_params).data;if(vod_data.allepidetail){vod_data=vod_data.allepidetail[site];vod_data.forEach(function(item,index){vodItems.push((item.playlink_num||"")+"$"+urlDeal(item.url||""))})}else{vod_data=vod_data.defaultepisode;vod_data.forEach(function(item,index){vodItems.push((item.period||"")+(item.name||"")+"$"+urlDeal(item.url)||"")})}}}else{let item=data.playlinksdetail[site];vodItems.push((item.sort||"")+"$"+urlDeal(item.default_url||""))}if(vodItems.length>0){playList=vodItems.join("#")}if(playList.length<1){return}vod_play[site]=playList});let tabs=Object.keys(vod_play);let playUrls=[];for(let id in tabs){print("id:"+id);playUrls.push(vod_play[tabs[id]])}if(tabs.length>0){let vod_play_from=tabs.join("$$$");let vod_play_url=playUrls.join("$$$");base_vod.vod_play_from=vod_play_from;base_vod.vod_play_url=vod_play_url}VOD=base_vod;',
    搜索:'json:data.longData.rows;titleTxt||titlealias;cover;cat_name;cat_id+en_id;description',
}