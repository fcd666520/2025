var rule = {
	title:'AGE动漫',
	//没问题 
	host:'https://v2.age-api.com:8443',
	homeUrl:'/v2/rank?page=1&size=10&value=2023',
	url:'/v2/catalog?genre=fyclass&fyfilter&page=fypage&size=10',
	searchUrl:'/v2/search?query=**&page=fypage',
	searchable:2,
	quickSearch:0,
	filterable:1,
	filter:{//加油
		"all":[{"key":"area","name":"地区","value":[{"n":"全部","v":"all"},{"n":"日本","v":"日本"},{"n":"中国","v":"中国"},{"n":"欧美","v":"欧美"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":"all"},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":"all"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":"all"},{"n":"搞笑","v":"搞笑"},{"n":"运动","v":"运动"},{"n":"励志","v":"励志"},{"n":"热血","v":"热血"},{"n":"战斗","v":"战斗"},{"n":"竞技","v":"竞技"},{"n":"校园","v":"校园"},{"n":"青春","v":"青春"},{"n":"爱情","v":"爱情"},{"n":"恋爱","v":"恋爱"},{"n":"冒险","v":"冒险"},{"n":"后宫","v":"后宫"},{"n":"百合","v":"百合"},{"n":"治愈","v":"治愈"},{"n":"萝莉","v":"萝莉"},{"n":"魔法","v":"魔法"},{"n":"悬疑","v":"悬疑"},{"n":"推理","v":"推理"},{"n":"奇幻","v":"奇幻"},{"n":"科幻","v":"科幻"},{"n":"游戏","v":"游戏"},{"n":"神魔","v":"神魔"},{"n":"恐怖","v":"恐怖"},{"n":"血腥","v":"血腥"},{"n":"机战","v":"机战"},{"n":"战争","v":"战争"},{"n":"犯罪","v":"犯罪"},{"n":"历史","v":"历史"},{"n":"社会","v":"社会"},{"n":"职场","v":"职场"},{"n":"剧情","v":"剧情"},{"n":"童年","v":"童年"},{"n":"教育","v":"教育"},{"n":"亲子","v":"亲子"},{"n":"真人","v":"真人"},{"n":"歌舞","v":"歌舞"},{"n":"美少女","v":"美少女"},{"n":"轻小说","v":"轻小说"},{"n":"泡面番","v":"泡面番"},{"n":"欢乐向","v":"欢乐向"}]},{"key":"by","name":"排序","value":[{"n":"更新时间","v":"更新时间"},{"n":"名称","v":"名称"},{"n":"点击量","v":"点击量"}]}],
		"TV":[{"key":"area","name":"地区","value":[{"n":"全部","v":"all"},{"n":"日本","v":"日本"},{"n":"中国","v":"中国"},{"n":"欧美","v":"欧美"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":"all"},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":"all"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":"all"},{"n":"搞笑","v":"搞笑"},{"n":"运动","v":"运动"},{"n":"励志","v":"励志"},{"n":"热血","v":"热血"},{"n":"战斗","v":"战斗"},{"n":"竞技","v":"竞技"},{"n":"校园","v":"校园"},{"n":"青春","v":"青春"},{"n":"爱情","v":"爱情"},{"n":"恋爱","v":"恋爱"},{"n":"冒险","v":"冒险"},{"n":"后宫","v":"后宫"},{"n":"百合","v":"百合"},{"n":"治愈","v":"治愈"},{"n":"萝莉","v":"萝莉"},{"n":"魔法","v":"魔法"},{"n":"悬疑","v":"悬疑"},{"n":"推理","v":"推理"},{"n":"奇幻","v":"奇幻"},{"n":"科幻","v":"科幻"},{"n":"游戏","v":"游戏"},{"n":"神魔","v":"神魔"},{"n":"恐怖","v":"恐怖"},{"n":"血腥","v":"血腥"},{"n":"机战","v":"机战"},{"n":"历史","v":"历史"},{"n":"社会","v":"社会"},{"n":"职场","v":"职场"},{"n":"剧情","v":"剧情"},{"n":"童年","v":"童年"},{"n":"真人","v":"真人"},{"n":"歌舞","v":"歌舞"},{"n":"肉番","v":"肉番"},{"n":"美少女","v":"美少女"},{"n":"轻小说","v":"轻小说"},{"n":"吸血鬼","v":"吸血鬼"},{"n":"泡面番","v":"泡面番"},{"n":"欢乐向","v":"欢乐向"}]},{"key":"by","name":"排序","value":[{"n":"更新时间","v":"更新时间"},{"n":"名称","v":"名称"},{"n":"点击量","v":"点击量"}]}],
		"剧场版":[{"key":"area","name":"地区","value":[{"n":"全部","v":"all"},{"n":"日本","v":"日本"},{"n":"中国","v":"中国"},{"n":"欧美","v":"欧美"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":"all"},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":"all"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":"all"},{"n":"搞笑","v":"搞笑"},{"n":"运动","v":"运动"},{"n":"励志","v":"励志"},{"n":"热血","v":"热血"},{"n":"战斗","v":"战斗"},{"n":"竞技","v":"竞技"},{"n":"校园","v":"校园"},{"n":"青春","v":"青春"},{"n":"爱情","v":"爱情"},{"n":"恋爱","v":"恋爱"},{"n":"冒险","v":"冒险"},{"n":"后宫","v":"后宫"},{"n":"百合","v":"百合"},{"n":"治愈","v":"治愈"},{"n":"萝莉","v":"萝莉"},{"n":"魔法","v":"魔法"},{"n":"悬疑","v":"悬疑"},{"n":"推理","v":"推理"},{"n":"奇幻","v":"奇幻"},{"n":"科幻","v":"科幻"},{"n":"游戏","v":"游戏"},{"n":"神魔","v":"神魔"},{"n":"恐怖","v":"恐怖"},{"n":"血腥","v":"血腥"},{"n":"机战","v":"机战"},{"n":"历史","v":"历史"},{"n":"社会","v":"社会"},{"n":"职场","v":"职场"},{"n":"剧情","v":"剧情"},{"n":"伪娘","v":"伪娘"},{"n":"耽美","v":"耽美"},{"n":"童年","v":"童年"},{"n":"教育","v":"教育"},{"n":"亲子","v":"亲子"},{"n":"真人","v":"真人"},{"n":"歌舞","v":"歌舞"},{"n":"肉番","v":"肉番"},{"n":"美少女","v":"美少女"},{"n":"轻小说","v":"轻小说"},{"n":"吸血鬼","v":"吸血鬼"},{"n":"女性向","v":"女性向"},{"n":"泡面番","v":"泡面番"},{"n":"欢乐向","v":"欢乐向"}]},{"key":"by","name":"排序","value":[{"n":"更新时间","v":"更新时间"},{"n":"名称","v":"名称"},{"n":"点击量","v":"点击量"}]}],
		"OVA":[{"key":"area","name":"地区","value":[{"n":"全部","v":"all"},{"n":"日本","v":"日本"},{"n":"中国","v":"中国"},{"n":"欧美","v":"欧美"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":"all"},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":"all"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":"all"},{"n":"搞笑","v":"搞笑"},{"n":"运动","v":"运动"},{"n":"励志","v":"励志"},{"n":"热血","v":"热血"},{"n":"战斗","v":"战斗"},{"n":"竞技","v":"竞技"},{"n":"校园","v":"校园"},{"n":"青春","v":"青春"},{"n":"爱情","v":"爱情"},{"n":"恋爱","v":"恋爱"},{"n":"冒险","v":"冒险"},{"n":"后宫","v":"后宫"},{"n":"百合","v":"百合"},{"n":"治愈","v":"治愈"},{"n":"萝莉","v":"萝莉"},{"n":"魔法","v":"魔法"},{"n":"悬疑","v":"悬疑"},{"n":"推理","v":"推理"},{"n":"奇幻","v":"奇幻"},{"n":"科幻","v":"科幻"},{"n":"游戏","v":"游戏"},{"n":"神魔","v":"神魔"},{"n":"恐怖","v":"恐怖"},{"n":"血腥","v":"血腥"},{"n":"机战","v":"机战"},{"n":"战争","v":"战争"},{"n":"犯罪","v":"犯罪"},{"n":"历史","v":"历史"},{"n":"社会","v":"社会"},{"n":"职场","v":"职场"},{"n":"剧情","v":"剧情"},{"n":"伪娘","v":"伪娘"},{"n":"耽美","v":"耽美"},{"n":"童年","v":"童年"},{"n":"教育","v":"教育"},{"n":"亲子","v":"亲子"},{"n":"真人","v":"真人"},{"n":"歌舞","v":"歌舞"},{"n":"肉番","v":"肉番"},{"n":"美少女","v":"美少女"},{"n":"轻小说","v":"轻小说"},{"n":"吸血鬼","v":"吸血鬼"},{"n":"女性向","v":"女性向"},{"n":"泡面番","v":"泡面番"},{"n":"欢乐向","v":"欢乐向"}]},{"key":"by","name":"排序","value":[{"n":"更新时间","v":"更新时间"},{"n":"名称","v":"名称"},{"n":"点击量","v":"点击量"}]}]
	},
	filter_url:'label={{fl.class or "all"}}&letter={{fl.letter or "all"}}&order={{fl.by or "更新时间"}}&region={{fl.area or "all"}}&resource=all&season=all&status=all&year={{fl.year or "all"}}',
	headers:{
		'User-Agent':'MOBILE_UA',
	},
	timeout:5000,
	class_name:'TV&剧场版&OVA',
	class_url:'TV&剧场版&OVA',
	play_parse:true,
	lazy:'js:/m3u8|mp4/.test(input)?input:/akamaized.net/.test(input)?input={jx:0,url:input,parse:0}:/ixigua/.test(input)?input={jx:0,url:input,parse:1}:input={jx:0,url:"https://jx.jsonplayer.com/player/?url="+input,parse:1}',
	limit:6,
	推荐:'json:AniRankPre;Title;PicSmall;NewTitle;AID',
	一级:'json:AniPreL;R动画名称;R封面图小;R新番标题;AID',
	二级:'js:try{let html=request(input);html=JSON.parse(html);let node=html.AniInfo;let playKeys=Object.keys(node).filter(function(x){return x.includes("R在线播放")&&x!=="R在线播放All"});log(playKeys);VOD={vod_id:node["AID"],vod_name:node["R动画名称"],vod_pic:node["R封面图小"],type_name:node["R动画种类"],vod_year:node["R首播年份"],vod_area:node["R地区"],vod_remarks:node["R新番标题"],vod_actor:node["R剧情类型"],vod_director:node["R制作公司"],vod_content:node["R简介"].strip(),};let playSource=[];let playUrl=[];playKeys.forEach(function(key){playSource.append(key);playUrl.append(node[key].replace(/ <play.*?play>/g,"$").replace(/\\n/g,"#"))});let vod_play_from=playSource.reverse().join("$$$");let vod_play_url=playUrl.reverse().join("$$$");VOD["vod_play_from"]=vod_play_from;VOD["vod_play_url"]=vod_play_url}catch(e){log("获取二级详情页发生错误:"+e.message)}',
	detailUrl:'/v2/detail/fyid',
	搜索:'json:AniPreL;R动画名称;R封面图小;R新番标题;AID',
}
