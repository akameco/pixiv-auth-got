import test from 'ava';
import isPlainObj from 'is-plain-obj';
import M from './';

test('title', async t => {
	const username = process.env.USERNAME;
	const password = process.env.PASSWORD;
	const m = new M(username, password);
	const result = await m.got('https://app-api.pixiv.net/v1/illust/ranking', {mode: 'day'});
	t.true(isPlainObj(result.body));
});
