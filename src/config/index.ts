export const AppConfigs = {
	/**
	 * 获取基础URL
	 * @returns {string} - 返回基础URL
	 */
	getBaseUrl() {
		if (import.meta.env.DEV) {
			return '';
		} else {
			return 'https://uni-halo.925i.cn';
		}
	}
};
