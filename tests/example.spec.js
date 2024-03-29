// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173'
// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('app shows random fact image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  // const image = await page.getByRole('img')

  const textContent = await text.textContent()
  // const imgaSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0) // que sea mayor a cero
  // await expect(imgaSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy() // tiene que empezar con el prefijo
})
