// import {double} from './example'
// import { asyncFn } from './example'
// import * as example from './example'
// import axios from 'axios'
// import { fetchMovieTitle } from './example'

// 1. jest testing의 전역 함수

// describe(): 테스트를 묶어내는 그룹
/*
describe('그룹1', () => {
  // 그룹안의 모든 테스트가 시작되기 전에 단 한번만 실행된다.
  beforeAll(() => {
    console.log('beforeAll!')
  })
  // 모든 테스트 이후 단 한번만 실행된다.
  afterAll(() => {
    console.log('afterAll!')
  })
  // 각 테스트 동작 직전에 실행된다.
  beforeEach(() => {
    console.log('beforeEach!')
  })
  // 각 테스트 동작 이후에 실행된다.
  afterEach(() => {
    console.log('afterEach!')
  })
  

 
  test('첫 테스트', () => {
    expect(123).toBe(123)
  }) 
  
  test('인수가 숫자 데이터입니다.', () => {
    expect(double(3)).toBe(6)
    expect(double(10)).toBe(20)
  })
  
  test('인수가 없습니다.', () => {
    expect(double()).toBe(0)
  })

})
*/

// 2. Jest의 Expect관련 메소드
// Matcher: 일치 도구
// .toBe(value): expect(실제값).toBe(기대값), 값을 비교하고 일치하면 통과한다.
// .toEqual(value): 참조형 데이터의 재귀를 통해 일치 여부를 확인한다.
// 다른 참조형 데이터여도 값만 확인한다!(=== 과 다름)  
// .not: !과 같음

// const userA = {
//   name: 'Hun',
//   age: 27
// }

// const userB = {
//   name: 'Neo',
//   age: 22
// }

// test('데이터가 일치해야 합니다', () => {
//   expect(userA.age).toBe(27)
//   expect(userA).toEqual({
//     name: 'Hun',
//     age: 27
//   })
// })

// test('데이터가 일치하지 않아야 합니다', () => {
//   expect(userB.name).toBe('Hun')
//   expect(userA).not.toBe(userA)
// })


// 3. 비동기 코드 테스트
/*
describe('비동기 테스트', () => {
  // test('done', (done) => {  // 매개변수: done, 비동기테스트가 언제 종료되는지를 명시
  //   asyncFn().then(res => {
  //     expect(res).toBe('Done!')
  //     // 매개변수: done은 함수처럼 사용가능
  //     done()
  //   })
  // })
  
  // test환경에서 얼마나 비동기를 기다려야하는지 알 수 없기 때문에
  // return 키워드로 callback 밖으로 반환을 해줘야한다.
  // test('then', () => {
  //   return asyncFn().then(res => {
  //     expect(res).toBe('Done!')
  //   })
  // })

  // .resolves: 비동기가 완료될 때 까지 기다리게 해준다
  // test('resolves', () => {
  //   return expect(asyncFn()).resolves.toBe('Done!')
  // })
  // test('resolves', () => expect(asyncFn()).resolves.toBe('Done!'))

  // async/await: 비동기 함수를 실핼할 때 callback자체를 비동기로 만들어 동작시킨다.
  // test('async/await', async () => {
  //   const res = await asyncFn()
  //   expect(res).toBe('Done!')
  // })

  // 비동기 테스트는 최대 대기 시간이 5초이므로 5초 이상의 시간을 기다려야할 경우
  // 세 번째 인수를 작성하여 필요에 따라 설정을 해주면 된다.
  // test('async/await', async () => {
  //   const res = await asyncFn()
  //   expect(res).toBe('Done!')
  // }, 7000)

  // 4. 모의(Mock)함수: (6초가 걸리는) 함수를 무시하고 우리가 원하는 값을 반환하게,
  // 가짜로 만들어서 테스트 로직에서 동작시킨다.
  // test('async/await', async () => {
  //   jest.spyOn(example, 'asyncFn')
  //     .mockResolvedValue('Done!')
  //   const res = await example.asyncFn()
  //   expect(res).toBe('Done!')
  // }, 7000)


  // 5. omdbapi 모의 함수 테스트
  test('영화 제목 변환', async () => {
    // 모의 함수를 이용해 임의로 정의한 데이터를 반환하여 테스트를 한다.
    axios.get = jest.fn(() => {
      return new Promise(resolve => {
        resolve({
          data: {
            Title: 'Frozen II'
          }
        })
      })
    })
    const title = await fetchMovieTitle()
    expect(title).toBe('Frozen ii??  ') 
  })
})
*/


// VTU 테스트

import { mount } from '@vue/test-utils'
import Example from './Example.vue'

test('메세지를 변경합니다', async () => {
  const wrapper = mount(Example)
  // 전제: wrapper.vm === this
  expect(wrapper.vm.msg).toBe('Hello Vue test utils!')
  await wrapper.setData({
    msg: 'Hello Hun!'
  })
  expect(wrapper.vm.msg).toBe('Hello Hun!')
  expect(wrapper.find('div').text()).toBe('Hello Hun?')
})