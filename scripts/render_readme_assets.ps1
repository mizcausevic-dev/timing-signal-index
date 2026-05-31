$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$screenshots = Join-Path $root "screenshots"
New-Item -ItemType Directory -Force -Path $screenshots | Out-Null
Get-ChildItem -Path $screenshots -File -ErrorAction SilentlyContinue | Remove-Item -Force

Add-Type -AssemblyName System.Drawing

function New-ProofImage {
  param(
    [string]$Title,
    [string]$Subtitle,
    [string[]]$Bullets,
    [string]$OutputPath
  )

  $width = 1600
  $height = 900
  $bmp = New-Object System.Drawing.Bitmap($width, $height)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = "AntiAlias"
  $bg = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(7,10,15))
  $panelPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(60, 120, 255, 170), 2)
  $textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(233,243,255))
  $mutedBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(186,200,218))
  $accentBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(55,255,139))
  $dotBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(25,199,255))
  $fontTitle = New-Object System.Drawing.Font("Georgia", 30, [System.Drawing.FontStyle]::Bold)
  $fontSub = New-Object System.Drawing.Font("Segoe UI", 16)
  $fontBody = New-Object System.Drawing.Font("Segoe UI", 14)

  $g.FillRectangle($bg, 0, 0, $width, $height)
  $rect = New-Object System.Drawing.Rectangle(40, 40, 1520, 820)
  $g.DrawRectangle($panelPen, $rect)
  $g.DrawString("Timing Signal Index", $fontSub, $accentBrush, 70, 85)
  $g.DrawString($Title, $fontTitle, $textBrush, 70, 135)
  $subtitleRect = New-Object System.Drawing.RectangleF(70, 220, 1400, 80)
  $g.DrawString($Subtitle, $fontSub, $mutedBrush, $subtitleRect)

  $y = 320
  foreach ($bullet in $Bullets) {
    $g.FillEllipse($dotBrush, 85, $y + 8, 10, 10)
    $bulletRect = New-Object System.Drawing.RectangleF(110, $y, 1320, 48)
    $g.DrawString($bullet, $fontBody, $textBrush, $bulletRect)
    $y += 72
  }

  $g.DrawString("Synthetic proof render for README packaging.", $fontSub, $mutedBrush, 70, 800)
  $bmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

New-ProofImage -Title "Recurring timing snapshot for the executive market map" -Subtitle "One recurring index for timing windows, board pressure, conviction, and savings relevance." -Bullets @(
  "The overview keeps pressure, conviction, board-ready count, stale signals, and savings relevance in one executive index.",
  "Leadership can revisit the strongest themes without rebuilding the full story from zero each cycle.",
  "This layer sits after the radar and keeps recurring timing checks readable."
) -OutputPath (Join-Path $screenshots "01-overview-proof.png")

New-ProofImage -Title "Signal lane keeps buyer, band, and next read visible" -Subtitle "Every signal retains target buyer, timing band, pressure, conviction, and next read." -Bullets @(
  "The lane makes it obvious which themes belong in act-now, prepare, or watch mode.",
  "Pressure and conviction stay together, so timing is never separated from signal quality.",
  "Next reads remain attached to the signal instead of disappearing into generic commentary."
) -OutputPath (Join-Path $screenshots "02-signal-lane-proof.png")

New-ProofImage -Title "Window map ties company tags back to live surfaces" -Subtitle "Timing window, evidence state, board relevance, and related surfaces stay readable in one table." -Bullets @(
  "This view keeps IBM, Azure, Okta, FinTech, biotech, and nonprofit signal traces tied to real surfaces.",
  "Board relevance and evidence state remain visible before any memo is promoted upward.",
  "Leadership can see which windows are warm and which still need refresh work."
) -OutputPath (Join-Path $screenshots "03-window-map-proof.png")

New-ProofImage -Title "Board pressure and bands keep recurring reviews honest" -Subtitle "Story strength, savings relevance, and next-read sequence remain attached to the signal itself." -Bullets @(
  "The index is about recurring review: what heats up, what cools down, and what should move next.",
  "Board pressure stays bounded to conviction and signal freshness instead of drifting into unsupported claims.",
  "This creates a repeatable leadership cadence for recurring market timing checks."
) -OutputPath (Join-Path $screenshots "04-board-pressure-proof.png")
