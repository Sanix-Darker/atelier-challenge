/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import controllers from './cat.controller.js';


describe('GetCatsPeer', () => {
  const resSendSpy = jest.fn(() => {
    return this;
  });
  const resStatusSpy = jest.fn();
  const mockDataCatPeer = async () =>
        await controllers.getPeer(
          { query: { } },
          { send: resSendSpy, status: resStatusSpy }
      );

  test('Should res.send to have been called.', async () => {
    await mockDataCatPeer();
    expect(resSendSpy).toHaveBeenCalled();
  });

  test('Should req.status to have been called.', async () => {
    await mockDataCatPeer();
    expect(resStatusSpy).toHaveBeenCalled();
  });
});


describe('GetCatsScores', () => {
  const resSendSpy = jest.fn(() => {
    return this;
  });
  const resStatusSpy = jest.fn();
  const mockDataCatsScores = async () =>
      await controllers.getScores(
        { query: { page: 1 } },
        { send: resSendSpy, status: resStatusSpy }
    );

  test('Should res.send to have been called.', async () => {
    await mockDataCatsScores();
    expect(resSendSpy).toHaveBeenCalled();
  });

  test('Should req.status to have been called.', async () => {
    await mockGetCatsScores();
    expect(resStatusSpy).toHaveBeenCalled();
  });
});

describe('updateCatScore', () => {
  const resSendSpy = jest.fn(() => {
    return this;
  });
  const resStatusSpy = jest.fn();
  const mockDataUpdateCatsScores = async () =>
        await controllers.updateScore(
          { params: { cat_id: 1 } },
          { send: resSendSpy, status: resStatusSpy }
      );

  test('Should res.send to have been called.', async () => {
    await mockDataUpdateCatsScores();
    expect(resSendSpy).toHaveBeenCalled();
  });

  test('Should req.status to have been called.', async () => {
    await mockDataUpdateCatsScores();
    expect(resStatusSpy).toHaveBeenCalled();
  });
});
