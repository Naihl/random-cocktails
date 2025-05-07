import { it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'

it('renders the loading state initially', () => {
  const wrapper = mount(HomeView)
  expect(wrapper.text()).toContain('Loading cocktails...')
})
it('reloads the page when the refresh button is clicked', async () => {
  const mockReload = vi.fn()
  Object.defineProperty(window, 'location', {
    value: { reload: mockReload },
    writable: true,
  })

  const wrapper = mount(HomeView)
  const refreshButton = wrapper.find('button')
  await refreshButton.trigger('click')

  expect(mockReload).toHaveBeenCalledOnce()
})