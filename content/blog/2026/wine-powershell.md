---
title: WineでPowerShellが必要になったときに読む記事
date: 2026-01-20
tags: ["Windows", "Wine", "PowerShell"]
---

[Waves Curves Resolve](https://www.waves.com/plugins/curves-resolve)が[無料配布](https://www.waves.com/account/free-curves-resolve)されているので、皆さんも欲しいと思うでしょう。

しかし、Waves CentralはLinuxで動作しません。

そのため、Wineが必要になりますが、起動時にPowerShellが必要になります。

残念ながら、WineのPowerShellはスタブ実装であるため、当然動作するはずはありません。

今回はPowerShrll 7系をWineに導入してこの危機を凌ぎましょう。

## ほんへ

### 1. winetricksとかでPowerShellをインストールする

ここでGUIを表示するとインストールが終了しなくなるので気をつけてください。

### 2. 設定を変える

そのままPowerShellを起動しようとすると、起動できません。

```
070c:fixme:urlmon:InternetBindInfo_GetBindString not supported string type 20
0814:fixme:secur32:get_cipher_algid unknown algorithm 23
0814:fixme:secur32:get_mac_algid unknown algorithm 200, cipher 23
0814:fixme:secur32:get_cipher_algid unknown algorithm 23
0814:fixme:secur32:get_mac_algid unknown algorithm 200, cipher 23
081c:fixme:process:GetProcessGroupAffinity (FFFFFFFFFFFFFFFF,00007FFFFE27F114,0000000000000000): stub
081c:fixme:heap:GetNumaHighestNodeNumber semi-stub: 00007FFFFE27F0B0
081c:fixme:process:GetProcessGroupAffinity (FFFFFFFFFFFFFFFF,00007FFFFE27F0B0,0000000000000000): stub
081c:fixme:seh:WerRegisterRuntimeExceptionModule (L"C:\\Program Files\\Powershell\\7\\mscordaccore.dll", 00006FFFFA350000) stub
081c:fixme:ntdll:NtQuerySystemInformation info_class SYSTEM_PERFORMANCE_INFORMATION
081c:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00000001801C5B70, 34) stub
081c:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00000001801B9BD8, 17) stub
081c:fixme:ntdll:RtlGetCurrentProcessorNumberEx (00007FFFFE27D700) :semi-stub
081c:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00000001801C1998, 40) stub
081c:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00000001801BAA68, 51) stub
081c:fixme:nls:get_dummy_preferred_ui_language (0x8 0x409 00007FFFFE27EC00 0000000000000000 00007FFFFE27EBF8) returning a dummy value (current locale)
081c:fixme:nls:get_dummy_preferred_ui_language (0x8 0x409 00007FFFFE27EC00 00007FFFFE27EB50 00007FFFFE27EBF8) returning a dummy value (current locale)
wine: Call from 00006FFFFF3AD887 to unimplemented function icu.dll.ulocdata_getCLDRVersion, aborting
0138:fixme:amsi:AmsiInitialize L"PowerShell_C:\\Program Files\\Powershell\\7\\pwsh.exe_7.4.1 SHA: 6a98b28414948626f1b29a5e8b062e73b7ff165a", 00006FFF9AA7E958
0138:fixme:amsi:AmsiOpenSession 00000000DEADBEEF, 00006FFF9AA7E960
0138:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00000001801C1A18, 38) stub
wine: Call from 00006FFFFF3AD887 to unimplemented function icu.dll.uloc_canonicalize, aborting
Process terminated. Encountered infinite recursion while looking up resource 'Arg_ExternalException' in System.Private.CoreLib. Verify the installation of .NET is complete and does not need repairing, and that the
 state of the process has not become corrupted.
   at System.Environment.FailFast(System.String)
   at System.SR.InternalGetResourceString(System.String)
   at System.SR.GetResourceString(System.String)
   at System.Runtime.InteropServices.SEHException..ctor()
   at Interop+Globalization.GetLocaleName(System.String, Char*, Int32)
   at System.Globalization.CultureData.GetLocaleName(System.String, System.String ByRef)
   at System.Globalization.CultureData.InitIcuCultureDataCore()
   at System.Globalization.CultureData.InitCultureDataCore()
   at System.Globalization.CultureData.CreateCultureData(System.String, Boolean)
   at System.Globalization.CultureData.GetCultureData(System.String, Boolean)
   at System.Globalization.CultureInfo.GetCultureInfo(System.String)
   at System.Resources.ManifestBasedResourceGroveler.GetNeutralResourcesLanguage(System.Reflection.Assembly, System.Resources.UltimateResourceFallbackLocation ByRef)
   at System.Resources.ResourceManager.CommonAssemblyInit()
   at System.Resources.ResourceManager..ctor(System.Type)
   at System.SR.get_ResourceManager()
   at System.SR.InternalGetResourceString(System.String)
   at System.SR.GetResourceString(System.String)
   at System.Runtime.InteropServices.SEHException..ctor()
   at System.Globalization.GlobalizationMode.LoadIcu()
   at System.Globalization.GlobalizationMode..cctor()
   at System.Globalization.CultureData.InitCultureDataCore()
   at System.Globalization.CultureData.CreateCultureData(System.String, Boolean)
   at System.Globalization.CultureData.GetCultureData(System.String, Boolean)
   at System.Globalization.CultureInfo..ctor(System.String, Boolean)
   at System.Globalization.CultureInfo.GetCultureByName(System.String)
   at System.Globalization.CultureInfo.GetUserDefaultUICulture()
   at System.Globalization.CultureInfo.InitializeUserDefaultUICulture()
   at Microsoft.PowerShell.UnmanagedPSEntry.Start(System.String[], Int32)
   at Microsoft.PowerShell.ManagedPSEntry.Main(System.String[])
081c:fixme:advapi:RegisterEventSourceW ((null),L".NET Runtime"): stub
081c:fixme:advapi:ReportEventW (00000000CAFE4242,0x0001,0x0000,0x00000401,0000000000000000,0x0001,0x00000000,00007FFFFE278780,0000000000000000): stub
081c:err:eventlog:ReportEventW L"Application: pwsh.exe\n"
081c:err:eventlog:ReportEventW L"CoreCLR Version: 8.0.123.58001\n"
081c:err:eventlog:ReportEventW L".NET Version: 8.0.1\n"
081c:err:eventlog:ReportEventW L"Description: The application requested process termination through System.Environment.FailFast.\n"
081c:err:eventlog:ReportEventW L"Message: Encountered infinite recursion while looking up resource 'Arg_ExternalException' in System.Private.CoreLib. Verify the installation of .NET is complete and does not need repairing, and that the state of the process has not become corrupted.\n"
081c:err:eventlog:ReportEventW L"Stack:\n"
081c:err:eventlog:ReportEventW L"   at System.Environment.FailFast(System.String)\n"
081c:err:eventlog:ReportEventW L"   at System.SR.InternalGetResourceString(System.String)\n"
081c:err:eventlog:ReportEventW L"   at System.SR.GetResourceString(System.String)\n"
081c:err:eventlog:ReportEventW L"   at System.Runtime.InteropServices.SEHException..ctor()\n"
081c:err:eventlog:ReportEventW L"   at Interop+Globalization.GetLocaleName(System.String, Char*, Int32)\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureData.GetLocaleName(System.String, System.String ByRef)\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureData.InitIcuCultureDataCore()\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureData.InitCultureDataCore()\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureData.CreateCultureData(System.String, Boolean)\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureData.GetCultureData(System.String, Boolean)\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureInfo.GetCultureInfo(System.String)\n"
081c:err:eventlog:ReportEventW L"   at System.Resources.ManifestBasedResourceGroveler.GetNeutralResourcesLanguage(System.Reflection.Assembly, System.Resources.UltimateResourceFallbackLocation ByRef)\n"
081c:err:eventlog:ReportEventW L"   at System.Resources.ResourceManager.CommonAssemblyInit()\n"
081c:err:eventlog:ReportEventW L"   at System.Resources.ResourceManager..ctor(System.Type)\n"
081c:err:eventlog:ReportEventW L"   at System.SR.get_ResourceManager()\n"
081c:err:eventlog:ReportEventW L"   at System.SR.InternalGetResourceString(System.String)\n"
081c:err:eventlog:ReportEventW L"   at System.SR.GetResourceString(System.String)\n"
081c:err:eventlog:ReportEventW L"   at System.Runtime.InteropServices.SEHException..ctor()\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.GlobalizationMode.LoadIcu()\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.GlobalizationMode..cctor()\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureData.InitCultureDataCore()\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureData.CreateCultureData(System.String, Boolean)\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureData.GetCultureData(System.String, Boolean)\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureInfo..ctor(System.String, Boolean)\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureInfo.GetCultureByName(System.String)\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureInfo.GetUserDefaultUICulture()\n"
081c:err:eventlog:ReportEventW L"   at System.Globalization.CultureInfo.InitializeUserDefaultUICulture()\n"
081c:err:eventlog:ReportEventW L"   at Microsoft.PowerShell.UnmanagedPSEntry.Start(System.String[], Int32)\n"
081c:err:eventlog:ReportEventW L"   at Microsoft.PowerShell.ManagedPSEntry.Main(System.String[])\n"
081c:fixme:advapi:DeregisterEventSource (00000000CAFE4242) stub
081c:err:seh:NtRaiseException Unhandled exception code 80131623 flags 0 addr 0x1802a5ed9
```

よって、環境変数を用意するか、設定を変更する必要があります。

#### 環境変数の場合

```sh
export DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=1
```

を設定してください。

#### dotnetの設定ファイルを変更する場合

`~/.wine/drive_c/Program\ Files/PowerShell/7/pwsh.runtimeconfig.json` に以下を追加します。

```json
"configProperties": {
    "System.Globalization.Invariant": true
}
```

既にいくつかの設定があるので、以下のようになるはずです。

```json
{
  "runtimeOptions": {
    "tfm": "net6.0",
    "includedFrameworks": [
      {
        "name": "Microsoft.NETCore.App",
        "version": "6.0.31"
      },
      {
        "name": "Microsoft.WindowsDesktop.App",
        "version": "6.0.31"
      }
    ],
    "rollForwardOnNoCandidateFx": 1,
    "configProperties": {
      "System.Reflection.Metadata.MetadataUpdater.IsSupported": false,
      "System.Runtime.TieredCompilation": true,
      "System.Runtime.TieredCompilation.QuickJit": true,
      "System.Runtime.TieredCompilation.QuickJitForLoops": true,
      "System.Globalization.Invariant": true
    }
  }
}
```

おそらくアップデートで破壊されるので毎回修正してください。

### 3. PowerShellを起動する

```sh
$ wine powershell
095c:fixme:seh:WerGetFlags (FFFFFFFFFFFFFFFF, 00007FFFFE2FFED8) stub
095c:fixme:seh:WerSetFlags (32) stub
095c:fixme:powrprof:PowerRegisterSuspendResumeNotification (0x00000002,00007FFFFE2FFE50,00007FFFFE2FFE60) stub!
0948:fixme:heap:GetNumaHighestNodeNumber semi-stub: 00007FFFFE27F11C
0948:fixme:seh:WerRegisterRuntimeExceptionModule (L"C:\\Program Files\\PowerShell\\7\\mscordaccore.dll", 00006FFFF4250000) stub
0948:fixme:ntdll:NtQuerySystemInformation info_class SYSTEM_PERFORMANCE_INFORMATION
0948:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00000001801611D0, 34) stub
0948:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 0000000180158A88, 17) stub
0948:fixme:ntdll:RtlGetCurrentProcessorNumberEx (00007FFFFE27D530) :semi-stub
0948:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 000000018015AC78, 40) stub
0948:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 0000000180159718, 51) stub
04f8:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 000000018015DE78, 38) stub
04f8:fixme:amsi:AmsiInitialize L"PowerShell_C:\\Program Files\\PowerShell\\7\\pwsh.exe_7.2.21 SHA: 0cb04bfd18cd91bc65dace132f48635c17cda960", 00006FFF94997A80
04f8:fixme:amsi:AmsiOpenSession 00000000DEADBEEF, 00006FFF94997A88
0948:fixme:ntdll:EtwEventActivityIdControl 0x1, 00007FFFFE27EA48: stub
0948:fixme:wldp:WldpGetLockdownPolicy 00007FFFFE27D590 00007FFFFE27D648 0
0948:fixme:advapi:SaferIdentifyLevel (1 00007FFFFE27D3E0 00007FFFFE27D540 00007F3FAD8959AC) stub
0948:fixme:advapi:SaferComputeTokenFromLevel (00000000DEADBEEF, 0000000000000000, 00007FFFFE27D538, 1, 0000000000000000) stub
0948:fixme:advapi:SaferCloseLevel (00000000DEADBEEF) stub
PowerShell 7.2.21
Copyright (c) Microsoft Corporation.

https://aka.ms/powershell
Type 'help' to get help.

0948:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00007F3FAD8C83C0, 41) stub
0a38:fixme:ntdll:NtQuerySystemInformation SystemLeapSecondInformation - stub
0a58:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00007F3FAD8CEC90, 37) stub
0948:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00007F3FAD8E2FC8, 37) stub
0948:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00007F3FAD8EC898, 33) stub
0948:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00007F3FAD931B98, 46) stub
0948:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00007F3FAD95A040, 65) stub
0948:fixme:unwind:call_user_apc_dispatcher flags 0x3 are not supported.
0978:fixme:ntdll:RtlQueryProcessPlaceholderCompatibilityMode stub
0948:fixme:amsi:AmsiCloseSession 00000000DEADBEEF, 00000000DEADBEEF
0a3c:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00007F3FADCD2D08, 30) stub
0a3c:fixme:file:NtLockFile I/O completion on lock not implemented yet
0a3c:fixme:advapi:SaferIdentifyLevel (1 00007F3F9CA1E150 00007F3F9CA1E2B0 00007F3FAD8959AC) stub
0a3c:fixme:advapi:SaferComputeTokenFromLevel (00000000DEADBEEF, 0000000000000000, 00007F3F9CA1E2A8, 1, 0000000000000000) stub
0a3c:fixme:advapi:SaferCloseLevel (00000000DEADBEEF) stub
0a3c:fixme:advapi:SaferIdentifyLevel (1 00007F3F9CA1E1C0 00007F3F9CA1E320 00007F3FAD8959AC) stub
0a3c:fixme:advapi:SaferComputeTokenFromLevel (00000000DEADBEEF, 0000000000000000, 00007F3F9CA1E318, 1, 0000000000000000) stub
0a3c:fixme:advapi:SaferCloseLevel (00000000DEADBEEF) stub
0a3c:fixme:amsi:AmsiOpenSession 00000000DEADBEEF, 00006FFF94997A88
0a3c:fixme:amsi:AmsiScanBuffer 00000000DEADBEEF, 00007F3FADEC6934, 26296, L"C:\\program files\\powershell\\7\\Modules\\PSReadLine\\PSReadLine.psm1", 00000000DEADBEEF, 00007F3F9CA1DFC8
0948:fixme:amsi:AmsiCloseSession 00000000DEADBEEF, 00000000DEADBEEF
0a3c:fixme:amsi:AmsiOpenSession 00000000DEADBEEF, 00006FFF94997A88
0a3c:fixme:amsi:AmsiScanBuffer 00000000DEADBEEF, 00007F3FADF0539C, 90, L"", 00000000DEADBEEF, 00007F3F9CA1F6A8
0a3c:fixme:ntdll:EtwEventSetInformation (deadbeef, 2, 00007F3FADF0D4B0, 40) stub
0a3c:fixme:advapi:SaferIdentifyLevel (1 00007F3F9CA1EE00 00007F3F9CA1EF60 00007F3FAD8959AC) stub
0a3c:fixme:advapi:SaferComputeTokenFromLevel (00000000DEADBEEF, 0000000000000000, 00007F3F9CA1EF58, 1, 0000000000000000) stub
0a3c:fixme:advapi:SaferCloseLevel (00000000DEADBEEF) stub
0a3c:fixme:amsi:AmsiScanBuffer 00000000DEADBEEF, 00007F3FADF1BE4C, 19438, L"C:\\Program Files\\PowerShell\\7\\profile.ps1", 00000000DEADBEEF, 00007F3F9CA1EF28
0a3c:fixme:amsi:AmsiCloseSession 00000000DEADBEEF, 00000000DEADBEEF
Loading personal and system profiles took 12104ms.
0a3c:fixme:amsi:AmsiOpenSession 00000000DEADBEEF, 00006FFF94997A88
0a3c:fixme:amsi:AmsiScanBuffer 00000000DEADBEEF, 00007F3FAD8329BC, 12, L"", 00000000DEADBEEF, 00007F3F9CA1F6A8
0a3c:fixme:amsi:AmsiScanBuffer 00000000DEADBEEF, 00007F3FAD8327F4, 432, L"", 00000000DEADBEEF, 00007F3F9CA1EF98
PS E:\home\akku>
```

色々文句を言われますが起動しました。

### 4. 補足

PowerShellにCtrl+Cを送るとホストのZshがバグります。

```sh
exit
```

で止めてください。
