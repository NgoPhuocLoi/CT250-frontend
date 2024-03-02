<script setup></script>
<template>
  <div class="p-5 w-full border">
    <div>
      <RouterLink
        to="/tai-khoan/quan-ly-don-hang/123"
        class="flex w-full gap-5"
      >
        <div class="w-[150px] flex-shrink-0">
          <img
            class="w-[150px] h-[150px]"
            src="https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMDhRVEFCODg4MDUwMS83ZjUwMWQwMy04ZDY4LTRjNGEtOTA0MC1mZTM0MjdkNDczZDJfRUVEMTY5ODJCNzQwODRBM0VDQUI3NEY3OTg1MkMxMDEuanBn0"
            alt=""
          />
        </div>
        <div class="text-[16px] w-full">
          <div class="pb-2 border-b w-full border-gray-300 flex">
            <div>
              <div class="flex">
                <div class="w-[150px]">Số lượng</div>
                <div>: 1 sản phẩm</div>
              </div>

              <div class="flex">
                <div class="w-[150px]">Tổng tiền hàng</div>
                <div>: 350.000 VNĐ</div>
              </div>

              <div class="flex">
                <div class="w-[150px]">Phí vận chuyển</div>
                <div>: 30.000 VNĐ</div>
              </div>
            </div>

            <div class="ml-auto text-xl text-yellow-400">Chờ thanh toán</div>
          </div>

          <div class="text-xl text-orange-500 mt-2 text-right w-full">
            Tổng thanh toán: 380.000 VNĐ
          </div>
        </div>
      </RouterLink>
    </div>

    <div></div>
  </div>
</template>
