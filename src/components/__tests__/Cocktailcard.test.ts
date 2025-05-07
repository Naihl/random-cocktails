import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CocktailCard from '../CocktailCard.vue'

describe('CocktailCard.vue', () => {
  const mockCocktail = {
    strDrink: 'Gin and Tonic',
    strDrinkThumb: 'www.thecocktaildb.com/images/ingredients/gin-small.png',
    strInstructions: 'Pour the gin and the tonic water into a highball glass almost filled with ice cubes.',
    strIngredient1: 'Gin',
    strMeasure1: '2 oz',
    strIngredient2: 'Tonix wate',
    strMeasure2: '5 oz',
    strIngredient3: 'Lime',
    strMeasure3: '1',
    strIngredient4: null,
    strMeasure4: null,
  }

  it('renders the cocktail name', () => {
    const wrapper = mount(CocktailCard, {
      props: { cocktail: mockCocktail },
    })
    expect(wrapper.text()).toContain('Gin and Tonic')
  })

  it('renders the cocktail image', () => {
    const wrapper = mount(CocktailCard, {
      props: { cocktail: mockCocktail },
    })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('www.thecocktaildb.com/images/ingredients/gin-small.png')
    expect(img.attributes('alt')).toBe('Gin and Tonic')
  })

  it('renders the cocktail instructions', () => {
    const wrapper = mount(CocktailCard, {
      props: { cocktail: mockCocktail },
    })
    expect(wrapper.text()).toContain('Pour the gin and the tonic water into a highball glass almost filled with ice cubes.')
  })

  it('renders the list of ingredients', () => {
    const wrapper = mount(CocktailCard, {
      props: { cocktail: mockCocktail },
    })
    const ingredients = wrapper.findAll('li')
    expect(ingredients).toHaveLength(3)
    expect(ingredients[0].text()).toBe('2 oz Gin')
    expect(ingredients[1].text()).toBe('5 oz Tonix wate')
    expect(ingredients[2].text()).toBe('1 Lime')
  })
})