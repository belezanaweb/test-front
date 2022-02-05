import React from 'react'
import * as TestRenderer from 'react-test-renderer'
import { MemoryRouter, Routes, Route } from 'react-router'
import Cart from '../pages/Cart'
import Payment from '../pages/Payment'
import Confirmation from '../pages/Confirmation'

describe('App', () => {
  it('render snapshot cart parge', () => {
    let renderer: TestRenderer.ReactTestRenderer
    TestRenderer.act(() => {
      renderer = TestRenderer.create(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </MemoryRouter>
      )
    })

    // data has not been loaded yet
    expect(renderer.toJSON()).toMatchInlineSnapshot(`
                  <main>
                    <div
                      className="sc-bdvvtL hchXHT"
                    >
                      <ul>
                        <li>
                          <a
                            aria-current="page"
                            className="title selected"
                            href="/"
                            onClick={[Function]}
                          >
                            SACOLA
                          </a>
                        </li>
                        <li>
                          <a
                            className="title"
                            href="/payment"
                            onClick={[Function]}
                          >
                            PAGAMENTO
                          </a>
                        </li>
                        <li>
                          <a
                            className="title"
                            href="/confirmation"
                            onClick={[Function]}
                          >
                            CONFIRMAÇÃO
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="sc-egiyK hytFim"
                    >
                      <div
                        className="box"
                      >
                        <div>
                          <h2
                            className="sc-dkPtRN hEgYgW"
                          >
                            Produtos
                          </h2>
                          <div
                            className="sc-gsDKAQ kaOEHb"
                          />
                        </div>
                        <div
                          className="sc-jrQzAO DBPFX"
                        >
                          <div
                            className="sc-kDTinF hPDOMe product"
                          >
                            <h2
                              className="sc-iqseJM kHSfAR"
                            >
                              PRODUTOS
                            </h2>
                            <h2
                              className="sc-iqseJM kHSfAR"
                            />
                          </div>
                          <div
                            className="sc-kDTinF hPDOMe shipping"
                          >
                            <h2
                              className="sc-iqseJM kHSfAR"
                            >
                              FRETE
                            </h2>
                            <h2
                              className="sc-iqseJM kHSfAR"
                            />
                          </div>
                          <div
                            className="sc-kDTinF hPDOMe discount"
                          >
                            <h2
                              className="sc-iqseJM kHSfAR discountColor"
                            >
                              DESCONTO
                            </h2>
                            <h2
                              className="sc-iqseJM kHSfAR discountColor"
                            />
                          </div>
                          <div
                            className="sc-kDTinF hPDOMe"
                          >
                            <h2
                              className="sc-iqseJM kHSfAR total"
                            >
                              TOTAL
                            </h2>
                            <h2
                              className="sc-iqseJM kHSfAR total"
                            >
                              R$ NaN
                            </h2>
                          </div>
                        </div>
                      </div>
                      <button
                        className="sc-crHmcD bZMXcF"
                        disabled={false}
                        onClick={[Function]}
                      >
                        Seguir para o pagamento
                      </button>
                    </div>
                  </main>
              `)
  })

  it('render snapshot payment page', () => {
    let renderer: TestRenderer.ReactTestRenderer
    TestRenderer.act(() => {
      renderer = TestRenderer.create(
        <MemoryRouter initialEntries={['/payment']}>
          <Routes>
            <Route path="/" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </MemoryRouter>
      )
    })

    // data has not been loaded yet
    expect(renderer.toJSON()).toMatchInlineSnapshot(`
            <main>
              <div
                className="sc-bdvvtL hchXHT"
              >
                <ul>
                  <li>
                    <a
                      className="title"
                      href="/"
                      onClick={[Function]}
                    >
                      SACOLA
                    </a>
                  </li>
                  <li>
                    <a
                      aria-current="page"
                      className="title selected"
                      href="/payment"
                      onClick={[Function]}
                    >
                      PAGAMENTO
                    </a>
                  </li>
                  <li>
                    <a
                      className="title"
                      href="/confirmation"
                      onClick={[Function]}
                    >
                      CONFIRMAÇÃO
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="sc-bqiRlB kPJdAR"
              >
                <div
                  className="box"
                >
                  <div>
                    <h2
                      className="sc-dkPtRN hEgYgW"
                    >
                      CARTÃO DE CRÉDITO
                    </h2>
                    <div
                      className="sc-gsDKAQ kaOEHb"
                    >
                      <form
                        onSubmit={[Function]}
                      >
                        <div
                          className="sc-eCImPb eMfaUz"
                        >
                          <label
                            className="sc-jRQBWg fSZWEb"
                          >
                            Número do cartão:
                          </label>
                          <input
                            className="inputMask"
                            defaultValue=""
                            id="cardnumber"
                            name="number"
                            onBlur={[Function]}
                            onChange={[Function]}
                            onFocus={[Function]}
                            onMouseDown={[Function]}
                            onPaste={[Function]}
                            placeholder="____.____.____.____"
                          />
                        </div>
                        <div
                          className="sc-eCImPb eMfaUz"
                        >
                          <label
                            className="sc-jRQBWg fSZWEb"
                          >
                            Nome do Titular:
                          </label>
                          <input
                            className="inputMask"
                            defaultValue=""
                            id="cardName"
                            name="name"
                            onBlur={[Function]}
                            onChange={[Function]}
                            placeholder="Como no cartão"
                          />
                        </div>
                        <div
                          className="sc-iCfMLu vlccp"
                        >
                          <div
                            className="sc-eCImPb eMfaUz"
                          >
                            <label
                              className="sc-jRQBWg fSZWEb"
                            >
                              Validade (mês/ano):
                            </label>
                            <input
                              className="inputMask"
                              defaultValue=""
                              id="cardExpiry"
                              name="expiry"
                              onBlur={[Function]}
                              onChange={[Function]}
                              onFocus={[Function]}
                              onMouseDown={[Function]}
                              onPaste={[Function]}
                              placeholder="__/____"
                            />
                          </div>
                          <div
                            className="sc-eCImPb eMfaUz"
                          >
                            <label
                              className="sc-jRQBWg fSZWEb"
                            >
                              CVV:
                            </label>
                            <input
                              className="inputMask"
                              defaultValue=""
                              id="cardCvv"
                              maxLength="3"
                              name="cvv"
                              onBlur={[Function]}
                              onChange={[Function]}
                              placeholder="___"
                              type="password"
                            />
                          </div>
                        </div>
                        <button
                          className="sc-furwcr cGvjjN"
                          id="formSubmitCard"
                          type="submit"
                        />
                      </form>
                    </div>
                  </div>
                  <div
                    className="sc-jrQzAO UKKnL"
                  >
                    <div
                      className="sc-kDTinF hPDOMe product"
                    >
                      <h2
                        className="sc-iqseJM kHSfAR"
                      >
                        PRODUTOS
                      </h2>
                      <h2
                        className="sc-iqseJM kHSfAR"
                      />
                    </div>
                    <div
                      className="sc-kDTinF hPDOMe shipping"
                    >
                      <h2
                        className="sc-iqseJM kHSfAR"
                      >
                        FRETE
                      </h2>
                      <h2
                        className="sc-iqseJM kHSfAR"
                      />
                    </div>
                    <div
                      className="sc-kDTinF hPDOMe discount"
                    >
                      <h2
                        className="sc-iqseJM kHSfAR discountColor"
                      >
                        DESCONTO
                      </h2>
                      <h2
                        className="sc-iqseJM kHSfAR discountColor"
                      />
                    </div>
                    <div
                      className="sc-kDTinF hPDOMe"
                    >
                      <h2
                        className="sc-iqseJM kHSfAR total"
                      >
                        TOTAL
                      </h2>
                      <h2
                        className="sc-iqseJM kHSfAR total"
                      >
                        R$ NaN
                      </h2>
                    </div>
                  </div>
                </div>
                <button
                  className="sc-crHmcD bZMXcF"
                  disabled={false}
                  id="buttonForm"
                  onClick={[Function]}
                  type="submit"
                >
                  FINALIZAR O PEDIDO
                </button>
              </div>
            </main>
          `)
  })

  it('render snapshot confirmation page', () => {
    let renderer: TestRenderer.ReactTestRenderer
    TestRenderer.act(() => {
      renderer = TestRenderer.create(
        <MemoryRouter initialEntries={['/confirmation']}>
          <Routes>
            <Route path="/" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </MemoryRouter>
      )
    })

    // data has not been loaded yet
    expect(renderer.toJSON()).toMatchInlineSnapshot(`
            <main>
              <div
                className="sc-bdvvtL hchXHT"
              >
                <ul>
                  <li>
                    <a
                      className="title"
                      href="/"
                      onClick={[Function]}
                    >
                      SACOLA
                    </a>
                  </li>
                  <li>
                    <a
                      className="title"
                      href="/payment"
                      onClick={[Function]}
                    >
                      PAGAMENTO
                    </a>
                  </li>
                  <li>
                    <a
                      aria-current="page"
                      className="title selected"
                      href="/confirmation"
                      onClick={[Function]}
                    >
                      CONFIRMAÇÃO
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="sc-ksdxgE iwvPKg"
              >
                <div
                  className="sc-hBUSln cUUCgE"
                >
                  <img
                    alt="Check"
                    className="check"
                    src="check.png"
                  />
                  <img
                    alt="Circle"
                    src="circle.png"
                  />
                </div>
                <h2>
                  COMPRA EFETUADA COM SUCESSO
                </h2>
              </div>
              <div
                className="sc-fotOHu kaSDIX"
              >
                <div>
                  <h2
                    className="sc-dkPtRN hEgYgW"
                  >
                    PAGAMENTO
                  </h2>
                  <div
                    className="sc-gsDKAQ kaOEHb"
                  >
                    <div>
                      <h2
                        className="sc-pVTFL euyLxO"
                      >
                        ****.****.****.
                      </h2>
                      <h2
                        className="sc-pVTFL euyLxO"
                      />
                      <h2
                        className="sc-pVTFL euyLxO"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h2
                    className="sc-dkPtRN hEgYgW"
                  >
                    CARTÃO DE CRÉDITO
                  </h2>
                  <div
                    className="sc-gsDKAQ kaOEHb"
                  />
                </div>
                <div
                  className="sc-jrQzAO UKKnL"
                >
                  <div
                    className="sc-kDTinF hPDOMe product"
                  >
                    <h2
                      className="sc-iqseJM kHSfAR"
                    >
                      PRODUTOS
                    </h2>
                    <h2
                      className="sc-iqseJM kHSfAR"
                    />
                  </div>
                  <div
                    className="sc-kDTinF hPDOMe shipping"
                  >
                    <h2
                      className="sc-iqseJM kHSfAR"
                    >
                      FRETE
                    </h2>
                    <h2
                      className="sc-iqseJM kHSfAR"
                    />
                  </div>
                  <div
                    className="sc-kDTinF hPDOMe discount"
                  >
                    <h2
                      className="sc-iqseJM kHSfAR discountColor"
                    >
                      DESCONTO
                    </h2>
                    <h2
                      className="sc-iqseJM kHSfAR discountColor"
                    />
                  </div>
                  <div
                    className="sc-kDTinF hPDOMe"
                  >
                    <h2
                      className="sc-iqseJM kHSfAR total"
                    >
                      TOTAL
                    </h2>
                    <h2
                      className="sc-iqseJM kHSfAR total"
                    >
                      R$ NaN
                    </h2>
                  </div>
                </div>
              </div>
            </main>
          `)
  })
})
