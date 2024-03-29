jest.mock('./axios.instance');
import { axiosInstance, Todo } from './axios.instance';

describe('axios tests should', () => {
  test('dummy', async () => {
    const users = [{ name: 'Bob' }, { name: 'Bob' }, { name: 'Bob' }];
    const resp = { data: users };
    axiosInstance.get.mockResolvedValue(resp);
    expect((await axiosInstance.get('users')).data).toHaveLength(3);
  });

  test('dummy', () => {
    const users = [{ name: 'Bob' }, { name: 'Bob' }, { name: 'Bob' }];
    const resp = { data: users };
    axiosInstance.get.mockResolvedValue(resp);
    axiosInstance.get('users').then((r) => {
      expect(r.data).toHaveLength(3);
    });
  });
});
