---
title: MediaTek MUXs from Mainline kernel
---

https://github.com/TeamYogaBlade2/note/wiki/Clock-MUX

| Group | SoC | Parent 1 | Parent 2 | Parent 3 | Parent 4 | Parent 5 | Parent 6 | Parent 7 | Parent 8 | Parent 9 | Parent 10 | Parent 11 | Parent 12 | Parent 13 | Parent 14 | Parent 15 | Parent 16 | Parent 17 | Parent 18 | Parent 19 | Parent 20 | Parent 21 | Parent 22 | Parent 23 | Parent 24 | Parent 25 | Parent 26 | Parent 27 | Parent 28 | Parent 29 | Parent 30 | Parent 31 | Parent 32 | Parent 33 | Parent 34 | Parent 35 | Parent 36 | Parent 37 | Parent 38 | Parent 39 | Parent 40 | Parent 41 | Parent 42 | Parent 43 | Parent 44 | Parent 45 | Parent 46 | Parent 47 | Parent 48 | Parent 49 | Parent 50 | Parent 51 | Parent 52 | Parent 53 | Parent 54 | Parent 55 | Parent 56 | Parent 57 | Parent 58 | Parent 59 | Parent 60 | Parent 61 | Parent 62 | Parent 63 | Parent 64 | Parent 65 | Parent 66 | Parent 67 | Parent 68 | Parent 69 | Parent 70 | Parent 71 | Parent 72 | Parent 73 | Parent 74 | Parent 75 | Parent 76 | Parent 77 | Parent 78 | Parent 79 | Parent 80 | Parent 81 | Parent 82 | Parent 83 | Parent 84 | Parent 85 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| a1sys_hp_parents | mt2712 | clk26m | apll1_ck | apll1_d2 | apll1_d4 | apll1_d8 | apll1_d3 |
| a1sys_hp_parents | mt7622 | clkxtal | aud1pll_ck | aud2pll_ck | clkxtal |
| a1sys_hp_parents | mt8188 | clk26m | apll1_d4 |
| a1sys_hp_parents | mt8195 | clk26m | apll1_d4 |
| a1sys_parents | mt7981 | cb_cksq_40m | apll2_d4 |
| a1sys_parents | mt7988 | top_xtal | apll2_d4 |
| a2sys_hp_parents | mt2712 | clk26m | apll2_ck | apll2_d2 | apll2_d4 | apll2_d8 | apll2_d3 |
| a2sys_parents | mt8188 | clk26m | apll2_d4 |
| a2sys_parents | mt8195 | clk26m | apll2_d4 |
| a3sys_parents | mt8188 | clk26m | apll3_d4 | apll4_d4 | apll5_d4 |
| a3sys_parents | mt8195 | clk26m | apll3_d4 | apll4_d4 | apll5_d4 | hdmirx_apll_d3 | hdmirx_apll_d4 | hdmirx_apll_d6 |
| a4sys_parents | mt8188 | clk26m | apll3_d4 | apll4_d4 | apll5_d4 |
| a_tuner_parents | mt7981 | cb_cksq_40m | apll2_d4 | m_d8_d2 |
| adsp_bus_parents | mt8186 | clk26m | ulposc1_d2 | mainpll_d5 | mainpll_d2_d2 | mainpll_d3 | mainpll_d2 | univpll_d3 |
| adsp_parents | mt6779 | clk26m | mainpll_d3 | univpll_d2_d4 | univpll_d2 | mmpll_d4 | adsppll_d4 | adsppll_d6 |
| adsp_parents | mt8188 | clk26m | clk13m | mainpll_d6 | mainpll_d5_d2 | univpll_d4_d4 | univpll_d4 | ulposc1_d2 | ulposc1_ck1 | adsppll | adsppll_d2 | adsppll_d4 | adsppll_d8 |
| adsp_parents | mt8192 | clk26m | mainpll_d6 | mainpll_d5_d2 | univpll_d4_d4 | univpll_d4 | univpll_d6 | ulposc | adsppll_ck |
| adsp_parents | mt8195 | clk26m | clk26m_d2 | mainpll_d6 | mainpll_d5_d2 | univpll_d4_d4 | univpll_d4 | univpll_d6 | ulposc1 | adsppll | adsppll_d2 | adsppll_d4 | adsppll_d8 |
| adsp_parents | mt8196 | clk26m | adsppll |
| adsp_uarthub_b_parents | mt8196 | clk26m | univpll_d6_d4 | univpll_d6_d2 |
| aes_fde_parents | mt6765 | clk26m | msdcpll_ck | univpll_d3 | univpll2_d2 | univpll1_d2 | syspll1_d2 |
| aes_fde_parents | mt8186 | clk26m | univpll_d3 | mainpll_d2_d2 | univpll_d5 |
| aes_fde_parents | mt8195 | clk26m | mainpll_d4_d2 | mainpll_d6 | mainpll_d4_d4 | univpll_d4_d2 | univpll_d6 |
| aes_fde_parents | mt8365 | clk26m | msdcpll_ck | univpll_d3 | univpll2_d2 | univpll1_d2 | syspll1_d2 |
| aes_msdcfde_parents | mt8186 | clk26m | univpll_d3 | mainpll_d3 | univpll_d2_d2 | mainpll_d2_d2 | mainpll_d2_d4 |
| aes_msdcfde_parents | mt8188 | clk26m | mainpll_d4_d2 | mainpll_d6 | mainpll_d4_d4 | univpll_d4_d2 | univpll_d6 |
| aes_msdcfde_parents | mt8192 | clk26m | mainpll_d4_d2 | mainpll_d6 | mainpll_d4_d4 | univpll_d4_d2 | univpll_d6 |
| aes_ufsfde_parents | mt8192 | clk26m | mainpll_d4 | mainpll_d4_d2 | mainpll_d6 | mainpll_d4_d4 | univpll_d4_d2 | univpll_d6 |
| aes_ufsfde_parents | mt8196 | clk26m | mainpll_d4_d4 | univpll_d6_d2 | mainpll_d4_d2 | univpll_d6 | mainpll_d4 |
| ahb_infra_parents | mt8167 | clk_null | clk26m_ck | mainpll_d11 | clk_null | mainpll_d12 | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | mainpll_d10 |
| ahb_infra_parents | mt8516 | clk_null | clk26m_ck | mainpll_d11 | clk_null | mainpll_d12 | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | mainpll_d10 |
| anc_md32_parents | mt6797 | clk26m | syspll1_d2 | univpll_d5 |
| ap2cnn_host_parents | mt7981 | cb_cksq_40m | net1_d8_d4 |
| ap2conn_host_parents | mt8196 | clk26m | mainpll_d7_d4 |
| ap2wbmcu_parents | mt7629 | clkxtal | syspll1_d2 | univ48m | syspll1_d8 | univpll2_d4 | syspll_d7 | syspll2_d2 | univpll2_d2 |
| apll1_ck_parents | mt7622 | aud1_sel | aud2_sel |
| apll1_parents | mt8188 | clk26m | apll1_d4 |
| apll1_parents | mt8195 | clk26m | apll1_d4 |
| apll1_ref_parents | mt2712 | clkaud_ext_i_2 | clkaud_ext_i_1 | clki2si0_mck_i | clki2si1_mck_i | clki2si2_mck_i | clktdmin_mclk_i | clki2si2_mck_i | clktdmin_mclk_i |
| apll2_parents | mt8188 | clk26m | apll2_d4 |
| apll2_parents | mt8195 | clk26m | apll2_d4 |
| apll3_parents | mt8188 | clk26m | apll3_d4 |
| apll3_parents | mt8195 | clk26m | apll3_d4 |
| apll4_parents | mt8188 | clk26m | apll4_d4 |
| apll4_parents | mt8195 | clk26m | apll4_d4 |
| apll5_parents | mt8188 | clk26m | apll5_d4 |
| apll5_parents | mt8195 | clk26m | apll5_d4 |
| apll_i2s_m_parents | mt8192 | aud_1_sel | aud_2_sel |
| apll_i2s_parents | mt8365 | aud_1_sel | aud_2_sel |
| apll_m_parents | mt8196 | aud_1 | aud_2 |
| apll_mck_parents | mt8186 | top_aud_1 | top_aud_2 |
| apll_parents | mt2701 | clk26m | audpll | audpll_d4 | audpll_d8 | audpll_d16 | audpll_d24 | clk26m | clk26m |
| apll_parents | mt2712 | clk26m | apll1_ck | apll1_d2 | apll1_d4 | apll1_d8 | apll1_d16 | apll2_ck | apll2_d2 | apll2_d4 | apll2_d8 | apll2_d16 | clk26m | clk26m |
| apll_parents | mt8135 | clk26m | apll_ck | apll_d4 | apll_d8 | apll_d16 | apll_d24 |
| apu_parents | mt8365 | clk26m | univpll_d2 | apupll_ck | mmpll_ck | syspll_d3 | univpll1_d2 | syspll1_d2 | syspll1_d4 |
| arm_db_main_parents | mt7981 | cb_cksq_40m | cb_net2_d6 |
| asm_h_parents | mt8188 | clk26m | univpll_d6_d4 | univpll_d6_d2 | mainpll_d5_d2 |
| asm_l_parents | mt2712 | clk26m | univpll2_d4 | univpll2_d2 | syspll_d5 |
| asm_l_parents | mt7622 | clkxtal | syspll_d5 | univpll2_d2 | univpll2_d4 |
| asm_l_parents | mt8188 | clk26m | univpll_d6_d4 | univpll_d6_d2 | mainpll_d5_d2 |
| asm_parents | mt2701 | clk26m | univpll2_d4 | univpll2_d2 | syspll_d5 |
| asm_parents | mt8195 | clk26m | univpll_d6_d4 | univpll_d6_d2 | mainpll_d5_d2 |
| atb_parents | mt2712 | clk26m | syspll1_d2 | univpll_d5 | syspll_d5 |
| atb_parents | mt6765 | clk26m | syspll1_d4 | syspll1_d2 |
| atb_parents | mt6779 | clk26m | mainpll_d2_d2 | mainpll_d5 |
| atb_parents | mt6797 | clk26m | syspll1_d2 | syspll_d5 |
| atb_parents | mt7622 | clkxtal | syspll1_d2 | syspll_d5 |
| atb_parents | mt7629 | clkxtal | syspll1_d2 | syspll_d5 |
| atb_parents | mt8173 | clk26m | syspll1_d2 | univpll_d5 | dmpll_d2 |
| atb_parents | mt8183 | clk26m | syspll_d2_d2 | syspll_d5 |
| atb_parents | mt8188 | clk26m | mainpll_d4_d2 | mainpll_d5_d2 |
| atb_parents | mt8192 | clk26m | mainpll_d4_d2 | mainpll_d5_d2 |
| atb_parents | mt8195 | clk26m | mainpll_d4_d2 | mainpll_d5_d2 |
| atb_parents | mt8196 | clk26m | mainpll_d5_d2 | mainpll_d4_d2 | mainpll_d6 |
| atb_parents | mt8365 | clk26m | syspll1_d4 | syspll1_d2 |
| atb_sel_parents | mt6735 | clk26m | syspll1_d2 | syspll_d5 | dmpll |
| aud1_parents | mt7622 | clkxtal | aud1pll_ck |
| aud1_parents | mt7629 | clkxtal |
| aud1_parents | mt8167 | clk26m_ck | apll1_ck |
| aud1_parents | mt8516 | clk26m_ck | apll1_ck |
| aud2_parents | mt7622 | clkxtal | aud2pll_ck |
| aud2_parents | mt8167 | clk26m_ck | apll2_ck |
| aud2_parents | mt8516 | clk26m_ck | apll2_ck |
| aud2dvd_parents | mt2701 | a1sys_hp_ck | a2sys_hp_ck |
| aud_1_2_sel_parents | mt6735 | clk26m | apll1 |
| aud_1_parents | mt2712 | clk26m | apll1_ck | univpll2_d4 | univpll2_d8 |
| aud_1_parents | mt6765 | clk26m | apll1_ck |
| aud_1_parents | mt6779 | clk26m | apll1_ck |
| aud_1_parents | mt6795 | clk26m | apll1_ck | univpll2_d4 | univpll2_d8 |
| aud_1_parents | mt6797 | clk26m | apll1_ck |
| aud_1_parents | mt8173 | clk26m | apll1_ck | univpll2_d4 | univpll2_d8 |
| aud_1_parents | mt8183 | clk26m | apll1_ck |
| aud_1_parents | mt8186 | clk26m | apll1 |
| aud_1_parents | mt8192 | clk26m | apll1_ck |
| aud_1_parents | mt8196 | clk26m | vlp_apll1 |
| aud_1_parents | mt8365 | clk26m | apll1_ck |
| aud_2_parents | mt2712 | clk26m | apll2_ck | univpll2_d4 | univpll2_d8 |
| aud_2_parents | mt6779 | clk26m | apll2_ck |
| aud_2_parents | mt6795 | clk26m | apll2_ck | univpll2_d4 | univpll2_d8 |
| aud_2_parents | mt6797 | clk26m | apll2_ck |
| aud_2_parents | mt8173 | clk26m | apll2_ck | univpll2_d4 | univpll2_d8 |
| aud_2_parents | mt8183 | clk26m | apll2_ck |
| aud_2_parents | mt8186 | clk26m | apll2 |
| aud_2_parents | mt8192 | clk26m | apll2_ck |
| aud_2_parents | mt8196 | clk26m | vlp_apll2 |
| aud_2_parents | mt8365 | clk26m | apll2_ck |
| aud_apll1_parents | mt2712 | apll1 | clkaud_ext_i_1 |
| aud_apll2_parents | mt2712 | apll2 | clkaud_ext_i_2 |
| aud_engen1_parents | mt6765 | clk26m | apll1_d2 | apll1_d4 | apll1_d8 |
| aud_engen1_parents | mt6779 | clk26m | apll1_d2 | apll1_d4 | apll1_d8 |
| aud_engen1_parents | mt8167 | clk26m_ck | rg_apll1_d2_en | rg_apll1_d4_en | rg_apll1_d8_en |
| aud_engen1_parents | mt8183 | clk26m | apll1_d2 | apll1_d4 | apll1_d8 |
| aud_engen1_parents | mt8186 | clk26m | apll1_d2 | apll1_d4 | apll1_d8 |
| aud_engen1_parents | mt8192 | clk26m | apll1_d2 | apll1_d4 | apll1_d8 |
| aud_engen1_parents | mt8365 | clk26m | apll1_d2 | apll1_d4 | apll1_d8 |
| aud_engen1_parents | mt8516 | clk26m_ck | rg_apll1_d2_en | rg_apll1_d4_en | rg_apll1_d8_en |
| aud_engen2_parents | mt6779 | clk26m | apll2_d2 | apll2_d4 | apll2_d8 |
| aud_engen2_parents | mt8167 | clk26m_ck | rg_apll2_d2_en | rg_apll2_d4_en | rg_apll2_d8_en |
| aud_engen2_parents | mt8183 | clk26m | apll2_d2 | apll2_d4 | apll2_d8 |
| aud_engen2_parents | mt8186 | clk26m | apll2_d2 | apll2_d4 | apll2_d8 |
| aud_engen2_parents | mt8192 | clk26m | apll2_d2 | apll2_d4 | apll2_d8 |
| aud_engen2_parents | mt8365 | clk26m | apll2_d2 | apll2_d4 | apll2_d8 |
| aud_engen2_parents | mt8516 | clk26m_ck | rg_apll2_d2_en | rg_apll2_d4_en | rg_apll2_d8_en |
| aud_i2s0_m_parents | mt8167 | rg_aud1 | rg_aud2 |
| aud_i2s0_m_parents | mt8516 | rg_aud1 | rg_aud2 |
| aud_iec_parents | mt8188 | clk26m | apll1 | apll2 | apll3 | apll4 | apll5 |
| aud_intbus_parents | mt2701 | clk26m | syspll1_d4 | syspll3_d2 | syspll4_d2 | univpll3_d2 | univpll2_d4 |
| aud_intbus_parents | mt2712 | clk26m | syspll1_d4 | syspll4_d2 | univpll3_d2 | univpll2_d8 | syspll3_d2 | syspll3_d4 |
| aud_intbus_parents | mt6765 | clk26m | syspll1_d4 | syspll4_d2 |
| aud_intbus_parents | mt6779 | clk26m | mainpll_d2_d4 | mainpll_d7_d2 |
| aud_intbus_parents | mt6795 | clk26m | syspll1_d4 | syspll4_d2 | univpll3_d2 | univpll2_d8 | dmpll_d4 | dmpll_d8 |
| aud_intbus_parents | mt6797 | clk26m | syspll1_d4 | syspll4_d2 |
| aud_intbus_parents | mt7622 | clkxtal | syspll1_d4 | syspll4_d2 | syspll3_d2 |
| aud_intbus_parents | mt7629 | clkxtal | syspll1_d4 | syspll4_d2 | dmpll_d4 |
| aud_intbus_parents | mt8135 | clk26m | syspll_d6 | univpll_d10 |
| aud_intbus_parents | mt8167 | clk_null | clk26m_ck | mainpll_d22 | clk_null | mainpll_d11 |
| aud_intbus_parents | mt8173 | clk26m | syspll1_d4 | syspll4_d2 | univpll3_d2 | univpll2_d8 | dmpll_d4 | dmpll_d8 |
| aud_intbus_parents | mt8183 | clk26m | syspll_d2_d4 | syspll_d7_d2 |
| aud_intbus_parents | mt8186 | clk26m | mainpll_d2_d4 | mainpll_d7_d2 |
| aud_intbus_parents | mt8188 | clk26m | mainpll_d4_d4 | mainpll_d7_d4 |
| aud_intbus_parents | mt8192 | clk26m | mainpll_d4_d4 | mainpll_d7_d4 |
| aud_intbus_parents | mt8195 | clk26m | mainpll_d4_d4 | mainpll_d7_d4 |
| aud_intbus_parents | mt8365 | clk26m | syspll1_d4 | syspll4_d2 |
| aud_intbus_parents | mt8516 | clk_null | clk26m_ck | mainpll_d22 | clk_null | mainpll_d11 |
| aud_intbus_sel_parents | mt6735 | clk26m | syspll1_d4 | syspll4_d2 | dmpll_d4 |
| aud_l_parents | mt7981 | cb_cksq_40m | cb_apll2_196m | m_d8_d2 |
| aud_l_parents | mt7988 | top_xtal | apll2 | mpll_d8_d2 |
| aud_mux_parents | mt2701 | clk26m | aud1pll_98m_ck | aud2pll_90m_ck | hadds2pll_98m | audio_ext1_ck | audio_ext2_ck |
| aud_parents | mt7981 | cb_cksq_40m | cb_apll2_196m |
| aud_parents | mt7988 | top_xtal | apll2 |
| aud_spdif_parents | mt8365 | clk26m | univpll_d2 |
| aud_spdifin_parents | mt8167 | clk26m_ck | univpll_d2 |
| aud_spdifin_parents | mt8516 | clk26m_ck | univpll_d2 |
| aud_src_parents | mt2701 | aud_mux1_sel | aud_mux2_sel |
| audio_h_parents | mt6779 | clk26m | univpll_d7 | apll1_ck | apll2_ck |
| audio_h_parents | mt6797 | clk26m | apll2_ck | apll1_ck | univpll_d7 |
| audio_h_parents | mt8186 | clk26m | univpll_d7 | apll1 | apll2 |
| audio_h_parents | mt8188 | clk26m | univpll_d7 | apll1 | apll2 |
| audio_h_parents | mt8192 | clk26m | univpll_d7 | apll1_ck | apll2_ck |
| audio_h_parents | mt8195 | clk26m | univpll_d7 | apll1 | apll2 |
| audio_local_bus_parents | mt8188 | clk26m | clk13m | mainpll_d4_d4 | mainpll_d7_d2 | mainpll_d5_d2 | mainpll_d4_d2 | mainpll_d7 | mainpll_d4 | univpll_d6 | ulposc1_ck1 | ulposc1_d4 | ulposc1_d2 |
| audio_local_bus_parents | mt8195 | clk26m | clk26m_d2 | mainpll_d4_d4 | mainpll_d7_d2 | mainpll_d4_d2 | mainpll_d5_d2 | mainpll_d6_d2 | mainpll_d7 | univpll_d6 | ulposc1 | ulposc1_d4 | ulposc1_d2 |
| audio_parents | mt2712 | clk26m | syspll3_d4 | syspll4_d4 | syspll1_d16 |
| audio_parents | mt6765 | clk26m | syspll3_d4 | syspll4_d4 | syspll1_d16 |
| audio_parents | mt6779 | clk26m | mainpll_d5_d4 | mainpll_d7_d4 | mainpll_d2_d16 |
| audio_parents | mt6795 | clk26m | syspll3_d4 | syspll4_d4 | syspll1_d16 |
| audio_parents | mt6797 | clk26m | syspll3_d4 | syspll4_d4 | syspll1_d16 |
| audio_parents | mt7622 | clkxtal | syspll3_d4 | syspll4_d4 | univpll1_d16 |
| audio_parents | mt7629 | clkxtal | syspll3_d4 | syspll4_d4 | syspll1_d16 |
| audio_parents | mt8135 | clk26m | syspll_d24 |
| audio_parents | mt8173 | clk26m | syspll3_d4 | syspll4_d4 | syspll1_d16 |
| audio_parents | mt8183 | clk26m | syspll_d5_d4 | syspll_d7_d4 | syspll_d2_d16 |
| audio_parents | mt8186 | clk26m | mainpll_d5_d4 | mainpll_d7_d4 | mainpll_d2_d16 |
| audio_parents | mt8192 | clk26m | mainpll_d5_d8 | mainpll_d7_d8 | mainpll_d4_d16 |
| audio_parents | mt8365 | clk26m | syspll3_d4 | syspll4_d4 | syspll1_d16 |
| audio_sel_parents | mt6735 | clk26m | syspll3_d4 | syspll4_d4 | syspll1_d16 |
| audiodsp_parents | mt8186 | clk26m | ulposc1_d10 | adsppll | adsppll_d2 | adsppll_d4 | adsppll_d8 |
| audull_vtx_parents | mt2712 | d2a_ulclk_6p5m | clkaud_ext_i_0 |
| axi_infra_parents | mt7988 | top_xtal | net1pll_d8_d2 |
| axi_mfg_in_parents | mt6795 | clk26m | axi_sel | dmpll_d2 |
| axi_mfg_in_parents | mt8167 | clk26m_ck | mainpll_d11 | univpll_d24 | mmpll380m |
| axi_mfg_in_parents | mt8173 | clk26m | axi_sel | dmpll_d2 |
| axi_mfg_parents | mt2712 | clk26m | axi_sel | univpll_d5 |
| axi_parents | mt2701 | clk26m | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll_d5 | univpll2_d2 | mmpll_d2 | dmpll_d2 |
| axi_parents | mt2712 | clk26m | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll_d5 | univpll2_d2 | msdcpll2_ck |
| axi_parents | mt6765 | clk26m | syspll_d7 | syspll1_d4 | syspll3_d2 |
| axi_parents | mt6779 | clk26m | mainpll_d2_d4 | mainpll_d7 | osc_d4 |
| axi_parents | mt6795 | clk26m | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll_d5 | univpll2_d2 | dmpll_d2 | dmpll_d4 |
| axi_parents | mt6797 | clk26m | syspll_d7 | ulposc_axi_ck_mux |
| axi_parents | mt7622 | clkxtal | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll_d5 | univpll2_d2 | univpll_d7 |
| axi_parents | mt7629 | clkxtal | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll_d5 | univpll2_d2 | univpll_d7 | dmpll_ck |
| axi_parents | mt8135 | clk26m | syspll_d3 | syspll_d4 | syspll_d6 | univpll_d5 | univpll2_d2 | syspll_d3p5 |
| axi_parents | mt8173 | clk26m | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll_d5 | univpll2_d2 | dmpll_d2 | dmpll_d4 |
| axi_parents | mt8183 | clk26m | syspll_d2_d4 | syspll_d7 | osc_d4 |
| axi_parents | mt8186 | clk26m | mainpll_d7 | mainpll_d2_d4 | univpll_d7 |
| axi_parents | mt8188 | clk26m | mainpll_d4_d4 | mainpll_d7_d2 | mainpll_d4_d2 | mainpll_d5_d2 | mainpll_d6_d2 | ulposc1_d4 |
| axi_parents | mt8192 | clk26m | mainpll_d4_d4 | mainpll_d7_d2 | mainpll_d4_d2 | mainpll_d5_d2 | mainpll_d6_d2 | osc_d4 |
| axi_parents | mt8195 | clk26m | mainpll_d4_d4 | mainpll_d7_d2 | mainpll_d4_d2 | mainpll_d5_d2 | mainpll_d6_d2 | ulposc1_d4 |
| axi_parents | mt8196 | clk26m | osc_d20 | osc_d8 | osc_d4 | mainpll_d4_d4 | mainpll_d7_d2 |
| axi_parents | mt8365 | clk26m | syspll_d7 | syspll1_d4 | syspll3_d2 |
| axi_sel_parents | mt6735 | clk26m | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll_d5 | univpll2_d2 | dmpll | dmpll_d2 |
| bsi_parents | mt8167 | clk26m_ck | mainpll_d10 | mainpll_d12 | mainpll_d20 |
| bsi_parents | mt8516 | clk26m_ck | mainpll_d10 | mainpll_d12 | mainpll_d20 |
| bsi_spi_parents | mt6797 | clk26m | syspll_d3_d3 | syspll1_d4 | syspll_d7 |
| bus_aximem_parents | mt8188 | clk26m | mainpll_d7_d2 | mainpll_d4_d2 | mainpll_d5_d2 | mainpll_d6 |
| bus_aximem_parents | mt8192 | clk26m | mainpll_d7_d2 | mainpll_d4_d2 | mainpll_d5_d2 | mainpll_d6 |
| bus_aximem_parents | mt8195 | clk26m | mainpll_d7_d2 | mainpll_d4_d2 | mainpll_d5_d2 | mainpll_d6 |
| bus_tops_parents | mt7988 | top_xtal | net1pll_d5 | net2pll_d2 |
| cam_parents | mt6779 | clk26m | mainpll_d2 | mmpll_d6 | mainpll_d3 | mmpll_d7 | univpll_d3 | mmpll_d5_d2 | adsppll_d5 | tvdpll_mainpll_d2_ck | univpll_d3_d2 |
| cam_parents | mt8135 | clk26m | syspll_d3 | syspll_d3p5 | syspll_d4 | univpll_d5 | univpll2_d2 | univpll_d7 | univpll1_d4 |
| cam_parents | mt8183 | clk26m | syspll_d2 | mmpll_d6 | syspll_d3 | mmpll_d7 | univpll_d3 | univpll_d2_d2 | syspll_d2_d2 | syspll_d3_d2 | univpll_d3_d2 |
| cam_parents | mt8188 | clk26m | tvdpll1 | mainpll_d4 | mmpll_d4 | univpll_d4 | univpll_d5 | univpll_d6 | mmpll_d7 | univpll_d4_d2 | mainpll_d4_d2 | imgpll |
| cam_parents | mt8192 | clk26m | mainpll_d4 | mmpll_d6 | univpll_d4 | univpll_d5 | univpll_d6 | mmpll_d7 | univpll_d4_d2 | mainpll_d4_d2 | univpll_d6_d2 |
| cam_parents | mt8195 | clk26m | mainpll_d4 | mmpll_d4 | univpll_d4 | univpll_d5 | univpll_d6 | mmpll_d7 | univpll_d4_d2 | mainpll_d4_d2 | imgpll |
| camtg | mt6797 | clk26m | univpll_d26 | univpll2_d2 |
| camtg2_parents | mt6779 | clk26m | univpll_192m_d8 | univpll_d3_d8 | univpll_192m_d4 | univpll_d3_d16 | csw_f26m_ck_d2 | univpll_192m_d16 | univpll_192m_d32 |
| camtg2_parents | mt8183 | clk26m | univ_192m_d8 | univpll_d3_d8 | univ_192m_d4 | univpll_d3_d16 | csw_f26m_ck_d2 | univ_192m_d16 | univ_192m_d32 |
| camtg2_parents | mt8188 | clk26m | univpll_192m_d8 | univpll_d6_d8 | univpll_192m_d4 | univpll_192m_d10 | clk13m | univpll_192m_d16 | univpll_192m_d32 |
| camtg3_parents | mt6779 | clk26m | univpll_192m_d8 | univpll_d3_d8 | univpll_192m_d4 | univpll_d3_d16 | csw_f26m_ck_d2 | univpll_192m_d16 | univpll_192m_d32 |
| camtg3_parents | mt8183 | clk26m | univ_192m_d8 | univpll_d3_d8 | univ_192m_d4 | univpll_d3_d16 | csw_f26m_ck_d2 | univ_192m_d16 | univ_192m_d32 |
| camtg3_parents | mt8188 | clk26m | univpll_192m_d8 | univpll_d6_d8 | univpll_192m_d4 | univpll_192m_d10 | clk13m | univpll_192m_d16 | univpll_192m_d32 |
| camtg4_parents | mt6779 | clk26m | univpll_192m_d8 | univpll_d3_d8 | univpll_192m_d4 | univpll_d3_d16 | csw_f26m_ck_d2 | univpll_192m_d16 | univpll_192m_d32 |
| camtg4_parents | mt8183 | clk26m | univ_192m_d8 | univpll_d3_d8 | univ_192m_d4 | univpll_d3_d16 | csw_f26m_ck_d2 | univ_192m_d16 | univ_192m_d32 |
| camtg5_parents | mt6779 | clk26m | univpll_192m_d8 | univpll_d3_d8 | univpll_192m_d4 | univpll_d3_d16 | csw_f26m_ck_d2 | univpll_192m_d16 | univpll_192m_d32 |
| camtg_mm_parents | mt8167 | clk_null | clk26m_ck | usb_phy48m_ck | clk_null | univpll_d6 |
| camtg_parents | mt2701 | clk26m | univpll_d26 | univpll2_d2 | syspll3_d2 | syspll3_d4 | msdcpll_d2 | mmpll_d2 |
| camtg_parents | mt2712 | clk26m | univpll_d52 | univpll_d208 | univpll_d104 | clk26m_d2 | univpll_d26 | univpll2_d8 | syspll3_d4 | syspll3_d2 | univpll1_d4 | univpll2_d2 |
| camtg_parents | mt6765 | clk26m | usb20_192m_d8 | univpll2_d8 | usb20_192m_d4 | univpll2_d32 | usb20_192m_d16 | usb20_192m_d32 |
| camtg_parents | mt6779 | clk26m | univpll_192m_d8 | univpll_d3_d8 | univpll_192m_d4 | univpll_d3_d16 | csw_f26m_ck_d2 | univpll_192m_d16 | univpll_192m_d32 |
| camtg_parents | mt6795 | clk26m | univpll_d26 | univpll2_d2 | syspll3_d2 | syspll3_d4 | univpll1_d4 | dmpll_d8 |
| camtg_parents | mt8135 | clk26m | univpll_d26 | univpll1_d6 | syspll_d16 | syspll_d8 |
| camtg_parents | mt8173 | clk26m | univpll_d26 | univpll2_d2 | syspll3_d2 | syspll3_d4 | univpll1_d4 |
| camtg_parents | mt8183 | clk26m | univ_192m_d8 | univpll_d3_d8 | univ_192m_d4 | univpll_d3_d16 | csw_f26m_ck_d2 | univ_192m_d16 | univ_192m_d32 |
| camtg_parents | mt8186 | clk26m | univpll_192m_d8 | univpll_d3_d8 | univpll_192m_d4 | univpll_d3_d32 | univpll_192m_d16 | univpll_192m_d32 |
| camtg_parents | mt8188 | clk26m | univpll_192m_d8 | univpll_d6_d8 | univpll_192m_d4 | univpll_192m_d10 | clk13m | univpll_192m_d16 | univpll_192m_d32 |
| camtg_parents | mt8192 | clk26m | univpll_192m_d8 | univpll_d6_d8 | univpll_192m_d4 | univpll_d6_d16 | csw_f26m_d2 | univpll_192m_d16 | univpll_192m_d32 |
| camtg_parents | mt8195 | clk26m | univpll_192m_d8 | univpll_d6_d8 | univpll_192m_d4 | univpll_d6_d16 | clk26m_d2 | univpll_192m_d16 | univpll_192m_d32 |
| camtg_parents | mt8365 | clk26m | usb20_192m_d8 | univpll2_d8 | usb20_192m_d4 | univpll2_d32 | usb20_192m_d16 | usb20_192m_d32 |
| camtg_sel_parents | mt6735 | clk26m | univpll_d26 | univpll2_d2 | syspll3_d2 | syspll3_d4 | msdcpll_d4 |
| camtm_parents | mt6765 | clk26m | univpll1_d4 | univpll1_d2 | univpll2_d2 |
| camtm_parents | mt6779 | clk26m | univpll_d7 | univpll_d3_d2 | univpll_d2_d2 |
| camtm_parents | mt8186 | clk26m | univpll_d2_d4 | univpll_d3_d2 |
| camtm_parents | mt8188 | clk26m | univpll_d4_d4 | univpll_d6_d2 | univpll_d6_d4 |
| camtm_parents | mt8192 | clk26m | univpll_d7 | univpll_d6_d2 | univpll_d4_d2 |
| camtm_parents | mt8195 | clk26m | univpll_d4_d4 | univpll_d6_d2 | univpll_d6_d4 |
| cci400_parents | mt2712 | clk26m | vencpll_ck | armca35pll_600m | armca35pll_400m | univpll_d2 | syspll_d2 | msdcpll_ck | univpll_d3 |
| cci400_parents | mt6795 | clk26m | vencpll_ck | clk26m | clk26m | univpll_d2 | syspll_d2 | msdcpll_ck | dmpll_ck |
| cci400_parents | mt8173 | clk26m | vencpll_ck | armca7pll_754m | armca7pll_502m | univpll_d2 | syspll_d2 | msdcpll_ck | dmpll_ck |
| cci_parents | mt8135 | clk26m | mainpll_537p3m | univpll_d3 | syspll_d2p5 | syspll_d3 | syspll_d5 |
| ccu_ahb_parents | mt8188 | clk26m | univpll_d6 | mainpll_d4_d2 | mainpll_d4 | univpll_d5 | mainpll_d6 | mmpll_d6 | mmpll_d7 | univpll_d4_d2 | univpll_d7 |
| ccu_parents | mt6779 | clk26m | mainpll_d2 | mmpll_d6 | mainpll_d3 | mmpll_d7 | univpll_d3 | mmpll_d5_d2 | mainpll_d2_d2 | adsppll_d5 | univpll_d3_d2 |
| ccu_parents | mt8188 | clk26m | univpll_d6 | mainpll_d4_d2 | mainpll_d4 | univpll_d5 | mainpll_d6 | mmpll_d6 | mmpll_d7 | univpll_d4_d2 | univpll_d7 |
| ccu_parents | mt8192 | clk26m | mainpll_d4 | mmpll_d6 | mainpll_d6 | mmpll_d7 | univpll_d4_d2 | mmpll_d6_d2 | mmpll_d5_d2 | univpll_d5 | univpll_d6_d2 |
| ccu_parents | mt8195 | clk26m | univpll_d6 | mainpll_d4_d2 | mainpll_d4 | univpll_d5 | mainpll_d6 | mmpll_d6 | mmpll_d7 | univpll_d4_d2 | univpll_d7 |
| cirq_parents | mt8196 | clk26m | osc_d20 | mainpll_d7_d4 |
| clk_8bdac_parents | mt2701 | 32k_internal | 8bdac_ck | clk26m | clk26m |
| cmsys_parents | mt2701 | clk26m | syspll1_d2 | univpll1_d2 | univpll_d5 | syspll_d5 | syspll2_d2 | syspll1_d4 | syspll3_d2 | syspll2_d4 | syspll1_d8 | clk26m | clk26m | clk26m | clk26m | clk26m |
| cmsys_parents | mt2712 | clk26m | univpll_d3 | syspll_d3 | syspll1_d2 | syspll2_d2 |
| cpu_parents | mt2701 | clk26m | armpll | mainpll | mmpll |
| crypto_parents | mt7629 | clkxtal | univpll_d3 | univpll1_d2 | syspll1_d2 | univpll_d5 | syspll_d5 | univpll2_d2 | syspll_d2 |
| csw_f26m_parents | mt7981 | cksq_40m_d2 | m_d8_d2 |
| csw_mux_mfg_parents | mt8167 | clk_null | clk_null | univpll_d3 | univpll_d2 | clk26m_ck | mainpll_d4 | univpll_d24 | mmpll380m |
| csw_nfiecc_parents | mt8167 | clk_null | mainpll_d7 | mainpll_d6 | clk_null | mainpll_d5 |
| csw_nfiecc_parents | mt8516 | clk_null | mainpll_d7 | mainpll_d6 | clk_null | mainpll_d5 |
| da_xtp_glb_p0_parents | mt7988 | top_xtal | net2pll_d8 |
| dbg_atclk_parents | mt8167 | clk_null | clk26m_ck | mainpll_d5 | clk_null | univpll_d5 |
| dbg_atclk_parents | mt8516 | clk_null | clk26m_ck | mainpll_d5 | clk_null | univpll_d5 |
| ddrphycfg_parents | mt2701 | clk26m | syspll1_d8 |
| ddrphycfg_parents | mt6735 | clk26m | syspll1_d8 |
| ddrphycfg_parents | mt6795 | clk26m | syspll1_d8 |
| ddrphycfg_parents | mt6797 | clk26m | syspll3_d2 | syspll2_d4 | syspll1_d8 |
| ddrphycfg_parents | mt7622 | clkxtal | syspll1_d8 |
| ddrphycfg_parents | mt7629 | clkxtal | syspll1_d8 |
| ddrphycfg_parents | mt8135 | clk26m | axi_sel | syspll_d12 |
| ddrphycfg_parents | mt8167 | clk26m_ck | mainpll_d16 |
| ddrphycfg_parents | mt8173 | clk26m | syspll1_d8 |
| dgi_out_parents | mt8195 | clk26m | dgipll | dgipll_d2 | in_dgi | in_dgi_d2 | mmpll_d4_d4 |
| di_parents | mt2701 | clk26m | tvd2pll_ck | tvd2pll_d2 | clk26m |
| di_parents | mt2712 | clk26m | tvdpll_d2 | tvdpll_d4 | tvdpll_d8 | vencpll_ck | vencpll_d2 | cvbs | cvbs_d2 |
| disp_parents | mt8135 | clk26m | syspll_d3p5 | syspll_d3 | univpll2_d2 | univpll_d5 | univpll1_d2 | lvdspll | vdecpll |
| disp_parents | mt8186 | clk26m | univpll_d3_d2 | mainpll_d5 | univpll_d5 | univpll_d2_d2 | mainpll_d3 | univpll_d3 | mainpll_d2 | mmpll |
| disp_parents | mt8192 | clk26m | univpll_d6_d2 | mainpll_d5_d2 | mmpll_d6_d2 | univpll_d5_d2 | univpll_d4_d2 | mmpll_d7 | univpll_d6 | mainpll_d4 | mmpll_d5_d2 |
| disp_pwm0_parents | mt8188 | clk26m | univpll_d6_d4 | ulposc1_d2 | ulposc1_d4 | ulposc1_d16 | ethpll_d4 |
| disp_pwm1_parents | mt8188 | clk26m | univpll_d6_d4 | ulposc1_d2 | ulposc1_d4 | ulposc1_d16 |
| disp_pwm_parents | mt6765 | clk26m | univpll2_d4 | ulposc1_d2 | ulposc1_d8 |
| disp_pwm_parents | mt8186 | clk26m | univpll_d5_d2 | univpll_d3_d4 | ulposc1_d2 | ulposc1_d8 |
| disp_pwm_parents | mt8192 | clk26m | univpll_d6_d4 | osc_d2 | osc_d4 | osc_d16 |
| disp_pwm_parents | mt8195 | clk26m | univpll_d6_d4 | ulposc1_d2 | ulposc1_d4 | ulposc1_d16 |
| disp_pwm_parents | mt8196 | clk26m | osc_d32 | osc_d8 | univpll_d6_d4 | univpll_d5_d4 | osc_d4 | mainpll_d4_d4 |
| disp_pwm_parents | mt8365 | clk26m | univpll2_d4 |
| disppwm_parents | mt6779 | clk26m | univpll_d3_d4 | osc_d2 | osc_d4 | osc_d16 |
| disppwm_parents | mt8183 | clk26m | univpll_d3_d4 | osc_d2 | osc_d4 | osc_d16 |
| disppwm_sel_parents | mt6735 | clk26m | univpll2_d4 | syspll4_d2_d8 | ad_sys_26m_ck |
| dp_parents | mt8188 | clk26m | tvdpll2_d2 | tvdpll2_d4 | tvdpll2_d8 | tvdpll2_d16 |
| dp_parents | mt8195 | clk26m | tvdpll2_d2 | tvdpll2_d4 | tvdpll2_d8 | tvdpll2_d16 |
| dpe_parents | mt6779 | clk26m | mainpll_d2 | mmpll_d7 | univpll_d3 | mainpll_d3 | mmpll_d5_d2 | mainpll_d2_d2 | mainpll_d5 |
| dpe_parents | mt8192 | clk26m | mainpll_d4 | mmpll_d6 | univpll_d6 | mainpll_d6 | univpll_d4_d2 | univpll_d5_d2 | mmpll_d6_d2 |
| dpi0_mm_parents | mt8167 | clk26m_ck | lvdspll_ck | lvdspll_d2 | lvdspll_d4 | lvdspll_d8 |
| dpi0_parents | mt2701 | clk26m | mipipll | mipipll_d2 | mipipll_d4 | clk26m | tvdpll_ck | tvdpll_d2 | tvdpll_d4 |
| dpi0_parents | mt6779 | clk26m | tvdpll_d2 | tvdpll_d4 | tvdpll_d8 | tvdpll_d16 |
| dpi0_parents | mt6795 | clk26m | tvdpll_d2 | tvdpll_d4 | clk26m | clk26m | tvdpll_d8 | tvdpll_d16 |
| dpi0_parents | mt6797 | clk26m | tvdpll_d2 | tvdpll_d4 | tvdpll_d8 | tvdpll_d16 | clk26m | clk26m |
| dpi0_parents | mt8173 | clk26m | tvdpll_d2 | tvdpll_d4 | clk26m | clk26m | tvdpll_d8 | tvdpll_d16 |
| dpi0_parents | mt8183 | clk26m | tvdpll_d2 | tvdpll_d4 | tvdpll_d8 | tvdpll_d16 | univpll_d5_d2 | univpll_d3_d4 | syspll_d3_d4 | univpll_d3_d8 |
| dpi0_parents | mt8365 | clk26m | lvdspll_d2 | lvdspll_d4 | lvdspll_d8 | lvdspll_d16 |
| dpi0_sel_parents | mt6735 | clk26m | tvdpll | tvdpll_d2 | tvdpll_d4 | dpi_ck |
| dpi1_mm_parents | mt8167 | clk26m_ck | tvdpll_d2 | tvdpll_d4 | tvdpll_d8 | tvdpll_d16 |
| dpi1_parents | mt2701 | clk26m | tvdpll_ck | tvdpll_d2 | tvdpll_d4 |
| dpi1_parents | mt8135 | clk26m | tvhdmi_h_ck | tvhdmi_d2 | tvhdmi_d4 |
| dpi_parents | mt8186 | clk26m | tvdpll | tvdpll_d2 | tvdpll_d4 | tvdpll_d8 | tvdpll_d16 | tvdpll_d32 |
| dpi_parents | mt8188 | clk26m | tvdpll1_d2 | tvdpll2_d2 | tvdpll1_d4 | tvdpll2_d4 | tvdpll1_d8 | tvdpll2_d8 | tvdpll1_d16 | tvdpll2_d16 |
| dpi_parents | mt8192 | clk26m | tvdpll_d2 | tvdpll_d4 | tvdpll_d8 | tvdpll_d16 |
| dpilvds1_parents | mt2712 | clk26m | lvdspll2_ck | lvdspll2_d2 | lvdspll2_d4 | lvdspll2_d8 | clkfpc |
| dpilvds_parents | mt2712 | clk26m | lvdspll_ck | lvdspll_d2 | lvdspll_d4 | lvdspll_d8 | clkfpc |
| dpilvds_parents | mt8135 | clk26m | lvdspll | lvdspll_d2 | lvdspll_d4 | lvdspll_d8 |
| dpilvds_parents | mt8173 | clk26m | lvdspll | lvdspll_d2 | lvdspll_d4 | lvdspll_d8 | fpc_ck |
| dpmaif_main_parents | mt8192 | clk26m | univpll_d4_d4 | mainpll_d6 | mainpll_d4_d2 | univpll_d4_d2 |
| dpmaif_main_parents | mt8196 | clk26m | univpll_d4_d4 | univpll_d5_d2 | mainpll_d4_d2 | univpll_d4_d2 | mainpll_d6 | univpll_d6 | mainpll_d5 | univpll_d5 |
| dpmaif_parents | mt6779 | clk26m | univpll_d2_d4 | mainpll_d3 | mainpll_d2_d2 | univpll_d2_d2 | univpll_d3 |
| dpmaif_parents | mt8186 | clk26m | univpll_d2_d2 | mainpll_d3 | mainpll_d2_d2 | univpll_d3_d2 |
| dpmaif_parents | mt8195 | clk26m | univpll_d4_d4 | mainpll_d6 | mainpll_d4_d2 | univpll_d4_d2 |
| dpsw_cmp_26m_parents | mt8196 | clk26m | osc_d20 |
| dptx_parents | mt8188 | clk26m | apll1 | apll2 | apll3 | apll4 | apll5 |
| dramc_md32_parents | mt7981 | cb_cksq_40m | cb_m_d2 | cb_wedmcu_208m |
| dramc_md32_parents | mt7988 | top_xtal | mpll_d2 | wedmcupll |
| dsi_occ_parents | mt8186 | clk26m | univpll_d3_d2 | mpll | mainpll_d5 |
| dsi_occ_parents | mt8188 | clk26m | univpll_d6_d2 | univpll_d5_d2 | univpll_d4_d2 |
| dsi_occ_parents | mt8195 | clk26m | mainpll_d6_d2 | univpll_d5_d2 | univpll_d4_d2 |
| dsp1_parents | mt6779 | clk26m | univpll_d3_d8 | univpll_d3_d4 | mainpll_d2_d4 | univpll_d3_d2 | mainpll_d2_d2 | univpll_d2_d2 | mainpll_d3 | univpll_d3 | mmpll_d7 | mmpll_d6 | adsppll_d5 | tvdpll_ck | tvdpll_mainpll_d2_ck | univpll_d2 | adsppll_d4 |
| dsp1_parents | mt8183 | clk26m | mmpll_d6 | mmpll_d7 | univpll_d3 | syspll_d3 | univpll_d2_d2 | syspll_d2_d2 | univpll_d3_d2 | syspll_d3_d2 |
| dsp1_parents | mt8188 | clk26m | univpll_d6_d2 | mainpll_d4_d2 | univpll_d5 | mmpll_d5 | univpll_d4 | mainpll_d3 | univpll_d3 |
| dsp1_parents | mt8195 | clk26m | univpll_d6_d2 | mainpll_d4_d2 | univpll_d5 | mmpll_d5 | univpll_d4 | mainpll_d3 | univpll_d3 |
| dsp2_parents | mt6779 | clk26m | univpll_d3_d8 | univpll_d3_d4 | mainpll_d2_d4 | univpll_d3_d2 | mainpll_d2_d2 | univpll_d2_d2 | mainpll_d3 | univpll_d3 | mmpll_d7 | mmpll_d6 | adsppll_d5 | tvdpll_ck | tvdpll_mainpll_d2_ck | univpll_d2 | adsppll_d4 |
| dsp2_parents | mt8183 | clk26m | mmpll_d6 | mmpll_d7 | univpll_d3 | syspll_d3 | univpll_d2_d2 | syspll_d2_d2 | univpll_d3_d2 | syspll_d3_d2 |
| dsp2_parents | mt8188 | clk26m | univpll_d6_d2 | mainpll_d4_d2 | univpll_d5 | mmpll_d5 | univpll_d4 | mainpll_d3 | univpll_d3 |
| dsp2_parents | mt8195 | clk26m | univpll_d6_d2 | univpll_d4_d2 | mainpll_d4 | univpll_d4 | mmpll_d4 | mainpll_d3 | univpll_d3 |
| dsp3_parents | mt6779 | clk26m | univpll_d3_d8 | mainpll_d2_d4 | univpll_d3_d2 | mainpll_d2_d2 | univpll_d2_d2 | mainpll_d3 | univpll_d3 | mmpll_d7 | mmpll_d6 | mainpll_d2 | tvdpll_ck | tvdpll_mainpll_d2_ck | univpll_d2 | adsppll_d4 | mmpll_d4 |
| dsp3_parents | mt8188 | clk26m | univpll_d6_d2 | mainpll_d4_d2 | univpll_d5 | mmpll_d5 | univpll_d4 | mainpll_d3 | univpll_d3 |
| dsp4_parents | mt8188 | clk26m | univpll_d6_d2 | univpll_d4_d2 | mainpll_d4 | univpll_d4 | mmpll_d4 | mainpll_d3 | univpll_d3 |
| dsp5_parents | mt8188 | clk26m | univpll_d6_d2 | univpll_d4_d2 | mainpll_d4 | univpll_d4 | mmpll_d4 | mainpll_d3 | univpll_d3 |
| dsp6_parents | mt8188 | clk26m | univpll_d6_d2 | univpll_d4_d2 | mainpll_d4 | univpll_d4 | mmpll_d4 | mainpll_d3 | univpll_d3 |
| dsp7_parents | mt8188 | clk26m | univpll_d6_d2 | univpll_d4_d2 | univpll_d5 | univpll_d4 | mmpll_d4 | mainpll_d3 | univpll_d3 |
| dsp7_parents | mt8192 | clk26m | mainpll_d4_d2 | mainpll_d6 | mmpll_d6 | univpll_d5 | mmpll_d5 | univpll_d4 | mmpll_d4 |
| dsp_parents | mt6779 | clk26m | univpll_d3_d8 | univpll_d3_d4 | mainpll_d2_d4 | univpll_d3_d2 | mainpll_d2_d2 | univpll_d2_d2 | mainpll_d3 | univpll_d3 | mmpll_d7 | mmpll_d6 | adsppll_d5 | tvdpll_ck | tvdpll_mainpll_d2_ck | univpll_d2 | adsppll_d4 |
| dsp_parents | mt8183 | clk26m | mmpll_d6 | mmpll_d7 | univpll_d3 | syspll_d3 | univpll_d2_d2 | syspll_d2_d2 | univpll_d3_d2 | syspll_d3_d2 |
| dsp_parents | mt8188 | clk26m | univpll_d6_d2 | univpll_d4_d2 | univpll_d5 | univpll_d4 | mmpll_d4 | mainpll_d3 | univpll_d3 |
| dsp_parents | mt8195 | clk26m | univpll_d6_d2 | univpll_d4_d2 | univpll_d5 | univpll_d4 | mmpll_d4 | mainpll_d3 | univpll_d3 |
| dsp_parents | mt8196 | clk26m | osc_d5 | osc_d4 | osc_d3 | univpll_d6_d2 | osc_d2 | univpll_d5 | osc |
| dsp_parents | mt8365 | clk26m | sys_26m_d2 | dsppll_ck | dsppll_d2 | dsppll_d4 | dsppll_d8 |
| dvfsrc_parents | mt8186 | clk26m | ulposc1_d10 |
| dvfsrc_parents | mt8188 | clk26m | ulposc1_d10 | univpll_d6_d8 | msdcpll_d16 |
| dvfsrc_parents | mt8195 | clk26m | ulposc1_d10 | univpll_d6_d8 | msdcpll_d16 |
| dvio_dgi_ref_parents | mt8195 | clk26m | in_dgi | in_dgi_d2 | in_dgi_d4 | in_dgi_d6 | in_dgi_d8 | mmpll_d4_d4 |
| dxcc_parents | mt6765 | clk26m | syspll1_d2 | syspll1_d4 | syspll1_d8 |
| dxcc_parents | mt6779 | clk26m | mainpll_d2_d2 | mainpll_d2_d4 | mainpll_d2_d8 |
| dxcc_parents | mt8183 | clk26m | syspll_d2_d2 | syspll_d2_d4 | syspll_d2_d8 |
| dxcc_parents | mt8186 | clk26m | mainpll_d2_d2 | mainpll_d2_d4 |
| dxcc_parents | mt8192 | clk26m | mainpll_d4_d2 | mainpll_d4_d4 | mainpll_d4_d8 |
| dxcc_parents | mt8195 | clk26m | mainpll_d4_d2 | mainpll_d4_d4 | mainpll_d4_d8 |
| dxcc_parents | mt8196 | clk26m | mainpll_d4_d8 | mainpll_d4_d4 | mainpll_d4_d2 |
| dxcc_parents | mt8365 | clk26m | syspll1_d2 | syspll1_d4 | syspll1_d8 |
| ecc_parents | mt8188 | clk26m | mainpll_d4_d4 | mainpll_d5_d2 | mainpll_d4_d2 | mainpll_d6 | univpll_d6 |
| ecc_parents | mt8195 | clk26m | mainpll_d4_d4 | mainpll_d5_d2 | mainpll_d4_d2 | mainpll_d6 | univpll_d6 |
| ecc_parents | mt8365 | clk26m | univpll2_d2 | univpll1_d2 | univpll_d3 | syspll_d2 |
| edp_parents | mt8188 | clk26m | tvdpll1_d2 | tvdpll1_d4 | tvdpll1_d8 | tvdpll1_d16 |
| edp_parents | mt8195 | clk26m | tvdpll1_d2 | tvdpll1_d4 | tvdpll1_d8 | tvdpll1_d16 |
| efuse_parents | mt8196 | clk26m | osc_d20 |
| eip197_parents | mt7988 | top_xtal | netsyspll | net2pll | mmpll | net1pll_d4 | net1pll_d5 |
| eip97b_parents | mt7981 | cb_cksq_40m | cb_net1_d5 | cb_m_416m | cb_mm_d2 | net1_d5_d2 |
| emi_ddrphy_parents | mt8167 | gfmux_emi1x_sel | gfmux_emi1x_sel |
| emi_parents | mt8196 | clk26m | osc_d4 | mainpll_d5_d8 | mainpll_d5_d4 | mainpll_d4_d4 | emipll1_ck |
| emmc_208m_parents | mt7981 | cb_cksq_40m | cb_m_d2 | cb_net2_d4 | cb_apll2_196m | cb_mm_d4 | net1_d8_d2 | cb_mm_d6 |
| emmc_250m_parents | mt7988 | top_xtal | net1pll_d5_d2 | mmpll_d4 |
| emmc_400m_parents | mt7981 | cb_cksq_40m | cb_net2_d2 | cb_mm_d2 | cb_net2_d2 |
| emmc_400m_parents | mt7988 | top_xtal | msdcpll | mmpll_d2 | mpll_d2 | mmpll_d4 | net1pll_d8_d2 |
| emmc_hclk_parents | mt2701 | clk26m | syspll1_d2 | syspll1_d4 | syspll2_d2 |
| eth_gmii_parents | mt7988 | top_xtal | net1pll_d5_d4 |
| eth_mii_parents | mt7988 | top_xtal_d2 | net2pll_d4_d8 |
| eth_parents | mt7622 | clkxtal | syspll1_d2 | univpll1_d2 | syspll1_d4 | univpll_d5 | clk_null | univpll_d7 |
| eth_parents | mt7629 | clkxtal | syspll1_d2 | univpll1_d2 | syspll1_d4 | univpll_d5 | sgmiipll_d2 | univpll_d7 | dmpll_ck |
| eth_parents | mt8167 | clk26m_ck | mainpll_d40 | univpll_d24 | univpll_d20 | mainpll_d20 |
| eth_parents | mt8365 | clk26m | univpll2_d8 | syspll4_d4 | syspll1_d8 | syspll4_d2 |
| eth_parents | mt8516 | clk26m_ck | mainpll_d40 | univpll_d24 | univpll_d20 | mainpll_d20 |
| eth_refck_50m_parents | mt7988 | top_xtal | net2pll_d4_d4 |
| eth_sys_200m_parents | mt7988 | top_xtal | net2pll_d4 |
| eth_xgmii_parents | mt7988 | top_xtal_d2 | net1pll_d8_d8 | net1pll_d8_d16 |
| ethdr_parents | mt8188 | clk26m | univpll_d6_d2 | mainpll_d5_d2 | mmpll_d6_d2 | univpll_d5_d2 | univpll_d4_d2 | mmpll_d4_d2 | mmpll_d7 | univpll_d6 | mainpll_d4 | mmpll_d5_d4 | tvdpll1 | tvdpll2 | univpll_d4 | mmpll_d4 |
| ethdr_parents | mt8195 | clk26m | univpll_d6_d2 | mainpll_d5_d2 | mmpll_d6_d2 | univpll_d5_d2 | univpll_d4_d2 | mmpll_d4_d2 | mmpll_d7 | univpll_d6 | mainpll_d4 | mmpll_d5_d4 | tvdpll1 | tvdpll2 | univpll_d4 | mmpll_d4 |
| ether_125m_parents | mt2712 | clk26m | etherpll_125m | univpll3_d2 |
| ether_50m_parents | mt2712 | clk26m | etherpll_50m | apll1_d3 | univpll3_d4 |
| ether_parents | mt2712 | clk26m | etherpll_50m | univpll_d26 |
| ethif_parents | mt2701 | clk26m | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll_d5 | univpll1_d2 | dmpll_ck | dmpll_d2 |
| f10m_ref_parents | mt7622 | clkxtal | syspll4_d16 |
| f10m_ref_parents | mt7629 | clkxtal | sgmiipll_d2 |
| f52m_mfg_parents | mt6779 | clk26m | univpll_d3_d2 | univpll_d3_d4 | univpll_d3_d8 |
| f52m_mfg_parents | mt8183 | clk26m | univpll_d3_d2 | univpll_d3_d4 | univpll_d3_d8 |
| faes_ufsfde_parents | mt6779 | clk26m | mainpll_d2 | mainpll_d2_d2 | mainpll_d3 | mainpll_d2_d4 | univpll_d3 |
| faes_ufsfde_parents | mt8183 | clk26m | syspll_d2 | syspll_d2_d2 | syspll_d3 | syspll_d2_d4 | univpll_d3 |
| fix_parents | mt8135 | rtc32k | clk26m | univpll_d5 | univpll_d7 | univpll1_d2 | univpll1_d4 | univpll1_d6 | univpll1_d8 |
| flash_parents | mt2701 | clk26m_d8 | clk26m | syspll2_d8 | syspll3_d4 | univpll3_d4 | syspll4_d2 | syspll2_d4 | univpll2_d4 |
| flash_parents | mt7622 | clkxtal | univpll_d80_d4 | syspll2_d8 | syspll3_d4 | univpll3_d4 | univpll1_d8 | syspll2_d4 | univpll2_d4 |
| flash_parents | mt7629 | clkxtal | univpll_d80_d4 | syspll2_d8 | syspll3_d4 | univpll3_d4 | univpll1_d8 | syspll2_d4 | univpll2_d4 |
| fpwrap_ulposc_parents | mt6779 | osc_d10 | clk26m | osc_d4 | osc_d8 | osc_d16 |
| fpwrap_ulposc_parents | mt8183 | clk26m | osc_d16 | osc_d4 | osc_d8 |
| fufs_parents | mt6779 | clk26m | mainpll_d2_d4 | mainpll_d2_d8 | mainpll_d2_d16 |
| fufs_parents | mt8183 | clk26m | syspll_d2_d4 | syspll_d2_d8 | syspll_d2_d16 |
| gcpu_cpm_parents | mt8365 | clk26m | univpll2_d2 | syspll2_d2 |
| gcpu_parents | mt2712 | clk26m | syspll_d3 | syspll1_d2 | univpll1_d2 | univpll_d5 | univpll3_d2 | univpll_d3 |
| gcpu_parents | mt8135 | clk26m | syspll_d4 | univpll_d7 | syspll_d5 | syspll_d6 |
| gcpu_parents | mt8188 | clk26m | mainpll_d6 | univpll_d4_d2 | mmpll_d5_d2 | univpll_d5_d2 |
| gcpu_parents | mt8195 | clk26m | mainpll_d6 | univpll_d4_d2 | mmpll_d5_d2 | univpll_d5_d2 |
| gcpu_parents | mt8365 | clk26m | univpll_d3 | univpll2_d2 | syspll_d3 | syspll2_d2 |
| gfmux_emi1x_parents | mt8167 | clk26m_ck | dmpll_ck |
| gpt10m_parents | mt7629 | clkxtal | clkxtal_d4 |
| hd20_dacr_ref_parents | mt8195 | clk26m | univpll_d4_d2 | univpll_d4_d4 | univpll_d4_d8 |
| hd20_hdcp_c_parents | mt8195 | clk26m | msdcpll_d4 | univpll_d4_d8 | univpll_d6_d8 |
| hdcp_24m_parents | mt2712 | clk26m | univpll_d26 | univpll_d52 | univpll2_d8 |
| hdcp_24m_parents | mt8173 | clk26m | univpll_d26 | univpll_d52 | univpll2_d8 |
| hdcp_24m_parents | mt8188 | clk26m | univpll_192m_d4 | univpll_192m_d8 | univpll_d6_d8 |
| hdcp_24m_parents | mt8195 | clk26m | univpll_192m_d4 | univpll_192m_d8 | univpll_d6_d8 |
| hdcp_parents | mt2712 | clk26m | syspll4_d2 | syspll3_d4 | univpll2_d4 |
| hdcp_parents | mt8173 | clk26m | syspll4_d2 | syspll3_d4 | univpll2_d4 |
| hdcp_parents | mt8188 | clk26m | univpll_d4_d8 | mainpll_d5_d8 | univpll_d6_d4 |
| hdcp_parents | mt8195 | clk26m | univpll_d4_d8 | mainpll_d5_d8 | univpll_d6_d4 |
| hdmi_apb_parents | mt8188 | clk26m | univpll_d6_d4 | msdcpll_d2 |
| hdmi_apb_parents | mt8195 | clk26m | univpll_d6_d4 | msdcpll_d2 |
| hdmi_parents | mt2701 | clk26m | hdmipll_ck | hdmipll_d2 | hdmipll_d3 |
| hdmi_parents | mt8173 | clk26m | hdmitx_dig_cts | hdmitxpll_d2 | hdmitxpll_d3 |
| hdmi_xtal_parents | mt8195 | clk26m | clk26m_d2 |
| hdmipll_parents | mt8135 | clk26m | hdmitx_clkdig_cts | hdmitx_clkdig_d2 | hdmitx_clkdig_d3 |
| hdmirx_bist_parents | mt2701 | clk26m | syspll_d3 | clk26m | syspll1_d16 | syspll4_d2 | syspll1_d4 | vencpll_ck | clk26m |
| hdmirx_parents | mt2701 | clk26m | univpll_d52 |
| hif_parents | mt7629 | clkxtal | syspll1_d2 | univpll1_d2 | syspll1_d4 | univpll_d5 | clk_null | univpll_d7 |
| i2c_parents | mt2712 | clk26m | univpll_d26 | univpll2_d4 | univpll3_d2 | univpll1_d4 |
| i2c_parents | mt6765 | clk26m | univpll3_d4 | univpll3_d2 | syspll1_d8 | syspll2_d8 |
| i2c_parents | mt6779 | clk26m | mainpll_d2_d8 | univpll_d5_d2 |
| i2c_parents | mt7981 | cb_cksq_40m | net1_d5_d4 | cb_m_d4 | net1_d8_d4 |
| i2c_parents | mt7988 | top_xtal | net1pll_d5_d4 | mpll_d4 | net1pll_d8_d4 |
| i2c_parents | mt8167 | clk26m_ck | univpll_d20 | univpll_d16 | univpll_d12 |
| i2c_parents | mt8183 | clk26m | syspll_d2_d8 | univpll_d5_d2 |
| i2c_parents | mt8186 | clk26m | univpll_d5_d4 | univpll_d3_d4 | univpll_d5_d2 |
| i2c_parents | mt8188 | clk26m | mainpll_d4_d8 | univpll_d5_d4 |
| i2c_parents | mt8192 | clk26m | mainpll_d4_d8 | univpll_d5_d4 |
| i2c_parents | mt8195 | clk26m | mainpll_d4_d8 | univpll_d5_d4 |
| i2c_parents | mt8196 | clk26m | mainpll_d4_d8 | univpll_d5_d4 | mainpll_d4_d4 | univpll_d5_d2 |
| i2c_parents | mt8365 | clk26m | univpll3_d4 | univpll3_d2 | syspll1_d8 | syspll2_d8 |
| i2c_parents | mt8516 | clk26m_ck | univpll_d20 | univpll_d16 | univpll_d12 |
| i2s0_m_ck_parents | mt6795 | apll1_div1 | apll2_div1 |
| i2s0_m_ck_parents | mt8173 | apll1_div1 | apll2_div1 |
| i2s1_m_ck_parents | mt6795 | apll1_div2 | apll2_div2 |
| i2s1_m_ck_parents | mt8173 | apll1_div2 | apll2_div2 |
| i2s2_m_ck_parents | mt6795 | apll1_div3 | apll2_div3 |
| i2s2_m_ck_parents | mt8173 | apll1_div3 | apll2_div3 |
| i2s3_b_ck_parents | mt6795 | apll1_div5 | apll2_div5 |
| i2s3_b_ck_parents | mt8173 | apll1_div5 | apll2_div5 |
| i2s3_m_ck_parents | mt6795 | apll1_div4 | apll2_div4 |
| i2s3_m_ck_parents | mt8173 | apll1_div4 | apll2_div4 |
| i2s_parents | mt8195 | clk26m | apll1 | apll2 | apll3 | apll4 | apll5 | hdmirx_apll |
| i2si1_parents | mt8188 | clk26m | apll1 | apll2 | apll3 | apll4 | apll5 |
| i2si2_parents | mt8188 | clk26m | apll1 | apll2 | apll3 | apll4 | apll5 |
| i2so1_parents | mt2712 | clk26m | apll1_ck | apll2_ck |
| i2so1_parents | mt8188 | clk26m | apll1 | apll2 | apll3 | apll4 | apll5 |
| i2so2_parents | mt8188 | clk26m | apll1 | apll2 | apll3 | apll4 | apll5 |
| img_parents | mt6779 | clk26m | mainpll_d2 | mainpll_d2 | univpll_d3 | mainpll_d3 | mmpll_d5_d2 | tvdpll_mainpll_d2_ck | mainpll_d5 |
| img_parents | mt8183 | clk26m | mmpll_d6 | univpll_d3 | syspll_d3 | univpll_d2_d2 | syspll_d2_d2 | univpll_d3_d2 | syspll_d3_d2 |
| img_parents | mt8188 | clk26m | imgpll | univpll_d4 | mainpll_d4 | univpll_d5 | mmpll_d6 | mmpll_d7 | univpll_d6 | mainpll_d6 | mmpll_d4_d2 | univpll_d4_d2 | mainpll_d4_d2 | univpll_d5_d2 |
| img_parents | mt8192 | clk26m | univpll_d4 | tvdpll_ck | mainpll_d4 | univpll_d5 | mmpll_d6 | univpll_d6 | mainpll_d6 | mmpll_d4_d2 | mainpll_d4_d2 | mmpll_d6_d2 | mmpll_d5_d2 |
| img_parents | mt8195 | clk26m | imgpll | univpll_d4 | mainpll_d4 | univpll_d5 | mmpll_d6 | univpll_d6 | mainpll_d6 | mmpll_d4_d2 | univpll_d4_d2 | mainpll_d4_d2 | univpll_d5_d2 |
| infra_mux1_parents | mt7629 | clkxtal | armpll | main_core_en | armpll |
| intdir_parents | mt2701 | clk26m | mmpll_ck | syspll_d2 | univpll_d2 |
| intdir_parents | mt7622 | clkxtal | syspll_d2 | univpll_d2 | sgmiipll_ck |
| intdir_parents | mt8188 | clk26m | univpll_d6 | mainpll_d4 | univpll_d4 |
| intdir_parents | mt8195 | clk26m | univpll_d6 | mainpll_d4 | univpll_d4 |
| io_noc_parents | mt8196 | clk26m | osc_d20 | osc_d8 | osc_d4 | mainpll_d6_d2 | mainpll_d9 |
| ipe_parents | mt6779 | clk26m | mainpll_d2 | mmpll_d7 | univpll_d3 | mainpll_d3 | mmpll_d5_d2 | mainpll_d2_d2 | mainpll_d5 |
| ipe_parents | mt8188 | clk26m | imgpll | mainpll_d4 | mmpll_d6 | univpll_d6 | mainpll_d6 | mmpll_d4_d2 | univpll_d4_d2 | mainpll_d4_d2 | mmpll_d6_d2 | univpll_d5_d2 | mainpll_d7 |
| ipe_parents | mt8192 | clk26m | mainpll_d4 | mmpll_d6 | univpll_d6 | mainpll_d6 | univpll_d4_d2 | mainpll_d4_d2 | mmpll_d6_d2 | mmpll_d5_d2 |
| ipe_parents | mt8195 | clk26m | imgpll | mainpll_d4 | mmpll_d6 | univpll_d6 | mainpll_d6 | mmpll_d4_d2 | univpll_d4_d2 | mainpll_d4_d2 | mmpll_d6_d2 | univpll_d5_d2 |
| ipseast_parents | mt8196 | clk26m | mainpll_d6 | mainpll_d5 | mainpll_d4 | mainpll_d3 |
| ipu_if_parents | mt6779 | clk26m | univpll_d3_d8 | univpll_d3_d4 | mainpll_d2_d4 | univpll_d3_d2 | mainpll_d2_d2 | univpll_d2_d2 | mainpll_d3 | univpll_d3 | mmpll_d7 | mmpll_d6 | adsppll_d5 | tvdpll_ck | tvdpll_mainpll_d2_ck | univpll_d2 | adsppll_d4 |
| ipu_if_parents | mt8183 | clk26m | mmpll_d6 | mmpll_d7 | univpll_d3 | syspll_d3 | univpll_d2_d2 | syspll_d2_d2 | univpll_d3_d2 | syspll_d3_d2 |
| ipu_if_parents | mt8195 | clk26m | univpll_d6_d2 | univpll_d5_d2 | mainpll_d4_d2 | mainpll_d6 | univpll_d5 | univpll_d4 | mmpll_d4 |
| irda_parents | mt2712 | clk26m | univpll2_d4 | syspll2_d4 | univpll2_d8 |
| irda_parents | mt6795 | clk26m | univpll2_d4 | syspll2_d4 | dmpll_d8 |
| irda_parents | mt8135 | clk26m | univpll2_d8 | univpll1_d6 |
| irda_parents | mt8173 | clk26m | univpll2_d4 | syspll2_d4 |
| irda_sel_parents | mt6735 | clk26m | univpll2_d4 |
| irrx_parents | mt7629 | clkxtal | syspll4_d16 |
| irtx_sel_parents | mt6735 | clk26m | ad_sys_26m_ck |
| isp_parents | mt8186 | clk26m | mainpll_d2 | mainpll_d2_d2 | univpll_d3 | mainpll_d3 | mmpll | univpll_d5 | univpll_d2_d2 | mmpll_d2 |
| jpg_parents | mt8135 | clk26m | syspll_d5 | syspll_d4 | syspll_d3 | univpll_d7 | univpll2_d2 | univpll_d5 |
| jpgdec_parents | mt2712 | clk26m | univpll_d3 | tvdpll_429m | vencpll_ck | syspll_d3 | vcodecpll_ck | univpll1_d2 | armca35pll_400m | tvdpll_429m_d2 | tvdpll_429m_d4 |
| macsec_parents | mt7988 | top_xtal | sgmpll | net1pll_d8 |
| mbist_diag_parents | mt8365 | clk26m | syspll4_d4 | univpll2_d8 |
| mcu_infra_parents | mt8196 | clk26m | osc_d20 | mainpll_d7_d2 | mainpll_d5_d2 | mainpll_d4_d2 | mainpll_d9 | mainpll_d6 |
| mcu_l3gic_parents | mt8196 | clk26m | osc_d8 | mainpll_d4_d4 | mainpll_d7_d2 |
| mcupm_parents | mt8188 | clk26m | mainpll_d6_d2 | mainpll_d7_d4 |
| mcupm_parents | mt8195 | clk26m | mainpll_d6_d2 | mainpll_d7_d4 |
| mcupm_parents | mt8196 | clk26m | mainpll_d7_d2 | mainpll_d6_d2 | univpll_d6_d2 | mainpll_d5_d2 |
| mcusys_backup_625m_parents | mt7988 | top_xtal | net1pll_d4 |
| md_emi_parents | mt8196 | clk26m | mainpll_d4 |
| mdp_parents | mt8186 | clk26m | mainpll_d5 | univpll_d5 | mainpll_d2_d2 | univpll_d2_d2 | mainpll_d3 | univpll_d3 | mainpll_d2 | mmpll |
| mdp_parents | mt8192 | clk26m | mainpll_d5_d2 | mmpll_d6_d2 | mainpll_d4_d2 | mmpll_d4_d2 | mainpll_d6 | univpll_d6 | mainpll_d4 | tvdpll_ck | univpll_d4 | mmpll_d5_d2 |
| mem_mfg_in_parents | mt6795 | clk26m | mmpll_ck | dmpll_ck |
| mem_mfg_in_parents | mt8173 | clk26m | mmpll_ck | dmpll_ck | clk26m |
| mem_mfg_parents | mt2712 | clk26m | mmpll_ck | univpll_d3 |
| mem_parents | mt2701 | clk26m | dmpll_ck |
| mem_parents | mt2712 | clk26m | dmpll_ck |
| mem_parents | mt6765 | clk26m | dmpll_ck | apll1_ck |
| mem_parents | mt6795 | clk26m | dmpll_ck |
| mem_parents | mt7622 | clkxtal | dmpll_ck |
| mem_parents | mt7629 | clkxtal | dmpll_ck |
| mem_parents | mt8135 | clk26m | clkph_mck |
| mem_parents | mt8173 | clk26m | dmpll_ck |
| mem_parents | mt8365 | clk26m | mmpll_ck | syspll_d3 | syspll1_d2 |
| mem_sel_parents | mt6735 | clk26m | dmpll |
| mem_sub_parents | mt8196 | clk26m | osc_d20 | osc_d4 | univpll_d4_d4 | osc_d3 | mainpll_d5_d2 | mainpll_d4_d2 | mainpll_d6 | mainpll_d5 | univpll_d5 | mainpll_d4 | mainpll_d3 |
| mfg13m_sel_parents | mt6735 | clk26m | ad_sys_26m_d2 |
| mfg_52m_parents | mt6797 | clk26m | univpll2_d8 | univpll2_d4 | univpll2_d4 |
| mfg_core_tmp_parents | mt8188 | clk26m | mainpll_d5_d2 |
| mfg_eb_parents | mt8196 | clk26m | mainpll_d7_d2 | mainpll_d6_d2 | mainpll_d5_d2 |
| mfg_fast_parents | mt8195 | top_mfg_core_tmp | mfgpll |
| mfg_fast_ref_parents | mt8188 | top_mfg_core_tmp | mfgpll |
| mfg_mm_parents | mt8167 | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | csw_mux_mfg_sel | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | mainpll_d3 | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | mainpll_d5 | mainpll_d7 | clk_null | mainpll_d14 |
| mfg_parents | mt2701 | clk26m | mmpll_ck | dmpll_x2_ck | msdcpll_ck | clk26m | syspll_d3 | univpll_d3 | univpll1_d2 |
| mfg_parents | mt2712 | clk26m | mmpll_ck | univpll_d3 | clk26m | clk26m | clk26m | clk26m | clk26m | clk26m | syspll_d3 | syspll1_d2 | syspll_d5 | univpll_d3 | univpll1_d2 | univpll_d5 | univpll2_d2 |
| mfg_parents | mt6765 | clk26m | mfgpll_ck | syspll_d3 | univpll_d3 |
| mfg_parents | mt6779 | clk26m | mfgpll_ck | univpll_d3 | mainpll_d5 |
| mfg_parents | mt6795 | clk26m | mmpll_ck | dmpll_ck | clk26m | clk26m | clk26m | clk26m | clk26m | clk26m | syspll_d3 | syspll1_d2 | syspll_d5 | univpll_d3 | univpll1_d2 | univpll_d5 | univpll2_d2 |
| mfg_parents | mt6797 | clk26m | mfgpll_ck | syspll_d3 | univpll_d3 |
| mfg_parents | mt8135 | clk26m | univpll1_d4 | syspll_d2 | syspll_d2p5 | syspll_d3 | univpll_d5 | univpll1_d2 | mmpll_d2 | mmpll_d3 | mmpll_d4 | mmpll_d5 | mmpll_d6 | mmpll_d7 |
| mfg_parents | mt8173 | clk26m | mmpll_ck | dmpll_ck | clk26m | clk26m | clk26m | clk26m | clk26m | clk26m | syspll_d3 | syspll1_d2 | syspll_d5 | univpll_d3 | univpll1_d2 | univpll_d5 | univpll2_d2 |
| mfg_parents | mt8183 | clk26m | mfgpll_ck | univpll_d3 | syspll_d3 |
| mfg_parents | mt8186 | clk26m | mfgpll | mainpll_d3 | mainpll_d5 |
| mfg_parents | mt8195 | clk26m | mainpll_d5_d2 |
| mfg_parents | mt8365 | clk26m | mfgpll_ck | syspll_d3 | univpll_d3 |
| mfg_pll_parents | mt8192 | mfg_ref_sel | mfgpll |
| mfg_ref_parents | mt8192 | clk26m | clk26m | univpll_d6 | mainpll_d5_d2 |
| mfg_ref_parents | mt8196 | clk26m | mainpll_d7_d2 |
| mfg_sel_parents | mt6735 | clk26m | mmpll | clk26m | clk26m | clk26m | clk26m | clk26m | clk26m | clk26m | syspll_d3 | syspll1_d2 | syspll_d5 | univpll_d3 | univpll1_d2 |
| mjc_parents | mt6795 | clk26m | univpll_d3 | vcodecpll_ck | tvdpll_445p5m | vencpll_d2 | syspll_d3 | univpll1_d2 | syspll_d5 | syspll1_d2 | univpll_d5 | univpll2_d2 | dmpll_ck |
| mjc_parents | mt6797 | clk26m | imgpll_ck | univpll_d5 | syspll1_d2 |
| mm_parents | mt2701 | clk26m | vencpll_ck | syspll1_d2 | syspll1_d4 | univpll_d5 | univpll1_d2 | univpll2_d2 | dmpll_ck |
| mm_parents | mt2712 | clk26m | vencpll_ck | syspll_d3 | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll1_d2 | univpll2_d2 |
| mm_parents | mt6765 | clk26m | mmpll_ck | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll_d5 | univpll1_d2 | mmpll_d2 |
| mm_parents | mt6779 | clk26m | tvdpll_mainpll_d2_ck | mmpll_d7 | mmpll_d5_d2 | mainpll_d2_d2 | mainpll_d3_d2 |
| mm_parents | mt6795 | clk26m | vencpll_d2 | syspll_d3 | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll1_d2 | univpll2_d2 | dmpll_d2 |
| mm_parents | mt6797 | clk26m | imgpll_ck | univpll1_d2 | syspll1_d2 |
| mm_parents | mt8173 | clk26m | vencpll_d2 | main_h364m | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll1_d2 | univpll2_d2 | dmpll_d2 |
| mm_parents | mt8183 | clk26m | mmpll_d7 | syspll_d3 | univpll_d2_d2 | syspll_d2_d2 | syspll_d3_d2 |
| mm_parents | mt8365 | clk26m | mmpll_ck | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll_d5 | univpll1_d2 | mmpll_d2 |
| mm_sel_parents | mt6735 | clk26m | vencpll | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll_d5 | univpll2_d2 | dmpll |
| ms_card_parents | mt2701 | clk26m | univpll3_d8 | syspll4_d4 |
| msdc0_parents | mt8167 | clk26m_ck | univpll_d6 | mainpll_d8 | univpll_d8 | mainpll_d16 | mmpll_200m | mainpll_d12 | mmpll_d2 |
| msdc0_parents | mt8516 | clk26m_ck | univpll_d6 | mainpll_d8 | univpll_d8 | mainpll_d16 | mmpll_200m | mainpll_d12 | mmpll_d2 |
| msdc0p_aes_parents | mt2712 | clk26m | syspll_d2 | univpll_d3 | vcodecpll_ck |
| msdc1_parents | mt8167 | clk26m_ck | univpll_d6 | mainpll_d8 | univpll_d8 | mainpll_d16 | mmpll_200m | mainpll_d12 | mmpll_d2 |
| msdc1_parents | mt8516 | clk26m_ck | univpll_d6 | mainpll_d8 | univpll_d8 | mainpll_d16 | mmpll_200m | mainpll_d12 | mmpll_d2 |
| msdc2_parents | mt8167 | clk26m_ck | univpll_d6 | mainpll_d8 | univpll_d8 | mainpll_d16 | mmpll_200m | mainpll_d12 | mmpll_d2 |
| msdc2_parents | mt8516 | clk26m_ck | univpll_d6 | mainpll_d8 | univpll_d8 | mainpll_d16 | mmpll_200m | mainpll_d12 | mmpll_d2 |
| msdc30_0_parents | mt7622 | clkxtal | univpll2_d16 | univ48m |
| msdc30_0_parents | mt7629 | clkxtal | univpll2_d16 | univ48m |
| msdc30_0_sel_parents | mt6735 | clk26m | msdcpll | msdcpll_d2 | msdcpll_d4 | syspll2_d2 | syspll1_d4 | univpll1_d4 | univpll_d3 | univpll_d26 | syspll2_d4 | univpll_d2 |
| msdc30_1_2_sel_parents | mt6735 | clk26m | univpll2_d2 | msdcpll_d4 | syspll2_d2 | syspll1_d4 | univpll1_d4 | univpll_d26 | syspll2_d4 |
| msdc30_1_parents | mt2712 | clk26m | univpll2_d2 | msdcpll_d2 | univpll1_d4 | syspll2_d2 | univpll_d7 | vencpll_d2 |
| msdc30_1_parents | mt6765 | clk26m | msdcpll_d2 | univpll2_d2 | syspll2_d2 | syspll1_d4 | univpll1_d4 | usb20_192m_d4 | syspll2_d4 |
| msdc30_1_parents | mt6779 | clk26m | univpll_d3_d2 | mainpll_d3_d2 | mainpll_d7 | msdcpll_d2 |
| msdc30_1_parents | mt6795 | clk26m | univpll2_d2 | msdcpll_d4 | univpll1_d4 | syspll2_d2 | syspll_d7 | univpll_d7 | vencpll_d4 |
| msdc30_1_parents | mt6797 | clk26m | univpll2_d2 | msdcpll_d2 | univpll1_d4 | syspll2_d2 | syspll_d7 | univpll_d7 |
| msdc30_1_parents | mt7629 | clkxtal | univpll2_d16 | univ48m | syspll2_d4 | univpll2_d4 | syspll_d7 | syspll2_d2 | univpll2_d2 |
| msdc30_1_parents | mt8173 | clk26m | univpll2_d2 | msdcpll_d4 | univpll1_d4 | syspll2_d2 | syspll_d7 | univpll_d7 | vencpll_d4 |
| msdc30_1_parents | mt8183 | clk26m | univpll_d3_d2 | syspll_d3_d2 | syspll_d7 | msdcpll_d2 |
| msdc30_1_parents | mt8186 | clk26m | msdcpll_d2 | univpll_d3_d2 | mainpll_d3_d2 | mainpll_d7 |
| msdc30_1_parents | mt8188 | clk26m | univpll_d6_d2 | mainpll_d6_d2 | mainpll_d7_d2 | msdcpll_d2 |
| msdc30_1_parents | mt8365 | clk26m | msdcpll_d2 | univpll2_d2 | syspll2_d2 | univpll1_d4 | syspll1_d4 | syspll2_d4 | univpll2_d8 |
| msdc30_2_parents | mt6795 | clk26m | univpll2_d2 | msdcpll_d4 | univpll1_d4 | syspll2_d2 | syspll_d7 | univpll_d7 | vencpll_d2 |
| msdc30_2_parents | mt6797 | clk26m | univpll2_d8 | syspll2_d8 | syspll1_d8 | msdcpll_d8 | syspll3_d4 | univpll_d26 |
| msdc30_2_parents | mt8173 | clk26m | univpll2_d2 | msdcpll_d4 | univpll1_d4 | syspll2_d2 | syspll_d7 | univpll_d7 | vencpll_d2 |
| msdc30_2_parents | mt8183 | clk26m | univpll_d3_d2 | syspll_d3_d2 | syspll_d7 | msdcpll_d2 |
| msdc30_2_parents | mt8188 | clk26m | univpll_d6_d2 | mainpll_d6_d2 | mainpll_d7_d2 | msdcpll_d2 |
| msdc30_3_parents | mt2712 | clk26m | msdcpll2_ck | msdcpll2_d2 | univpll2_d2 | msdcpll2_d4 | univpll1_d4 | syspll2_d2 | syspll_d7 | univpll_d7 | vencpll_d2 | msdcpll_ck | msdcpll_d2 | msdcpll_d4 |
| msdc30_3_parents | mt6795 | clk26m | univpll2_d2 | msdcpll_d4 | univpll1_d4 | syspll2_d2 | syspll_d7 | univpll_d7 | vencpll_d4 |
| msdc30_3_parents | mt8173 | clk26m | msdcpll2_ck | msdcpll2_d2 | univpll2_d2 | msdcpll2_d4 | msdcpll_d4 | univpll1_d4 | syspll2_d2 | syspll_d7 | univpll_d7 | vencpll_d4 | msdcpll_ck | msdcpll_d2 | msdcpll_d4 |
| msdc30_3_sel_parents | mt6735 | clk26m | univpll2_d2 | msdcpll_d4 | syspll2_d2 | syspll1_d4 | univpll1_d4 | univpll_d26 | msdcpll_d16 | syspll2_d4 |
| msdc30_parents | mt2701 | clk26m | msdcpll_d2 | syspll2_d2 | syspll1_d4 | univpll1_d4 | univpll2_d4 |
| msdc30_parents | mt8135 | clk26m | syspll_d6 | syspll_d5 | univpll1_d4 | univpll2_d4 | msdcpll |
| msdc30_parents | mt8192 | clk26m | univpll_d6_d2 | mainpll_d6_d2 | mainpll_d7_d2 | msdcpll_d2 |
| msdc30_parents | mt8195 | clk26m | univpll_d6_d2 | mainpll_d6_d2 | mainpll_d7_d2 | msdcpll_d2 |
| msdc30_parents | mt8196 | clk26m | univpll_d6_d4 | mainpll_d6_d2 | univpll_d6_d2 | msdcpll_d2 |
| msdc50_0_h_parents | mt2712 | clk26m | syspll1_d2 | syspll2_d2 | syspll4_d2 | univpll_d5 | univpll1_d4 |
| msdc50_0_h_parents | mt6795 | clk26m | syspll1_d2 | syspll2_d2 | syspll4_d2 | univpll_d5 | univpll1_d4 |
| msdc50_0_h_parents | mt8173 | clk26m | syspll1_d2 | syspll2_d2 | syspll4_d2 | univpll_d5 | univpll1_d4 |
| msdc50_0_h_parents | mt8192 | clk26m | mainpll_d4_d2 | mainpll_d6_d2 |
| msdc50_0_h_parents | mt8195 | clk26m | mainpll_d4_d2 | mainpll_d6_d2 |
| msdc50_0_hc_parents | mt8365 | clk26m | syspll1_d2 | univpll1_d4 | syspll2_d2 |
| msdc50_0_hclk_parents | mt6797 | clk26m | syspll1_d2 | syspll2_d2 | syspll4_d2 |
| msdc50_0_parents | mt2712 | clk26m | msdcpll_ck | msdcpll_d2 | univpll1_d4 | syspll2_d2 | msdcpll_d4 | vencpll_d2 | univpll1_d2 | msdcpll2_ck | msdcpll2_d2 | msdcpll2_d4 |
| msdc50_0_parents | mt6765 | clk26m | msdcpll_ck | syspll2_d2 | syspll4_d2 | univpll1_d2 | syspll1_d2 | univpll_d5 | univpll1_d4 |
| msdc50_0_parents | mt6779 | clk26m | msdcpll_ck | msdcpll_d2 | univpll_d2_d4 | mainpll_d3_d2 | univpll_d2_d2 |
| msdc50_0_parents | mt6795 | clk26m | msdcpll_ck | msdcpll_d2 | univpll1_d4 | syspll2_d2 | syspll_d7 | msdcpll_d4 | vencpll_d4 | tvdpll_ck | univpll_d2 | univpll1_d2 | mmpll_ck |
| msdc50_0_parents | mt6797 | clk26m | msdcpll | syspll_d3 | univpll1_d4 | syspll2_d2 | syspll_d7 | msdcpll_d2 | univpll1_d2 | univpll_d3 |
| msdc50_0_parents | mt8173 | clk26m | msdcpll_ck | msdcpll_d2 | univpll1_d4 | syspll2_d2 | syspll_d7 | msdcpll_d4 | vencpll_d4 | tvdpll_ck | univpll_d2 | univpll1_d2 | mmpll_ck | msdcpll2_ck | msdcpll2_d2 | msdcpll2_d4 |
| msdc50_0_parents | mt8183 | clk26m | msdcpll_ck | msdcpll_d2 | univpll_d2_d4 | syspll_d3_d2 | univpll_d2_d2 |
| msdc50_0_parents | mt8186 | clk26m | msdcpll | univpll_d3 | msdcpll_d2 | mainpll_d7 | mainpll_d3_d2 | univpll_d2_d2 |
| msdc50_0_parents | mt8188 | clk26m | msdcpll | msdcpll_d2 | univpll_d4_d4 | mainpll_d6_d2 | univpll_d4_d2 |
| msdc50_0_parents | mt8192 | clk26m | msdcpll_ck | msdcpll_d2 | univpll_d4_d4 | mainpll_d6_d2 | univpll_d4_d2 |
| msdc50_0_parents | mt8195 | clk26m | msdcpll | msdcpll_d2 | univpll_d4_d4 | mainpll_d6_d2 | univpll_d4_d2 |
| msdc50_0_parents | mt8365 | clk26m | msdcpll_ck | univpll1_d2 | syspll1_d2 | univpll_d5 | syspll2_d2 | univpll1_d4 | syspll4_d2 |
| msdc50_0_sel_parents | mt6735 | clk26m | syspll1_d2 | syspll2_d2 | syspll4_d2 | univpll_d5 | univpll1_d4 |
| msdc50_2_h_parents | mt8173 | clk26m | syspll1_d2 | syspll2_d2 | syspll4_d2 | univpll_d5 | univpll1_d4 |
| msdc50_2_parents | mt8365 | clk26m | msdcpll_ck | univpll_d3 | univpll1_d2 | syspll1_d2 | univpll2_d2 | syspll2_d2 | univpll1_d4 |
| msdc50_hclk_parents | mt6779 | clk26m | mainpll_d2_d2 | mainpll_d3_d2 |
| msdc50_hclk_parents | mt8183 | clk26m | syspll_d2_d2 | syspll_d3_d2 |
| msdc5hclk_parents | mt6765 | clk26m | syspll1_d2 | univpll1_d4 | syspll2_d2 |
| msdc5hclk_parents | mt8186 | clk26m | mainpll_d2_d2 | mainpll_d7 | mainpll_d3_d2 |
| msdc5hclk_parents | mt8188 | clk26m | mainpll_d4_d2 | mainpll_d6_d2 |
| netsys_2x_parents | mt7981 | cb_cksq_40m | cb_net2_800m | cb_mm_720m |
| netsys_2x_parents | mt7988 | top_xtal | net2pll | mmpll |
| netsys_500m_parents | mt7981 | cb_cksq_40m | cb_net1_d5 |
| netsys_500m_parents | mt7988 | top_xtal | net1pll_d5 | net1pll_d5_d2 |
| netsys_gsw_parents | mt7988 | top_xtal | net1pll_d4 | net1pll_d5 |
| netsys_mcu_parents | mt7981 | cb_cksq_40m | cb_mm_720m | cb_net1_d4 | cb_net1_d5 | cb_m_416m |
| netsys_mcu_parents | mt7988 | top_xtal | net2pll | mmpll | net1pll_d4 | net1pll_d5 | mpll |
| netsys_parents | mt7981 | cb_cksq_40m | cb_mm_d2 |
| netsys_parents | mt7988 | top_xtal | net2pll_d2 | mmpll_d2 |
| netsys_tops_400m_parents | mt7988 | top_xtal | net2pll_d2 |
| nfi1x_pad_parents | mt8167 | ahb_infra_sel | nfi1x_ck |
| nfi1x_pad_parents | mt8516 | ahb_infra_sel | nfi1x_ck |
| nfi1x_parents | mt7981 | cb_cksq_40m | cb_mm_d4 | net1_d8_d2 | cb_net2_d6 | cb_m_d4 | cb_mm_d8 | net1_d8_d4 | cb_m_d8 |
| nfi1x_parents | mt7988 | top_xtal | mmpll_d4 | net1pll_d8_d2 | net2pll_d6 | mpll_d4 | mmpll_d8 | net1pll_d8_d4 | mpll_d8 |
| nfi1x_parents | mt8195 | clk26m | univpll_d5_d4 | mainpll_d7_d4 | mainpll_d6_d4 | univpll_d6_d4 | mainpll_d4_d4 | mainpll_d7_d2 | mainpll_d6_d2 |
| nfi2x_pad_parents | mt8167 | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk26m_ck | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | mainpll_d12 | mainpll_d8 | clk_null | mainpll_d6 | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | mainpll_d4 | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | mainpll_d10 | mainpll_d7 | clk_null | mainpll_d5 |
| nfi2x_pad_parents | mt8516 | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk26m_ck | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | mainpll_d12 | mainpll_d8 | clk_null | mainpll_d6 | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | mainpll_d4 | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | mainpll_d10 | mainpll_d7 | clk_null | mainpll_d5 |
| nfi2x_parents | mt2701 | clk26m | syspll2_d2 | syspll_d7 | univpll3_d2 | syspll2_d4 | univpll3_d4 | syspll4_d4 | clk26m |
| nfi2x_parents | mt2712 | clk26m | syspll4_d4 | univpll3_d4 | univpll1_d8 | syspll2_d4 | univpll3_d2 | syspll_d7 | syspll2_d2 | univpll2_d2 | syspll_d5 | syspll1_d2 |
| nfi2x_parents | mt8365 | clk26m | syspll2_d2 | syspll_d7 | syspll_d3 | syspll2_d4 | msdcpll_d2 | univpll1_d2 | univpll_d5 |
| nfi_infra_parents | mt7622 | clkxtal | clkxtal | clkxtal | clkxtal | clkxtal | clkxtal | clkxtal | clkxtal | univpll2_d8 | syspll1_d8 | univpll1_d8 | syspll4_d2 | univpll2_d4 | univpll3_d2 | syspll1_d4 |
| nfi_infra_parents | mt7629 | clkxtal | clkxtal | clkxtal | clkxtal | clkxtal | clkxtal | univpll2_d8 | univpll3_d4 | syspll1_d8 | univpll1_d8 | syspll4_d2 | syspll2_d4 | univpll2_d4 | univpll3_d2 | syspll1_d4 | syspll_d7 |
| nfiecc_parents | mt2712 | clk26m | nfi2x_sel | syspll_d7 | syspll2_d2 | univpll2_d2 | univpll_d5 | syspll1_d2 |
| nfiecc_parents | mt8167 | clk_null | nfi2x_pad_sel | mainpll_d4 | clk_null | csw_nfiecc_sel |
| nfiecc_parents | mt8365 | clk26m | syspll4_d2 | univpll2_d4 | syspll_d7 | univpll1_d2 | syspll1_d2 | univpll2_d2 | syspll_d5 |
| nfiecc_parents | mt8516 | clk_null | nfi2x_pad_sel | mainpll_d4 | clk_null | csw_nfiecc_sel |
| nna2_parents | mt8186 | clk26m | univpll_d3_d8 | mainpll_d2_d4 | univpll_d3_d2 | mainpll_d2_d2 | univpll_d2_d2 | mainpll_d3 | univpll_d3 | mmpll | mainpll_d2 | univpll_d2 | nna2pll_d2 | nna2pll_d4 | nna2pll_d8 | nnapll | nna2pll |
| nna_parents | mt8186 | clk26m | univpll_d3_d8 | mainpll_d2_d4 | univpll_d3_d2 | mainpll_d2_d2 | univpll_d2_d2 | mainpll_d3 | univpll_d3 | mmpll | mainpll_d2 | univpll_d2 | nnapll_d2 | nnapll_d4 | nnapll_d8 | nnapll | nna2pll |
| nna_parents | mt8195 | clk26m | nnapll | univpll_d4 | mainpll_d4 | univpll_d5 | mmpll_d6 | univpll_d6 | mainpll_d6 | mmpll_d4_d2 | univpll_d4_d2 | mainpll_d4_d2 | mmpll_d6_d2 |
| npu_tops_parents | mt7988 | top_xtal | net2pll |
| nr_osd_parents | mt2701 | clk26m | vencpll_ck | syspll1_d2 | syspll1_d4 | univpll_d5 | univpll1_d2 | univpll2_d2 | dmpll_ck |
| nr_parents | mt2712 | clk26m | univpll1_d4 | syspll2_d2 | syspll1_d4 | univpll1_d8 | univpll3_d2 | univpll2_d2 | syspll_d5 |
| p_noc_parents | mt8196 | clk26m | mainpll_d5_d8 | mainpll_d5_d4 | osc_d4 | univpll_d4_d4 | mainpll_d5_d2 | mainpll_d4_d2 | mainpll_d6 | mainpll_d5 | univpll_d5 | mainpll_d4 | mainpll_d3 |
| padmclk_parents | mt2701 | clk26m | univpll_d26 | univpll_d52 | univpll_d108 | univpll2_d8 | univpll2_d16 | univpll2_d32 |
| pbus_156m_parents | mt8196 | clk26m | mainpll_d7_d2 | osc_d2 | mainpll_d7 |
| pcie_mbist_250m_parents | mt7988 | top_xtal | net1pll_d5_d2 |
| pe2_mac_p0_parents | mt2712 | clk26m | syspll1_d8 | syspll4_d2 | syspll2_d4 | univpll2_d4 | syspll3_d2 |
| peribus_ck_parents | mt7622 | syspll1_d8 | syspll1_d4 |
| peribus_ck_parents | mt7629 | syspll1_d8 | syspll1_d4 |
| pextp_tl_ck_parents | mt7981 | cb_cksq_40m | net1_d5_d4 | cb_m_d4 | cb_rtc_32k |
| pextp_tl_ck_parents | mt7988 | top_xtal | net2pll_d6 | mmpll_d8 | mpll_d8_d2 | top_rtc_32k |
| pmicspi_parents | mt2701 | clk26m | syspll1_d8 | syspll2_d4 | syspll4_d2 | syspll3_d4 | syspll2_d8 | syspll1_d16 | univpll3_d4 | univpll_d26 | dmpll_d2 | dmpll_d4 |
| pmicspi_parents | mt2712 | clk26m | syspll1_d8 | syspll3_d4 | syspll1_d16 | univpll3_d4 | univpll_d26 | syspll3_d4 |
| pmicspi_parents | mt6795 | clk26m | syspll1_d8 | syspll3_d4 | syspll1_d16 | univpll3_d4 | univpll_d26 | dmpll_d8 | dmpll_d16 |
| pmicspi_parents | mt6797 | clk26m | univpll_d26 | syspll3_d4 | syspll1_d8 | ulposc_d4 | ulposc_d8 | syspll2_d8 |
| pmicspi_parents | mt7622 | clkxtal | clk_null | clk_null | clk_null | clk_null | univpll2_d16 |
| pmicspi_parents | mt7629 | clkxtal | syspll1_d8 | syspll3_d4 | syspll1_d16 | univpll3_d4 | clkxtal | univpll2_d4 | dmpll_d8 |
| pmicspi_parents | mt8135 | clk26m | univpll2_d6 | syspll_d8 | syspll_d10 | univpll1_d10 | mempll_mck_d4 | univpll_d26 | syspll_d24 |
| pmicspi_parents | mt8167 | univpll_d20 | usb_phy48m_ck | univpll_d16 | clk26m_ck |
| pmicspi_parents | mt8173 | clk26m | syspll1_d8 | syspll3_d4 | syspll1_d16 | univpll3_d4 | univpll_d26 | dmpll_d8 | dmpll_d16 |
| pmicspi_parents | mt8183 | clk26m | syspll_d2_d8 | osc_d8 |
| pmicspi_parents | mt8516 | univpll_d20 | usb_phy48m_ck | univpll_d16 | clk26m_ck |
| pmicspi_sel_parents | mt6735 | clk26m | syspll1_d8 | syspll3_d4 | syspll1_d16 | univpll3_d4 | univpll_d26 | dmpll_d4 | dmpll_d8 |
| pwm_mm_parents | mt8167 | clk26m_ck | univpll_d12 |
| pwm_parents | mt2701 | clk26m | univpll2_d4 | univpll3_d2 | univpll1_d4 |
| pwm_parents | mt2712 | clk26m | univpll2_d4 | univpll3_d2 | univpll1_d4 |
| pwm_parents | mt6765 | clk26m | univpll3_d4 | syspll1_d8 |
| pwm_parents | mt6779 | clk26m | univpll_d2_d8 |
| pwm_parents | mt6795 | clk26m | univpll2_d4 | univpll3_d2 | univpll1_d4 |
| pwm_parents | mt6797 | clk26m | univpll2_d4 | ulposc_d2 | ulposc_d3 | ulposc_d8 | ulposc_d10 | ulposc_d4 |
| pwm_parents | mt7622 | clkxtal | univpll2_d4 |
| pwm_parents | mt7629 | clkxtal | univpll2_d4 |
| pwm_parents | mt7981 | cb_cksq_40m | net1_d8_d2 | net1_d5_d4 | cb_m_d4 | m_d8_d2 | cb_rtc_32k |
| pwm_parents | mt7988 | top_xtal | net1pll_d8_d2 | net1pll_d5_d4 | mpll_d4 | mpll_d8_d2 | top_rtc_32k |
| pwm_parents | mt8167 | clk26m_ck | univpll_d12 |
| pwm_parents | mt8173 | clk26m | univpll2_d4 | univpll3_d2 | univpll1_d4 |
| pwm_parents | mt8186 | clk26m | univpll_d3_d8 | univpll_d3_d4 | univpll_d2_d4 |
| pwm_parents | mt8188 | clk32k | clk26m | univpll_d4_d8 | univpll_d6_d4 |
| pwm_parents | mt8192 | clk26m | univpll_d4_d8 |
| pwm_parents | mt8195 | clk26m | univpll_d4_d8 |
| pwm_parents | mt8196 | clk26m | mainpll_d7_d4 | univpll_d4_d8 |
| pwm_parents | mt8365 | clk26m | univpll3_d4 | syspll1_d8 |
| pwm_parents | mt8516 | clk26m_ck | univpll_d12 |
| pwm_sel_parents | mt6735 | clk26m | univpll2_d4 | univpll3_d2 | univpll1_d4 |
| pwrap_ulposc_parents | mt8186 | clk26m | univpll_d5_d4 | ulposc1_d4 | ulposc1_d8 | ulposc1_d10 | ulposc1_d16 | ulposc1_d32 |
| pwrap_ulposc_parents | mt8188 | clk26m | ulposc1_d10 | ulposc1_d7 | ulposc1_d8 | ulposc1_d16 | mainpll_d4_d8 | univpll_d5_d8 | tvdpll1_d16 |
| pwrap_ulposc_parents | mt8192 | osc_d10 | clk26m | osc_d4 | osc_d8 | osc_d16 |
| pwrap_ulposc_parents | mt8195 | ulposc1_d10 | clk26m | ulposc1_d4 | ulposc1_d7 | ulposc1_d8 | ulposc1_d16 | mainpll_d4_d8 | univpll_d5_d8 |
| pwrmcu_parents | mt8195 | clk26m | mainpll_d7_d2 | mainpll_d6_d2 | mainpll_d5_d2 | mainpll_d9 | mainpll_d4_d2 |
| qaxi_aud26m_parents | mt8167 | clk26m_ck | ahb_infra_sel |
| qaxi_aud26m_parents | mt8516 | clk26m_ck | ahb_infra_sel |
| rtc_parents | mt2701 | 32k_internal | 32k_external | clk26m | univpll3_d8 |
| rtc_parents | mt2712 | clkrtc_int | clkrtc_ext | clk26m | univpll3_d8 |
| rtc_parents | mt8173 | clkrtc_int | clkrtc_ext | clk26m | univpll3_d8 |
| sata_parents | mt7629 | clkxtal | univpll2_d4 |
| scam_mm_parents | mt8167 | clk_null | clk26m_ck | mainpll_d14 | clk_null | mainpll_d12 |
| scam_parents | mt2712 | clk26m | syspll3_d2 | univpll2_d4 | syspll2_d4 |
| scam_parents | mt6779 | clk26m | mainpll_d5_d2 |
| scam_parents | mt6795 | clk26m | syspll3_d2 | univpll2_d4 | dmpll_d4 |
| scam_parents | mt8173 | clk26m | syspll3_d2 | univpll2_d4 | dmpll_d4 |
| scam_parents | mt8183 | clk26m | syspll_d5_d2 |
| scam_parents | mt8192 | clk26m | mainpll_d5_d4 |
| scam_sel_parents | mt6735 | clk26m | syspll3_d2 | univpll2_d4 | vencpll_d3 |
| scp_parents | mt2701 | clk26m | syspll1_d8 | dmpll_d2 | dmpll_d4 |
| scp_parents | mt6765 | clk26m | syspll4_d2 | univpll2_d2 | syspll1_d2 | univpll1_d2 | syspll_d3 | univpll_d3 |
| scp_parents | mt6779 | clk26m | univpll_d2_d8 | mainpll_d2_d4 | mainpll_d3 | univpll_d3 | ad_osc2_ck | osc2_d2 | osc2_d3 |
| scp_parents | mt6795 | clk26m | syspll1_d2 | univpll_d5 | syspll_d5 | dmpll_d2 | dmpll_d4 |
| scp_parents | mt6797 | clk26m | syspll_d3 | ulposc_ck | univpll_d5 |
| scp_parents | mt7629 | clkxtal | syspll1_d8 | univpll2_d2 | univpll2_d4 |
| scp_parents | mt8173 | clk26m | syspll1_d2 | univpll_d5 | syspll_d5 | dmpll_d2 | dmpll_d4 |
| scp_parents | mt8183 | clk26m | univpll_d2_d8 | syspll_d5 | syspll_d2_d2 | univpll_d2_d2 | syspll_d3 | univpll_d3 |
| scp_parents | mt8186 | clk26m | mainpll_d2_d4 | mainpll_d5 | mainpll_d2_d2 | mainpll_d3 | univpll_d3 |
| scp_parents | mt8188 | clk26m | univpll_d4 | mainpll_d6 | univpll_d6 | univpll_d4_d2 | mainpll_d4_d2 | univpll_d3 | mainpll_d3 |
| scp_parents | mt8192 | clk26m | univpll_d5 | mainpll_d6_d2 | mainpll_d6 | univpll_d6 | mainpll_d4_d2 | mainpll_d5_d2 | univpll_d4_d2 |
| scp_parents | mt8195 | clk26m | univpll_d4 | mainpll_d6 | univpll_d6 | univpll_d4_d2 | mainpll_d4_d2 | mainpll_d4 | mainpll_d6_d2 |
| scp_parents | mt8365 | clk26m | syspll4_d2 | univpll2_d2 | syspll1_d2 | univpll1_d2 | syspll_d3 | univpll_d3 |
| scp_sel_parents | mt6735 | clk26m | syspll1_d8 | dmpll_d2 | dmpll_d4 |
| sdf_parents | mt8196 | clk26m | mainpll_d5_d2 | mainpll_d4_d2 | mainpll_d6 | mainpll_d4 | univpll_d4 |
| senif_parents | mt8365 | clk26m | univpll1_d4 | univpll1_d2 | univpll2_d2 |
| seninf1_parents | mt6779 | clk26m | univpll_d7 | univpll_d3_d2 | univpll_d2_d2 | mainpll_d3 | mmpll_d4_d2 | mmpll_d7 | mmpll_d6 |
| seninf1_parents | mt8188 | clk26m | univpll_d4_d4 | univpll_d6_d2 | mainpll_d4_d2 | univpll_d7 | univpll_d6 | mmpll_d6 | univpll_d5 |
| seninf2_parents | mt6779 | clk26m | univpll_d7 | univpll_d3_d2 | univpll_d2_d2 | mainpll_d3 | mmpll_d4_d2 | mmpll_d7 | mmpll_d6 |
| seninf_parents | mt6765 | clk26m | univpll1_d4 | univpll1_d2 | univpll2_d2 |
| seninf_parents | mt6779 | clk26m | univpll_d7 | univpll_d3_d2 | univpll_d2_d2 | mainpll_d3 | mmpll_d4_d2 | mmpll_d7 | mmpll_d6 |
| seninf_parents | mt8183 | clk26m | univpll_d2_d2 | univpll_d3_d2 | univpll_d2_d4 |
| seninf_parents | mt8186 | clk26m | univpll_d2_d4 | univpll_d2_d2 | univpll_d3_d2 |
| seninf_parents | mt8188 | clk26m | univpll_d4_d4 | univpll_d6_d2 | mainpll_d4_d2 | univpll_d7 | univpll_d6 | mmpll_d6 | univpll_d5 |
| seninf_parents | mt8192 | clk26m | univpll_d4_d4 | univpll_d6_d2 | univpll_d4_d2 | univpll_d7 | univpll_d6 | mmpll_d6 | univpll_d5 |
| seninf_parents | mt8195 | clk26m | univpll_d4_d4 | univpll_d6_d2 | univpll_d4_d2 | univpll_d7 | univpll_d6 | mmpll_d6 | univpll_d5 |
| sflash_parents | mt8192 | clk26m | mainpll_d7_d8 | univpll_d6_d8 | univpll_d5_d8 |
| sflash_parents | mt8196 | clk26m | mainpll_d7_d8 | univpll_d6_d8 |
| sgm_0_parents | mt7988 | top_xtal | sgmpll |
| sgm_325m_parents | mt7981 | cb_cksq_40m | cb_sgm_325m |
| sgm_reg_parents | mt7981 | cb_cksq_40m | cb_net2_d4 |
| shared_axi_parents | mt8196 | clk26m | mainpll_d7_d8 | mainpll_d5_d8 | osc_d8 | mainpll_d7_d4 | mainpll_d5_d4 | mainpll_d4_d4 | mainpll_d7_d2 |
| shared_sub_parents | mt8196 | clk26m | mainpll_d5_d8 | mainpll_d5_d4 | osc_d4 | univpll_d4_d4 | mainpll_d5_d2 | mainpll_d4_d2 | mainpll_d6 | mainpll_d5 | univpll_d5 | mainpll_d4 |
| slow_mfg_parents | mt8167 | clk26m_ck | univpll_d12 | univpll_d24 |
| smapparents | mt8196 | clk26m | mainpll_d4_d8 |
| smi_mfg_as_parents | mt8135 | clk26m | smi_sel | mfg_sel | mem_sel |
| smi_mm_parents | mt8167 | clk26m_ck | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | clk_null | univpll_d4 | mainpll_d7 | clk_null | mainpll_d14 |
| smi_parents | mt8135 | clk26m | clkph_mck | syspll_d2p5 | syspll_d3 | syspll_d8 | univpll_d5 | univpll1_d2 | univpll1_d6 | mmpll_d3 | mmpll_d4 | mmpll_d5 | mmpll_d6 | mmpll_d7 | vdecpll | lvdspll |
| snps_eth_250m_parents | mt8188 | clk26m | ethpll_d2 |
| snps_eth_250m_parents | mt8195 | clk26m | ethpll_d2 |
| snps_eth_50m_rmii_parents | mt8188 | clk26m | ethpll_d10 |
| snps_eth_50m_rmii_parents | mt8195 | clk26m | ethpll_d10 |
| snps_eth_62p4m_ptp_parents | mt8188 | apll2_d3 | apll1_d3 | clk26m | ethpll_d8 |
| snps_eth_62p4m_ptp_parents | mt8195 | apll2_d3 | apll1_d3 | clk26m | ethpll_d8 |
| spi0_parents | mt7622 | clkxtal | syspll3_d2 | clkxtal | syspll2_d4 | syspll4_d2 | univpll2_d4 | univpll1_d8 | clkxtal |
| spi0_parents | mt7629 | clkxtal | syspll3_d2 | clkxtal | syspll2_d4 | syspll4_d2 | univpll2_d4 | univpll1_d8 | clkxtal |
| spi1_parents | mt7622 | clkxtal | syspll3_d2 | clkxtal | syspll4_d4 | syspll4_d2 | univpll2_d4 | univpll1_d8 | clkxtal |
| spi1_parents | mt7629 | clkxtal | syspll3_d2 | clkxtal | syspll4_d4 | syspll4_d2 | univpll2_d4 | univpll1_d8 | clkxtal |
| spi_b_parents | mt8196 | clk26m | univpll_d6_d4 | univpll_d5_d4 | mainpll_d4_d4 | univpll_d4_d4 | mainpll_d6_d2 | univpll_192m | univpll_d6_d2 |
| spi_parents | mt2701 | clk26m | syspll3_d2 | syspll4_d2 | univpll2_d4 | univpll1_d8 |
| spi_parents | mt2712 | clk26m | univpll2_d4 | univpll1_d4 | univpll2_d2 | univpll3_d2 | univpll1_d8 |
| spi_parents | mt6765 | clk26m | syspll3_d2 | syspll4_d2 | syspll2_d4 |
| spi_parents | mt6779 | clk26m | mainpll_d5_d2 | mainpll_d3_d4 | msdcpll_d4 |
| spi_parents | mt6795 | clk26m | syspll3_d2 | syspll1_d4 | syspll4_d2 | univpll3_d2 | univpll2_d4 | univpll1_d8 |
| spi_parents | mt6797 | clk26m | syspll3_d2 | syspll2_d4 | ulposc_spi_ck_mux |
| spi_parents | mt7981 | cb_cksq_40m | cb_m_d2 | cb_mm_d4 | net1_d8_d2 | cb_net2_d6 | net1_d5_d4 | cb_m_d4 | net1_d8_d4 |
| spi_parents | mt7988 | top_xtal | mpll_d2 | mmpll_d4 | net1pll_d8_d2 | net2pll_d6 | net1pll_d5_d4 | mpll_d4 | net1pll_d8_d4 |
| spi_parents | mt8135 | clk26m | syspll_d6 | syspll_d8 | syspll_d10 | univpll1_d6 | univpll1_d8 |
| spi_parents | mt8167 | clk26m_ck | univpll_d12 | univpll_d8 | univpll_d6 |
| spi_parents | mt8173 | clk26m | syspll3_d2 | syspll1_d4 | syspll4_d2 | univpll3_d2 | univpll2_d4 | univpll1_d8 |
| spi_parents | mt8183 | clk26m | syspll_d5_d2 | syspll_d3_d4 | msdcpll_d4 |
| spi_parents | mt8186 | clk26m | mainpll_d5_d4 | mainpll_d3_d4 | mainpll_d5_d2 | mainpll_d2_d4 | mainpll_d7 | mainpll_d3_d2 | mainpll_d5 |
| spi_parents | mt8188 | clk26m | mainpll_d5_d4 | mainpll_d6_d4 | univpll_d6_d4 | univpll_d6_d2 | mainpll_d6_d2 | mainpll_d4_d4 | univpll_d5_d4 |
| spi_parents | mt8192 | clk26m | mainpll_d5_d4 | mainpll_d6_d4 | msdcpll_d4 |
| spi_parents | mt8195 | clk26m | mainpll_d5_d4 | mainpll_d6_d4 | msdcpll_d4 | univpll_d6_d2 | mainpll_d6_d2 | mainpll_d4_d4 | univpll_d5_d4 |
| spi_parents | mt8365 | clk26m | univpll2_d2 | univpll2_d4 | univpll2_d8 |
| spi_parents | mt8516 | clk26m_ck | univpll_d12 | univpll_d8 | univpll_d6 |
| spi_sel_parents | mt6735 | clk26m | syspll3_d2 | msdcpll_d8 | syspll2_d4 | syspll4_d2 | univpll2_d4 | univpll1_d8 |
| spinfi_b_parents | mt8195 | clk26m | univpll_d6_d8 | univpll_d5_d8 | mainpll_d4_d8 | mainpll_d7_d4 | mainpll_d6_d4 | univpll_d6_d4 | univpll_d5_d4 |
| spinfi_ifr_parents | mt8173 | clk26m | univpll2_d8 | univpll3_d4 | syspll4_d2 | univpll2_d4 | univpll3_d2 | syspll1_d4 | univpll1_d4 |
| spinfi_parents | mt7981 | cksq_40m_d2 | cb_cksq_40m | net1_d5_d4 | cb_m_d4 | cb_mm_d8 | net1_d8_d4 | mm_d6_d2 | cb_m_d8 |
| spinfi_parents | mt7988 | top_xtal_d2 | top_xtal | net1pll_d5_d4 | mpll_d4 | mmpll_d8 | net1pll_d8_d4 | mmpll_d6_d2 | mpll_d8 |
| spinor_parents | mt2712 | clk26m | clk26m_d2 | syspll4_d4 | univpll2_d8 | univpll3_d4 | syspll4_d2 | syspll2_d4 | univpll2_d4 | etherpll_125m | syspll1_d4 |
| spinor_parents | mt8167 | clk26m_d2 | clk26m_ck | mainpll_d40 | univpll_d24 | univpll_d20 | mainpll_d20 | mainpll_d16 | univpll_d12 |
| spinor_parents | mt8186 | clk26m | clk13m | mainpll_d7_d4 | univpll_d3_d8 | univpll_d5_d4 | mainpll_d7_d2 |
| spinor_parents | mt8188 | clk26m | clk13m | mainpll_d7_d8 | univpll_d6_d8 |
| spinor_parents | mt8195 | clk26m | clk26m_d2 | mainpll_d7_d8 | univpll_d6_d8 |
| spinor_parents | mt8516 | clk26m_d2 | clk26m_ck | mainpll_d40 | univpll_d24 | univpll_d20 | mainpll_d20 | mainpll_d16 | univpll_d12 |
| spis_parents | mt8195 | clk26m | univpll_d6 | mainpll_d6 | univpll_d4_d2 | univpll_d6_d2 | univpll_d4_d4 | univpll_d6_d4 | mainpll_d7_d4 |
| spislv_parents | mt2712 | clk26m | univpll2_d4 | univpll1_d4 | univpll2_d2 | univpll3_d2 | univpll1_d8 | univpll1_d2 | univpll_d5 |
| spm_52m_parents | mt8167 | clk26m_ck | univpll_d24 |
| spm_parents | mt6765 | clk26m | syspll1_d8 |
| spm_parents | mt6779 | clk26m | osc_d8 | mainpll_d2_d8 |
| spm_parents | mt6797 | clk26m | syspll1_d8 |
| spm_parents | mt8183 | clk26m | syspll_d2_d8 |
| spm_parents | mt8186 | clk32k | ulposc1_d10 | clk26m | mainpll_d7_d2 |
| spm_parents | mt8188 | clk26m | ulposc1_d10 | mainpll_d7_d4 | clk32k |
| spm_parents | mt8192 | clk26m | osc_d10 | mainpll_d7_d4 | clk32k |
| spm_parents | mt8195 | clk26m | ulposc1_d10 | mainpll_d7_d4 | clk32k |
| spm_parents | mt8365 | clk26m | syspll1_d8 |
| spmi_m_mst_parents | mt8188 | clk26m | clk13m | ulposc1_d8 | ulposc1_d10 | ulposc1_d16 | ulposc1_d7 | clk32k | mainpll_d7_d8 | mainpll_d6_d8 | mainpll_d5_d8 |
| spmi_mst_parents | mt8186 | clk26m | univpll_d5_d4 | ulposc1_d4 | ulposc1_d8 | ulposc1_d10 | ulposc1_d16 | ulposc1_d32 |
| spmi_mst_parents | mt8192 | clk26m | csw_f26m_d2 | osc_d8 | osc_d10 | osc_d16 | osc_d20 | clk32k |
| spmi_p_mst_parents | mt8188 | clk26m | clk13m | ulposc1_d8 | ulposc1_d10 | ulposc1_d16 | ulposc1_d7 | clk32k | mainpll_d7_d8 | mainpll_d6_d8 | mainpll_d5_d8 |
| spmi_parents | mt8195 | clk26m | clk26m_d2 | ulposc1_d8 | ulposc1_d10 | ulposc1_d16 | ulposc1_d7 | clk32k | mainpll_d7_d8 | mainpll_d6_d8 | mainpll_d5_d8 |
| spu_parents | mt8196 | clk26m | mainpll_d4_d4 | mainpll_d4_d2 | mainpll_d7 | mainpll_d6 | mainpll_d5 |
| srck_parents | mt8186 | clk32k | clk26m | ulposc1_d10 |
| srck_parents | mt8188 | ulposc1_d10 | clk26m |
| srck_parents | mt8195 | ulposc1_d10 | clk26m |
| sspm_parents | mt6765 | clk26m | syspll1_d2 | syspll_d3 |
| sspm_parents | mt6779 | clk26m | univpll_d2_d4 | mainpll_d2_d2 | univpll_d2_d2 | mainpll_d3 |
| sspm_parents | mt8183 | clk26m | univpll_d2_d4 | syspll_d2_d2 | univpll_d2_d2 | syspll_d3 |
| sspm_parents | mt8186 | clk26m | mainpll_d2_d2 | mainpll_d3_d2 | mainpll_d5 | mainpll_d3 |
| sspm_parents | mt8188 | clk26m | mainpll_d7_d2 | mainpll_d6_d2 | mainpll_d5_d2 | mainpll_d9 | mainpll_d4_d2 |
| sspxtp_parents | mt7988 | top_xtal_d2 | mpll_d8_d2 |
| ssr_kdf_parents | mt8196 | clk26m | mainpll_d4_d4 | mainpll_d4_d2 | mainpll_d7 |
| ssr_parents | mt8196 | clk26m | mainpll_d4_d4 | mainpll_d4_d2 | mainpll_d7 | mainpll_d6 | mainpll_d5 |
| ssr_rng_parents | mt8196 | clk26m | mainpll_d4_d4 | mainpll_d5_d2 | mainpll_d4_d2 |
| ssusb_parents | mt8186 | clk26m | univpll_d5_d4 | univpll_d5_d2 |
| ssusb_sys_parents | mt8365 | clk26m | univpll3_d4 | univpll2_d4 | univpll3_d2 |
| ssusb_top_sys_parents | mt6797 | clk26m | univpll3_d2 |
| ssusb_top_xhci_parents | mt6779 | clk26m | univpll_d5_d4 | univpll_d3_d4 | univpll_d5_d2 |
| ssusb_top_xhci_parents | mt8183 | clk26m | univpll_d5_d4 | univpll_d3_d4 | univpll_d5_d2 |
| ssusb_xhci_2p_parents | mt8188 | clk26m | univpll_d5_d4 | univpll_d6_d4 | univpll_d5_d2 |
| ssusb_xhci_3p_parents | mt8188 | clk26m | univpll_d5_d4 | univpll_d6_d4 | univpll_d5_d2 |
| ssusb_xhci_parents | mt8188 | clk26m | univpll_d5_d4 | univpll_d6_d4 | univpll_d5_d2 |
| ssusb_xhci_parents | mt8192 | clk26m | univpll_d5_d4 | univpll_d6_d4 | univpll_d5_d2 |
| sysapb_parents | mt7981 | cb_cksq_40m | m_d3_d2 |
| sysapb_parents | mt7988 | top_xtal | mpll_d3_d2 |
| sysaxi_parents | mt7981 | cb_cksq_40m | net1_d8_d2 |
| tl_parents | mt8188 | clk26m | univpll_d5_d4 | mainpll_d4_d4 |
| tl_parents | mt8192 | clk26m | univpll_192m_d2 | mainpll_d6_d4 |
| tl_parents | mt8195 | clk26m | univpll_d5_d4 | mainpll_d4_d4 |
| tl_parents | mt8196 | clk26m | mainpll_d7_d4 | mainpll_d4_d4 | mainpll_d5_d2 |
| tvd_parents | mt2712 | clk26m | cvbs_d2 | univpll2_d8 |
| tve_parents | mt2701 | clk26m | mipipll | mipipll_d2 | mipipll_d4 | clk26m | tvdpll_ck | tvdpll_d2 | tvdpll_d4 |
| u2u3_parents | mt7981 | cb_cksq_40m | m_d8_d2 |
| u2u3_sys_parents | mt7981 | cb_cksq_40m | net1_d5_d4 |
| u3_occ_250m_parents | mt8186 | clk26m | univpll_d5 |
| u3_occ_500m_parents | mt8186 | clk26m | nna2pll_d2 |
| uart0_parents | mt8167 | clk26m_ck | univpll_d24 |
| uart0_parents | mt8516 | clk26m_ck | univpll_d24 |
| uart1_parents | mt8167 | clk26m_ck | univpll_d24 |
| uart1_parents | mt8516 | clk26m_ck | univpll_d24 |
| uart2_parents | mt8167 | clk26m_ck | univpll_d24 |
| uart2_parents | mt8516 | clk26m_ck | univpll_d24 |
| uart_parents | mt2701 | clk26m | univpll2_d8 |
| uart_parents | mt2712 | clk26m | univpll2_d8 |
| uart_parents | mt6765 | clk26m | univpll2_d8 |
| uart_parents | mt6779 | clk26m | univpll_d3_d8 |
| uart_parents | mt6795 | clk26m | univpll2_d8 |
| uart_parents | mt6797 | clk26m | univpll2_d8 |
| uart_parents | mt7622 | clkxtal | univpll2_d8 |
| uart_parents | mt7629 | clkxtal | univpll2_d8 |
| uart_parents | mt7981 | cb_cksq_40m | cb_m_d8 | m_d8_d2 |
| uart_parents | mt7988 | top_xtal | mpll_d8 | mpll_d8_d2 |
| uart_parents | mt8135 | clk26m | univpll2_d8 |
| uart_parents | mt8173 | clk26m | univpll2_d8 |
| uart_parents | mt8183 | clk26m | univpll_d3_d8 |
| uart_parents | mt8186 | clk26m | univpll_d3_d8 |
| uart_parents | mt8188 | clk26m | univpll_d6_d8 |
| uart_parents | mt8192 | clk26m | univpll_d6_d8 |
| uart_parents | mt8195 | clk26m | univpll_d6_d8 |
| uart_parents | mt8196 | clk26m | univpll_d6_d8 | univpll_d6_d4 | univpll_d6_d2 |
| uart_parents | mt8365 | clk26m | univpll2_d8 |
| uart_sel_parents | mt6735 | clk26m | univpll2_d8 |
| uarthub_b_parents | mt8196 | clk26m | univpll_d6_d4 | univpll_d6_d2 |
| ufs_mp_sap_parents | mt8195 | clk26m | msdcpll_d16 |
| ufs_parents | mt8186 | clk26m | mainpll_d7 | univpll_d2_d4 | mainpll_d2_d4 |
| ufs_parents | mt8192 | clk26m | mainpll_d4_d4 | mainpll_d4_d8 | univpll_d4_d4 | mainpll_d6_d2 | mainpll_d5_d2 | msdcpll_d2 |
| ufs_parents | mt8195 | clk26m | mainpll_d4_d4 | mainpll_d4_d8 | univpll_d4_d4 | mainpll_d6_d2 | univpll_d6_d2 | msdcpll_d2 |
| ufs_parents | mt8196 | clk26m | mainpll_d4_d4 | univpll_d6_d2 | mainpll_d4_d2 | univpll_d6 | mainpll_d5 | univpll_d5 |
| ufs_tick1us_parents | mt8195 | clk26m_d52 | clk26m |
| ulposc_axi_ck_mux_parents | mt6797 | syspll1_d4 | ulposc_axi_ck_mux_pre |
| ulposc_axi_ck_mux_pre_parents | mt6797 | ulposc_d2 | ulposc_d3 |
| ulposc_core_parents | mt8195 | ulposc2 | univpll_d7 | mainpll_d6 | ethpll_d10 |
| ulposc_parents | mt6765 | clk26m | ulposc1_d4 | ulposc1_d8 | ulposc1_d16 | ulposc1_d32 |
| ulposc_parents | mt8188 | ulposc_ck1 | ethpll_d2 | mainpll_d4_d2 | ethpll_d10 |
| ulposc_parents | mt8195 | ulposc1 | ethpll_d2 | mainpll_d4_d2 | ethpll_d10 |
| ulposc_spi_ck_mux_parents | mt6797 | ulposc_d2 | ulposc_d3 |
| usb20_parents | mt2701 | clk26m | univpll1_d8 | univpll3_d4 |
| usb20_parents | mt2712 | clk26m | univpll1_d8 | univpll3_d4 |
| usb20_parents | mt6795 | clk26m | univpll1_d8 | univpll3_d4 |
| usb20_parents | mt6797 | clk26m | univpll1_d8 | syspll4_d2 |
| usb20_parents | mt7622 | clkxtal | univpll3_d4 | syspll1_d8 | clkxtal |
| usb20_parents | mt7629 | clkxtal | univpll3_d4 | syspll1_d8 |
| usb20_parents | mt8135 | clk26m | univpll2_d6 | univpll1_d10 |
| usb20_parents | mt8173 | clk26m | univpll1_d8 | univpll3_d4 |
| usb20_sel_parents | mt6735 | clk26m | univpll1_d8 | univpll3_d4 |
| usb30_parents | mt2712 | clk26m | univpll3_d2 | univpll3_d4 | univpll2_d4 |
| usb30_parents | mt6795 | clk26m | univpll3_d2 | usb_syspll_125m | univpll2_d4 |
| usb30_parents | mt8173 | clk26m | univpll3_d2 | usb_syspll_125m | univpll2_d4 |
| usb_1p_parents | mt8196 | clk26m | univpll_d5_d4 |
| usb_2p_parents | mt8188 | clk26m | univpll_d5_d4 | univpll_d6_d4 | univpll_d5_d2 |
| usb_3p_parents | mt8188 | clk26m | univpll_d5_d4 | univpll_d6_d4 | univpll_d5_d2 |
| usb_78m_parents | mt8167 | clk_null | clk26m_ck | univpll_d16 | clk_null | mainpll_d20 |
| usb_78m_parents | mt8516 | clk_null | clk26m_ck | univpll_d16 | clk_null | mainpll_d20 |
| usb_fmcnt_p1_parents | mt8196 | clk26m | univpll_192m_d4 |
| usb_frmcnt_parents | mt7981 | cb_cksq_40m | cb_mm_d3_d5 |
| usb_frmcnt_parents | mt7988 | top_xtal | mmpll_d3_d5 |
| usb_parents | mt8186 | clk26m | univpll_d5_d4 | univpll_d5_d2 |
| usb_parents | mt8188 | clk26m | univpll_d5_d4 | univpll_d6_d4 | univpll_d5_d2 |
| usb_parents | mt8195 | clk26m | univpll_d5_d4 | univpll_d6_d4 | univpll_d5_d2 |
| usb_top_parents | mt6765 | clk26m | univpll3_d4 |
| usb_top_parents | mt6779 | clk26m | univpll_d5_d4 | univpll_d3_d4 | univpll_d5_d2 |
| usb_top_parents | mt8183 | clk26m | univpll_d5_d4 | univpll_d3_d4 | univpll_d5_d2 |
| usb_top_parents | mt8192 | clk26m | univpll_d5_d4 | univpll_d6_d4 | univpll_d5_d2 |
| usxgmii_sbus_0_parents | mt7988 | top_xtal | net1pll_d8_d4 |
| vdec_mm_parents | mt8167 | clk26m_ck | univpll_d4 | mainpll_d4 | univpll_d5 | univpll_d6 | mainpll_d6 |
| vdec_parents | mt2701 | clk26m | vdecpll_ck | syspll_d5 | syspll1_d4 | univpll_d5 | univpll2_d2 | vencpll_ck | msdcpll_d2 | mmpll_d2 |
| vdec_parents | mt2712 | clk26m | vcodecpll_ck | tvdpll_429m | univpll_d3 | vencpll_ck | syspll_d3 | univpll1_d2 | mmpll_d2 | syspll3_d2 | tvdpll_ck |
| vdec_parents | mt6779 | clk26m | univpll_d2_d4 | mainpll_d3 | univpll_d2_d2 | mainpll_d2_d2 | univpll_d3 | univpll_d5 | univpll_d5_d2 | mainpll_d2 | univpll_d2 | univpll_192m_d2 |
| vdec_parents | mt6795 | clk26m | vcodecpll_ck | tvdpll_445p5m | univpll_d3 | vencpll_d2 | syspll_d3 | univpll1_d2 | mmpll_d2 | dmpll_d2 | dmpll_d4 |
| vdec_parents | mt6797 | clk26m | vdecpll_ck | imgpll_ck | syspll_d3 | univpll_d5 | clk26m | clk26m |
| vdec_parents | mt8135 | clk26m | vdecpll | clkph_mck | syspll_d2p5 | syspll_d3 | syspll_d3p5 | syspll_d4 | syspll_d5 | syspll_d6 | syspll_d8 | univpll1_d2 | univpll2_d2 | univpll_d7 | univpll_d10 | univpll2_d4 | lvdspll |
| vdec_parents | mt8173 | clk26m | vcodecpll_ck | tvdpll_445p5m | univpll_d3 | vencpll_d2 | syspll_d3 | univpll1_d2 | mmpll_d2 | dmpll_d2 | dmpll_d4 |
| vdec_parents | mt8186 | clk26m | mainpll_d3 | mainpll_d2_d2 | univpll_d5 | mainpll_d2 | univpll_d3 | univpll_d2_d2 |
| vdec_parents | mt8188 | clk26m | mainpll_d5_d2 | mmpll_d6_d2 | univpll_d5_d2 | univpll_d4_d2 | mmpll_d4_d2 | univpll_d6 | mainpll_d5 | univpll_d5 | mmpll_d6 | mainpll_d4 | tvdpll2 | univpll_d4 | imgpll | univpll_d6_d2 | mmpll_d9 |
| vdec_parents | mt8192 | clk26m | univpll_192m_d2 | univpll_d5_d4 | mainpll_d5 | mainpll_d5_d2 | mmpll_d6_d2 | univpll_d5_d2 | mainpll_d4_d2 | univpll_d4_d2 | univpll_d7 | mmpll_d7 | mmpll_d6 | univpll_d5 | mainpll_d4 | univpll_d4 | univpll_d6 |
| vdec_parents | mt8195 | clk26m | mainpll_d5_d2 | mmpll_d6_d2 | univpll_d4_d2 | mmpll_d4_d2 | mainpll_d5 | mmpll_d6 | mmpll_d5 | vdecpll | univpll_d4 | mmpll_d4 | univpll_d6_d2 | mmpll_d9 | univpll_d6 | univpll_d5 | mainpll_d4 |
| vdec_sel_parents | mt6735 | clk26m | syspll1_d2 | syspll_d5 | syspll1_d4 | univpll_d5 | syspll_d2 | syspll2_d2 | msdcpll_d2 |
| venc_lt_parents | mt8173 | clk26m | univpll_d3 | vcodecpll_ck | tvdpll_445p5m | vencpll_d2 | syspll_d3 | univpll1_d2 | univpll2_d2 | syspll1_d2 | univpll_d5 | vcodecpll_370p5 | dmpll_ck |
| venc_parents | mt2712 | clk26m | univpll1_d2 | mmpll_d2 | tvdpll_d2 | syspll1_d2 | univpll_d5 | vcodecpll_d2 | univpll2_d2 | syspll3_d2 |
| venc_parents | mt6779 | clk26m | mmpll_d7 | mainpll_d3 | univpll_d2_d2 | mainpll_d2_d2 | univpll_d3 | mmpll_d6 | mainpll_d5 | mainpll_d3_d2 | mmpll_d4_d2 | univpll_d2_d4 | mmpll_d5 | univpll_192m_d2 |
| venc_parents | mt6795 | clk26m | vcodecpll_ck | tvdpll_445p5m | univpll_d3 | vencpll_d2 | syspll_d3 | univpll1_d2 | univpll2_d2 | dmpll_d2 | dmpll_d4 |
| venc_parents | mt6797 | clk26m | codecpll_ck | syspll_d3 |
| venc_parents | mt8135 | clk26m | syspll_d3 | syspll_d8 | univpll_d5 | univpll1_d6 | mmpll_d4 | mmpll_d5 | mmpll_d6 |
| venc_parents | mt8173 | clk26m | vcodecpll_ck | tvdpll_445p5m | univpll_d3 | vencpll_d2 | syspll_d3 | univpll1_d2 | univpll2_d2 | dmpll_d2 | dmpll_d4 |
| venc_parents | mt8186 | clk26m | mmpll | mainpll_d2_d2 | mainpll_d2 | univpll_d3 | univpll_d2_d2 | mainpll_d3 | mmpll |
| venc_parents | mt8188 | clk26m | mmpll_d4_d2 | mainpll_d6 | univpll_d4_d2 | mainpll_d4_d2 | univpll_d6 | mmpll_d6 | mainpll_d5_d2 | mainpll_d6_d2 | mmpll_d9 | univpll_d4_d4 | mainpll_d4 | univpll_d4 | univpll_d5 | univpll_d5_d2 | mainpll_d5 |
| venc_parents | mt8192 | clk26m | mmpll_d7 | mainpll_d6 | univpll_d4_d2 | mainpll_d4_d2 | univpll_d6 | mmpll_d6 | mainpll_d5_d2 | mainpll_d6_d2 | mmpll_d9 | univpll_d4_d4 | mainpll_d4 | univpll_d4 | univpll_d5 | univpll_d5_d2 | mainpll_d5 |
| venc_parents | mt8195 | clk26m | mmpll_d4_d2 | mainpll_d6 | univpll_d4_d2 | mainpll_d4_d2 | univpll_d6 | mmpll_d6 | mainpll_d5_d2 | mainpll_d6_d2 | mmpll_d9 | univpll_d4_d4 | mainpll_d4 | univpll_d4 | univpll_d5 | univpll_d5_d2 | mainpll_d5 |
| vpp_parents | mt8188 | clk26m | univpll_d6_d2 | mainpll_d5_d2 | mmpll_d6_d2 | univpll_d5_d2 | univpll_d4_d2 | mmpll_d4_d2 | mmpll_d7 | univpll_d6 | mainpll_d4 | mmpll_d5 | tvdpll1 | tvdpll2 | univpll_d4 | mmpll_d4 |
| vpp_parents | mt8195 | clk26m | univpll_d6_d2 | mainpll_d5_d2 | mmpll_d6_d2 | univpll_d5_d2 | univpll_d4_d2 | mmpll_d4_d2 | mmpll_d7 | univpll_d6 | mainpll_d4 | mmpll_d5 | tvdpll1 | tvdpll2 | univpll_d4 | mmpll_d4 |
| wpe_parents | mt8186 | clk26m | univpll_d3_d2 | mainpll_d5 | univpll_d5 | univpll_d2_d2 | mainpll_d3 | univpll_d3 | mainpll_d2 | mmpll |
| wpe_vpp_parents | mt8188 | clk26m | mainpll_d5_d2 | mmpll_d6_d2 | univpll_d5_d2 | mainpll_d4_d2 | univpll_d4_d2 | mmpll_d4_d2 | mainpll_d6 | mmpll_d7 | univpll_d6 | mainpll_d5 | univpll_d5 | mainpll_d4 | tvdpll1 | univpll_d4 |
| wpe_vpp_parents | mt8195 | clk26m | mainpll_d5_d2 | mmpll_d6_d2 | univpll_d5_d2 | mainpll_d4_d2 | univpll_d4_d2 | mmpll_d4_d2 | mainpll_d6 | mmpll_d7 | univpll_d6 | mainpll_d5 | univpll_d5 | mainpll_d4 | tvdpll1 | univpll_d4 |
