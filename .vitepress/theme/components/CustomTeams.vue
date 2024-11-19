<script setup lang='ts'>
import { VPTeamMembers, VPTeamPage, VPTeamPageTitle } from 'vitepress/theme';
import { onMounted, ref } from 'vue';

const members = ref([ ]);
const contributors = ref([ ]);

const getTeams = () => {
	 fetch('https://uni-halo.925i.cn/data/team.json').then(res => res.json()).then(res => {
		 contributors.value = res.contributors;
		 members.value = res.members;
	}).catch(err => {
		console.error('日志：获取团队信息失败，', err);
	});
};

onMounted(() => {
	getTeams();
	members.value = shuffleArray(members.value);
	contributors.value = shuffleArray(contributors.value);
});

function shuffleArray(array) {
	const firstFive = array.slice(0, 3);
	const remaining = array.slice(3);

	for (let i = firstFive.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[firstFive[i], firstFive[j]] = [firstFive[j], firstFive[i]];
	}

	for (let i = remaining.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[remaining[i], remaining[j]] = [remaining[j], remaining[i]];
	}
	return firstFive.concat(remaining);
}
</script>

<template>
	<VPTeamPage>
		<VPTeamPageTitle>
			<template #title>
				<span style='font-size: 26px'>核心团队</span>
			</template>
			<template #lead>
				核心开发团队，排名不分先后
			</template>
		</VPTeamPageTitle>
		<VPTeamMembers
			:members='members'
		/>
		<VPTeamPageTitle>
			<template #title>
				<span style='font-size: 26px'>社区贡献</span>
			</template>
			<template #lead>
				参与贡献者，排名不分先后
			</template>
		</VPTeamPageTitle>
		<VPTeamMembers
			:members='contributors'
		/>
	</VPTeamPage>

</template>
