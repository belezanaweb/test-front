export const getBilling = (data: any) => ({
  shippingTotal: data?.shippingTotal,
  subTotal: data?.subTotal,
  discount: data?.discount,
  total: data?.total,
})